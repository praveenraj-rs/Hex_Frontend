import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Icon = (props) => {
  const { width, height, animate } = props;
  return (
    <NavLink to="/">
      <motion.svg
        animate={animate}
        width={width ? width : "50px"}
        height={height ? height : "50px"}
        xmlns="http://www.w3.org/2000/svg"
        version="1.1"
        viewBox="0 0 10.936 5.462"
        xmlSpace="preserve"
      >
        <defs>
          <path d="M1.506 11.025H5.148V13.835H1.506z"></path>
          <path d="M3.059 12.22H6.21V14.148H3.059z"></path>
          <path d="M3.561 12.87H12.552V15.383999999999999H3.561z"></path>
        </defs>
        <g transform="translate(-.882 -3.619)">
          <g
            fillOpacity="1"
            strokeDasharray="none"
            strokeOpacity="1"
            transform="translate(-.07 .03)"
          >
            <g
              fill="none"
              strokeWidth="0.1"
              transform="matrix(5.02047 0 0 5.02047 -3.707 -2.99)"
            >
              <path
                stroke="#fff"
                d="M1.675 1.37l.681.958L1.3 2.32l-.31-.452.373-.473.622.937"
              ></path>
              <path
                stroke="#00ff4d"
                d="M1.692 1.38l1.043.007.31.453-.373.473-.622-.937"
              ></path>
            </g>
            <path
              fill="#fff"
              stroke="#fff"
              strokeWidth="0.05"
              d="M4.795 3.71l-.547-.017.573.76.4-.227z"
            ></path>
          </g>
        </g>
      </motion.svg>
    </NavLink>
  );
};

export default Icon;
