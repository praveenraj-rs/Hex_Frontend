import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: undefined,
  accessToken: undefined,
  persist: localStorage.getItem("persist") === "true",
  switchState: `${localStorage.getItem("toggleState")}`,
  sensorData: undefined,
  sensorValues: undefined,
  binData: undefined,
  gasData: undefined,
  bmsData: undefined,
  backend: process.env.REACT_APP_BACKEND || "http://localhost:3500",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    addUser: (state, action) => {
      state.user = action.payload;
    },
    addAccessToken: (state, action) => {
      state.accessToken = action.payload;
    },
    addPersist: (state, action) => {
      state.persist = action.payload;
    },
    addSwitch: (state, action) => {
      state.switchState = action.payload;
    },
    addSensorData: (state, action) => {
      state.sensorData = action.payload;
    },
    addSensorValues: (state, action) => {
      state.sensorValues = action.payload;
    },
    addBinData: (state, action) => {
      state.binData = action.payload;
    },
    addGasData: (state, action) => {
      state.gasData = action.payload;
    },
    addBMSData: (state, action) => {
      state.bmsData = action.payload;
    },
  },
});

export const {
  addUser,
  addAccessToken,
  addPersist,
  addSwitch,
  addSensorData,
  addSensorValues,
  addBinData,
  addGasData,
  addBMSData,
} = userSlice.actions;

export default userSlice.reducer;
