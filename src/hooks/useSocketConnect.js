import { useSelector, useDispatch } from "react-redux";
import io from "socket.io-client";
import { useEffect } from "react";

import {
  addSensorData,
  addSwitch,
  addBinData,
  addGasData,
  addBMSData,
} from "../features/user/userData";

const useSocketConnect = () => {
  const dispatch = useDispatch();
  const accessToken = useSelector((state) => state.user.accessToken);
  const backend = useSelector((state) => state.user.backend);

  useEffect(() => {
    if (accessToken) {
      const socket = io(backend, {
        auth: { accessToken },
      });

      socket.on("connect", () => {
        console.log("Connected to WebSocket server");
      });

      socket.on("sensorData", (data) => {
        // console.log("hydroponics:", data);
        dispatch(addSensorData(data));
      });

      socket.on("switch", (data) => {
        // console.log("switch:", data);
        dispatch(addSwitch(data));
      });

      socket.on("smartBin", (data) => {
        // console.log("smartbin:", data);
        dispatch(addBinData(data));
      });

      socket.on("gasMonitor", (data) => {
        // console.log("gasMonitor:", data);
        dispatch(addGasData(data));
      });

      socket.on("bms", (data) => {
        // console.log("bms:", data);
        dispatch(addBMSData(data));
      });

      return () => {
        socket.disconnect();
      };
    }
  }, [accessToken, dispatch, backend]);
};

export default useSocketConnect;
