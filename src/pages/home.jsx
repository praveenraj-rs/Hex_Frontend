import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../icons/hexfuseIcon";
import SocialMedia from "../components/socialMedia";
import "./home.css";
import NavBar from "../components/navBar";
import { easeIn } from "framer-motion";
import HexfuseData from "../data/informations";

const Home = () => {
  return (
    <>
      <NavBar />
      <div className="about">
        <div className="borderBox1">
          <br />
          <Icon
            animate={{
              opacity: [0, 1],
              scale: [0.7, 1],
              transition: {
                duration: 0.5,
                transform: easeIn,
              },
            }}
            width="320px"
            height="160px"
          />
          <h1>HexFuse</h1>
          <p>A team that work on automation.</p>
          <br />
          <div className="box2">
            <SocialMedia
              github="https://github.com/hexfuse"
              instagram="https://www.instagram.com/hexfuse/"
              linkedin="https://www.linkedin.com/in/hexfuse/"
            />
          </div>
        </div>
      </div>
      <div className="aboutHexfuse">
        <h1>About</h1>
        <p>{HexfuseData.HexfuseData.about}</p>
      </div>
      <div className="projects">
        <div>
          <div className="iot-section">
            <div>
              <h1>HexTK</h1>
              {/* <p>{HexfuseData.HexfuseData.hextk}</p> */}
              <p>Integrated IoT System for Comprehensive Dashboard Control</p>
              <NavLink className="navLinkBtn" to={"/hextk"}>
                HexTK
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
