import React from "react";
import "./navBar.css";
import Icon from "../icons/hexfuseIcon";
import { Link, NavLink } from "react-router-dom";
import useLogout from "../hooks/useLogout";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const NavBar = () => {
  const accessToken = useSelector((state) => state.user.accessToken);
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/");
  };

  return (
    <nav>
      <div className="brandIcon">
        <Link to="/">
          <Icon />
        </Link>
        <Link to={"/"}>
          <h1>HexFuse</h1>
        </Link>
      </div>

      <div>
        <ul className="links">
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/hextk">HexTK</NavLink>
          </li>
          <li>
            <NavLink to={"/members"}>Members</NavLink>
          </li>

          <li>
            {accessToken ? (
              <NavLink
                className="loginBtn"
                style={() => ({
                  color: "black",
                  backgroundColor: "var(--pTextColor)",
                  borderColor: "transparent",
                })}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#DC6C6C";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--pTextColor)";
                }}
                onClick={signOut}
              >
                Logout
              </NavLink>
            ) : (
              <NavLink
                className="loginBtn"
                style={() => ({
                  color: "black",
                  backgroundColor: "var(--greenElement)",
                })}
                onMouseEnter={(e) => {
                  e.target.style.backgroundColor = "#6CDA80";
                }}
                onMouseLeave={(e) => {
                  e.target.style.backgroundColor = "var(--greenElement)";
                }}
                to={"/login"}
              >
                Login
              </NavLink>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
