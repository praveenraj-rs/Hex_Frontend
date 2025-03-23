import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import Icon from "../icons/hexfuseIcon";
import axios from "../api/axios";
import "./LoginForm.css";
import {
  addUser,
  addAccessToken,
  addPersist,
  addSwitch,
  addSensorData,
  addBinData,
  addGasData,
  addBMSData,
} from "../features/user/userData";

const LoginForm = () => {
  const dispatch = useDispatch();
  const persist = useSelector((state) => state.user.persist);
  const backend = useSelector((state) => state.user.backend);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!user || !pwd) {
      setErrMsg("Enter Username & Password");
      return;
    }
    try {
      const response = await axios.post(
        "/login",
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        }
      );

      const accessToken = response?.data?.accessToken;
      dispatch(addUser(user));
      dispatch(addAccessToken({ accessToken }));

      // Fetching Data from Backend with Web Socket
      socketConnect(accessToken, backend);

      setUser("");
      setPwd("");
      navigate(from, { replace: true });
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 401) {
        setErrMsg("Login Failed");
      } else {
        setErrMsg("Login Failed");
      }
      errRef.current.focus();
    }
  };

  const socketConnect = (accessToken, backend) => {
    const socket = io(backend, {
      auth: { accessToken },
    });

    socket.on("connect", () => {
      console.log("Connected to WebSocket server");
    });

    socket.on("sensorData", (data) => {
      dispatch(addSensorData(data));
    });

    socket.on("switch", (data) => {
      dispatch(addSwitch(data));
    });

    socket.on("smartBin", (data) => {
      dispatch(addBinData(data));
    });

    socket.on("gasMonitor", (data) => {
      dispatch(addGasData(data));
    });

    socket.on("bms", (data) => {
      dispatch(addBMSData(data));
    });
  };

  const togglePersist = () => {
    dispatch(addPersist(!persist));
    localStorage.setItem("persist", !persist);
  };

  return (
    <div className="loginForm">
      <div className="formContainer">
        <div className="companyLogo">
          <Icon width="12rem" height="8rem" />
          <h3>HexFuse</h3>
        </div>

        <div className="formSection">
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Login Form</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              ref={userRef}
              autoComplete="off"
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="passwd">Password:</label>
            <input
              type="password"
              id="passwd"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />{" "}
            <div className="persistCheck">
              <input
                type="checkbox"
                id="persist"
                onChange={togglePersist}
                checked={persist}
              />
              <label htmlFor="persist">Trust This Device</label>
            </div>
            <button disabled={!user || !pwd ? true : false}>Login</button>
          </form>

          <p>
            Not a memeber?
            <br />
            <a href="/signup">SignUp</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
