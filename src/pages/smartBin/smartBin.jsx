import style from "./smartBin.module.css";
import NavBar from "../../components/navBar";
import { useSelector } from "react-redux";
const SmartBin = () => {
  const binData = useSelector((state) => state.user.binData);

  return (
    <>
      <NavBar />
      <div className={style.smartBin}>
        <h1>SmartBin</h1>
        <p>
          SmartBin uses image processing to classify waste & update fill levels.
        </p>

        {/* Sensor Readings */}
        <div className="sensorValues">
          <div className="sensor_label">
            Location
            <div className="sensor_value">{binData?.location} </div>
          </div>
          <div className="sensor_label">
            Organic Fill Level
            <div className="sensor_value">{binData?.organic} % </div>
          </div>
          <div className="sensor_label">
            In-Organic Fill Level
            <div className="sensor_value">{binData?.inorganic} % </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SmartBin;
