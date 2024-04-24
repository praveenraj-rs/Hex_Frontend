import React from "react";
import { NavLink } from "react-router-dom";
import Icon from "../icons/hexfuseIcon";
import SocialMedia from "../components/socialMedia";
import "./home.css";
import NavBar from "../components/navBar";
const Home = () => {
  return (
    <>
      <NavBar />
      <div className="about">
        <div className="borderBox">
          <br />
          <Icon width="320px" height="160px" />
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

        <div className="hexTK">
          <h1>HexTK</h1>
          <p>
            We are working on simple and easy to use web UI
            <br /> to seamlessly link ESP network modules <br />
            wirelessly through the HTTP protocol.
          </p>
          <NavLink className="navLinkBtn" to={"/hextk"}>
            HexTK
          </NavLink>
        </div>
      </div>
    </>
  );
};

export default Home;
