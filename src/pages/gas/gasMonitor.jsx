import "./gasMonitor.css";
import NavBar from "../../components/navBar";
import { useSelector } from "react-redux";
const GasMonitor = () => {
  const gasData = useSelector((state) => state.user.gasData);

  return (
    <>
      <NavBar />
      <div className="gasMonitor">
        <h1>Gas Monitoring</h1>
        <p>Gas monitoring detects harmful gases and tracks temperature.</p>

        {/* Sensor Readings */}
        <div className="sensorValues">
          <div className="sensor_label">
            Temperature
            <div className="sensor_value">{gasData?.temp} °C </div>
          </div>
          <div className="sensor_label">
            MQ4
            <div className="sensor_value">{gasData?.mq4} PPM </div>
          </div>
          <div className="sensor_label">
            MQ6
            <div className="sensor_value">{gasData?.mq6} PPM </div>
          </div>
          <div className="sensor_label">
            MQ7
            <div className="sensor_value">{gasData?.mq7} PPM </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default GasMonitor;
