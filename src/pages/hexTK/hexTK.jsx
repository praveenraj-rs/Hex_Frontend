import "./hexTK.css";
import NavBar from "../../components/navBar";
import SwitchIt from "./switchIt";
import ToggleButton from "../../components/toggleButton";
import { useSelector } from "react-redux";
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
        <p>Simplify the ESP connection.</p>
        <ToggleButton
          label="Bulb"
          clickHandle={Switching}
          checking={switchState}
        ></ToggleButton>
        <div
          style={{
            padding: "10px",
            backgroundColor: "gray",
            borderRadius: "10px",
          }}
        >
          <div style={{ color: "white" }}>PH: {sensorData?.ph}</div>
          <div style={{ color: "white" }}>
            Atmospheric Temperature: {sensorData?.atmtemp}
          </div>
          <div style={{ color: "white" }}>
            Water Temperature: {sensorData?.wtemp}
          </div>
          <div style={{ color: "white" }}>
            Electon Conductivity: {sensorData?.ec}
          </div>
          <div style={{ color: "white" }}>TDS: {sensorData?.tds}</div>
          <div style={{ color: "white" }}>Humidity: {sensorData?.humidity}</div>
        </div>
      </div>
    </>
  );
};

export default HexTK;
