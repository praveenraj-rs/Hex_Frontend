import React from "react";
import { NavLink } from "react-router-dom";
import "./hextk.css";
import NavBar from "../components/navBar";
const HexTK = () => {
  return (
    <>
      <NavBar />
      <div className="about">
        <div className="borderBox1">
          <h1>HexTK</h1>
          <p>Integrated IoT System for Comprehensive Dashboard Control</p>
          <br />
        </div>
      </div>
      <div>
        <div className="hextk">
          <div>
            <NavLink className="navLinkBtn" to={"/hydroponics"}>
              Hydroponics
            </NavLink>
          </div>
          <div>
            <NavLink className="navLinkBtn" to={"/smartbin"}>
              SmartBin
            </NavLink>
          </div>
          <div>
            <NavLink className="navLinkBtn" to={"/gasmonitor"}>
              Gas Monitor
            </NavLink>
          </div>
          <div>
            <NavLink className="navLinkBtn" to={"/bms"}>
              BMS
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default HexTK;
