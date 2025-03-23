import { useRef, useState, useEffect } from "react";
import React from "react";
import "./SignupForm.css";
import Icon from "../icons/hexfuseIcon";
import axios from "../api/axios";

const USER_REGEX = /^[a-z][a-z0-9_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const REGISTER_URL = "/signup";

const SignupForm = () => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [validName, setValidName] = useState(false);
  const [userFocus, setUserFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    setValidPwd(result);
    const match = pwd === matchPwd;
    setValidMatch(match);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // if button enabled with JS hack
    const v1 = USER_REGEX.test(user);
    const v2 = PWD_REGEX.test(pwd);
    if (!v1 || !v2) {
      setErrMsg("Invalid Entry");
      return;
    }
    try {
      await axios.post(REGISTER_URL, JSON.stringify({ user, pwd }), {
        headers: { "Content-Type": "application/json" },
      });

      setSuccess(true);
    } catch (err) {
      if (!err?.response) {
        setErrMsg("No Server Response");
      } else if (err.response?.status === 409) {
        setErrMsg("Username Already Exists");
      } else {
        setErrMsg("Registration Failed");
      }
      errRef.current.focus();
    }
  };

  return (
    <div className="signupForm">
      <div className="formContainer">
        <div className="companyLogo">
          <Icon width="12rem" height="8rem" />
          <h3>HexFuse</h3>
        </div>
        {success ? (
          <section className="successPage">
            <h3>Successfull</h3>
            <br />
            <a href="/login">Login</a>
          </section>
        ) : (
          <div className="formSection">
            <p
              ref={errRef}
              className={errMsg ? "errmsg" : "offscreen"}
              aria-live="assertive"
            >
              {errMsg}
            </p>
            <h1>SignUp Form</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="username">
                Username:
                <span className={validName ? "valid" : "hide"}> &#10003;</span>
                <span className={validName || !user ? "hide" : "inValid"}>
                  &#10060;
                </span>
              </label>
              <input
                type="text"
                id="username"
                ref={userRef}
                autoComplete="off"
                onChange={(e) => setUser(e.target.value)}
                value={user}
                required
                aria-invalid={validName ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setUserFocus(true)}
                onBlur={() => setUserFocus(false)}
              />
              <p
                id="uidnote"
                className={
                  userFocus && user && !validName ? "instructions" : "offscreen"
                }
              >
                4 to 24 characters.
                <br />
                Small letters only.
                <br />
                Numbers, Underscores are allowed.
              </p>

              <label htmlFor="passwd">
                Password:
                <span className={validPwd ? "valid" : "hide"}> &#10003;</span>
                <span className={validPwd || !pwd ? "hide" : "inValid"}>
                  &#10060;
                </span>
              </label>
              <input
                type="password"
                id="passwd"
                onChange={(e) => setPwd(e.target.value)}
                value={pwd}
                required
                aria-invalid={validPwd ? "false" : "true"}
                aria-describedby="pwdnote"
              />
              <p
                id="pwdnote"
                className={pwd && !validPwd ? "instructions" : "offscreen"}
              >
                8 to 24 characters.
                <br /> Must include uppercase and lowercase letters, <br />a
                number and a special character.
                <br /> Allowed special characters: !@#$%
              </p>

              <label htmlFor="confirm_pwd">
                Confirm Password:
                <span className={validMatch && matchPwd ? "valid" : "hide"}>
                  &#10003;
                </span>
                <span className={validMatch || !matchPwd ? "hide" : "inValid"}>
                  &#10060;
                </span>
              </label>
              <input
                type="password"
                id="confirm_pwd"
                onChange={(e) => setMatchPwd(e.target.value)}
                value={matchPwd}
                required
                aria-invalid={validMatch ? "false" : "true"}
                aria-describedby="confirmnote"
                onFocus={() => setMatchFocus(true)}
                onBlur={() => setMatchFocus(false)}
              />
              <p
                id="confirmnote"
                className={
                  matchFocus && !validMatch ? "instructions" : "offscreen"
                }
              >
                Match the above entered password.
              </p>
              <button
                disabled={!validName || !validPwd || !validMatch ? true : false}
              >
                Sign Up
              </button>
            </form>

            <p>
              Already registered?
              <br />
              <a href="/login">Login</a>
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default SignupForm;
