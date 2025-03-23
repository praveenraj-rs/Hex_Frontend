import style from "./hydroponics.module.css";
import NavBar from "../../components/navBar";
import ToggleButton from "../../components/toggleButton";
import { useSelector } from "react-redux";
import LineGraph from "../../components/lineGraph";
import useSwitchIt from "./switchIt";
const Hydroponics = () => {
  const switchState = useSelector((state) => state.user.switchState);
  const sensorData = useSelector((state) => state.user.sensorData);
  const setSwitchState = useSwitchIt();

  const handleSwitch = (switchID) => {
    setSwitchState(switchID);
  };

  return (
    <>
      <NavBar />
      <div className={style.hydroponics}>
        <h1>Autonomous Hydroponics System</h1>

        {/* Sensor Readings */}
        <div className="sensorValues">
          <div className="sensor_label">
            Water Temperature
            <div className="sensor_value">{sensorData?.wtemp} °C </div>
          </div>
          <div className="sensor_label">
            Atmospheric Temperature
            <div className="sensor_value">{sensorData?.atmtemp} °C </div>
          </div>
          <div className="sensor_label">
            PH
            <div className="sensor_value">{sensorData?.ph} </div>
          </div>
          <div className="sensor_label">
            TDS
            <div className="sensor_value">{sensorData?.tds} ppm </div>
          </div>
          <div className="sensor_label">
            Humidity
            <div className="sensor_value">{sensorData?.humidity} % </div>
          </div>
        </div>

        {/* ToggleButton */}
        <div className="sensorValues">
          <ToggleButton
            label="Air Stone"
            clickHandle={() => handleSwitch("switch1")}
            checking={switchState.switch1}
          ></ToggleButton>

          <ToggleButton
            label="Water Pump"
            clickHandle={() => handleSwitch("switch2")}
            checking={switchState.switch2}
          ></ToggleButton>
          <ToggleButton
            label="Humidifier"
            clickHandle={() => handleSwitch("switch3")}
            checking={switchState.switch3}
          ></ToggleButton>
        </div>

        {/* Graph */}
        <div className="sensorValues">
          <div className="sensor_label">
            <LineGraph />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hydroponics;
