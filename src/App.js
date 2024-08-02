import { Routes, Route } from "react-router-dom";
import io from "socket.io-client";
import React, { useEffect } from "react";
import Layout from "./components/layout";
import RequireAuth from "./components/requireAuth";
import PersistLogin from "./components/persistLogin";
import { useDispatch, useSelector } from "react-redux";

import {
  SignupForm,
  LoginForm,
  Home,
  About,
  Members,
  Missing,
  HexTK,
} from "./pages";
import { addSensorData, addSensorValues } from "./features/user/userData";

function App() {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken);

  // useEffect(() => {
  //   const socket = io("http://localhost:3500");
  //   if (accessToken) {
  //     socket.auth = { accessToken };
  //     socket.connect();

  //     socket.on("sensorData", (data) => {
  //       console.log("data:", data);
  //       dispatch(addSensorData(data));
  //     });

  //     return () => {
  //       socket.disconnect();
  //     };
  //   }
  // }, [accessToken]);

  useEffect(() => {
    if (accessToken) {
      const socket = io("http://localhost:3500", {
        auth: { accessToken },
      });

      socket.on("connect", () => {
        console.log("Connected to WebSocket server");
      });

      socket.on("sensorData", (data) => {
        console.log("data:", data);
        dispatch(addSensorData(data));
      });

      socket.on("sensorValues", (data) => {
        console.log("data:", data);
        console.log(FormData);
        dispatch(addSensorValues(data));
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [accessToken, dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route element={<PersistLogin />}>
            {/* Publically available */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/members" element={<Members />} />
            <Route path="/signup" element={<SignupForm />} />
            <Route path="/login" element={<LoginForm />} />

            {/* Private routes */}
            <Route element={<RequireAuth />}>
              <Route path="/hextk" element={<HexTK />} />
            </Route>
          </Route>

          {/* catch all */}
          <Route path="*" element={<Missing />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
