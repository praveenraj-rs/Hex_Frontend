import {
  acute,
  alarm,
  bolt,
  cell_tower,
  cell_wifi,
  electric_bolt,
  home_iot_device,
  missing_controller,
  network_node,
  notification,
  planner_review,
  podcasts,
  power_settings_new,
  router,
  setting,
} from "./iot_icons";
import { motion } from "framer-motion";

import "./icon_bg.css";

const IconBg = () => {
  return (
    <div className="iconbg">
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={planner_review}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={alarm}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={bolt}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={cell_tower}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={cell_wifi}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={setting}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={home_iot_device}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={missing_controller}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={network_node}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={router}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={podcasts}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={power_settings_new}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={notification}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={electric_bolt}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={acute}
        alt=""
      />
      <motion.img
        whileHover={{ scale: 1.1 }}
        transition={{ type: "spring", stiffness: 400, damping: 10 }}
        src={network_node}
        alt=""
      />
    </div>
  );
};

export default IconBg;
