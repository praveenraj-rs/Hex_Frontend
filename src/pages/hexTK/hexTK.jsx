import "./hexTK.css";
import NavBar from "../../components/navBar";
import SwitchIt from "./switchIt";
import ToggleButton from "../../components/toggleButton";
import { useSelector } from "react-redux";
import LineGraph from "../../components/lineGraph";
const HexTK = () => {
  const switchState = useSelector((state) => state.user.switchState);
  const sensorData = useSelector((state) => state.user.sensorData);
  // console.log(sensorData);
  const Switching = SwitchIt();
  console.log(sensorData);

  return (
    <>
      <NavBar />
      <div className="hexTK">
        <h1>HexTK</h1>
        <p>Hydroponics Sensor Readings</p>
        <LineGraph />
        {/* <ToggleButton
          label="Bulb"
          clickHandle={Switching}
          checking={switchState}
        ></ToggleButton> */}
        <div className="hydroReading">
          {/* <div className="reading">PH: {sensorData?.ph}</div> */}
          {/* <div className="reading">
            Atmospheric Temperature: {sensorData?.atmtemp}
          </div> */}
          <div className="reading">Water Temperature: {sensorData?.wtemp}</div>
          {/* <div className="reading">Electon Conductivity: {sensorData?.ec}</div> */}
          <div className="reading">TDS: {sensorData?.tds}</div>
          <div className="reading">Humidity: {sensorData?.humidity}</div>
        </div>
      </div>
    </>
  );
};

export default HexTK;
