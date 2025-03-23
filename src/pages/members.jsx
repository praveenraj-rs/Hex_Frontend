import React from "react";
import { useState } from "react";
import SocialMedia from "../components/socialMedia";
import "./members.css";
import { Employees } from "../data/members";
import { Mentor } from "../data/mentor";
import NavBar from "../components/navBar";

const Member = (props) => {
  const { name, position, github, instagram, linkedin, img } = props;
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className="member"
      onMouseOver={() => setIsHovering(true)}
      onMouseOut={() => setIsHovering(false)}
    >
      <img key={img} src={img} alt={name}></img>
      <h3>{name}</h3>
      <p>{position}</p>
      <div
        style={{
          visibility: isHovering ? "visible" : "hidden",
          opacity: isHovering ? 1 : 0,
        }}
        className="social"
      >
        <SocialMedia
          github={github}
          linkedin={linkedin}
          instagram={instagram}
          width="35px"
          height="35px"
        />
      </div>
    </div>
  );
};
const Mentors = (props) => {
  const { name, position, img } = props;

  return (
    <div className="member">
      <img key={img} src={img} alt={name}></img>
      <h3>{name}</h3>
      <p>{position}</p>
      <p>VIT Chennai</p>
    </div>
  );
};

const Members = () => {
  return (
    <>
      <NavBar />

      <div className="members">
        {/* <div className="headH1">
          <h2>Mentors</h2>
        </div>

        <div className="memberComponent" style={{ width: "80%" }}>
          {Mentor.map(
            ({ name, position, github, instagram, linkedin, img }, key) => {
              return (
                <div key={key}>
                  <Mentors
                    key={key}
                    name={name}
                    img={img}
                    position={position}
                    github={github}
                    instagram={instagram}
                    linkedin={linkedin}
                  />
                </div>
              );
            }
          )}
        </div> */}

        <div className="headH1">
          <h2>Members</h2>
        </div>

        <div className="memberComponent">
          {Employees.map(
            ({ name, position, github, instagram, linkedin, img }, key) => {
              return (
                <div key={key}>
                  <Member
                    key={key}
                    name={name}
                    img={img}
                    position={position}
                    github={github}
                    instagram={instagram}
                    linkedin={linkedin}
                  />
                </div>
              );
            }
          )}
        </div>
      </div>
    </>
  );
};

export default Members;
