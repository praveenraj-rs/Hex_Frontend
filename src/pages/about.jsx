import React from "react";
import "./about.css";
import NavBar from "../components/navBar";
import IconBg from "../ui/icon_bg";
const About = () => {
  return (
    <>
      <NavBar />
      <div className="about">
        <div className="headH1">
          <p>We are in Development Stage.</p>
        </div>
        <IconBg></IconBg>
      </div>
      <div></div>
    </>
  );
};

export default About;
