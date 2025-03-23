import style from "./bms.module.css";
import NavBar from "../../components/navBar";
import { useSelector } from "react-redux";
const BMS = () => {
  const bmsData = useSelector((state) => state.user.bmsData);

  return (
    <>
      <NavBar />
      <div className={style.bms}>
        <h1>BMS</h1>
        <p>Battery Management System</p>

        {/* Sensor Readings */}
        <div className="sensorValues">
          <div className="sensor_label">
            Voltage
            <div className="sensor_value">{bmsData?.voltage} V</div>
          </div>
          <div className="sensor_label">
            Current
            <div className="sensor_value">{bmsData?.current} A </div>
          </div>
          <div className="sensor_label">
            External Temperature
            <div className="sensor_value">{bmsData?.temp} °C </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BMS;
