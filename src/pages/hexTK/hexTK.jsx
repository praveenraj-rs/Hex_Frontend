import "./hexTK.css";
import NavBar from "../../components/navBar";
import SwitchIt from "./switchIt";
import ToggleButton from "../../components/toggleButton";
import { useSelector } from "react-redux";
const HexTK = () => {
  const switchState = useSelector((state) => state.user.switchState);
  const Switching = SwitchIt();
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
      </div>
    </>
  );
};

export default HexTK;
