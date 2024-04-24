import "./hexTK.css";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addSwitch } from "../../features/user/userData";

const SwitchIt = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const Switched = async () => {
    try {
      const response = await axiosPrivate.get("/switchit");
      const switchState = response?.data;
      dispatch(addSwitch(switchState));
      localStorage.setItem("toggleState", JSON.stringify(switchState));
      console.log(switchState);
    } catch (error) {
      console.error("Error fetching users:", error);
      if (error.response && error.response.status === 403) {
        console.log("Redirecting to login page...");
        navigate("/login"); // Replace '/login' with your actual login page path
      }
    }
  };

  return Switched;
};

export default SwitchIt;
