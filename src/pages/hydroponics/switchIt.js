import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import { addSwitch } from "../../features/user/userData";

const useSwitchIt = () => {
  const axiosPrivate = useAxiosPrivate();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const setSwitchState = useCallback(
    async (switchID) => {
      try {
        const response = await axiosPrivate.post("/setswitchstate", {
          switchID,
        });
        const switchState = response?.data;
        dispatch(addSwitch(switchState));
        localStorage.setItem(`toggleState`, JSON.stringify(switchState));
        console.log(switchState);
      } catch (error) {
        console.error("Error fetching users:", error);
        if (error.response && error.response.status === 403) {
          console.log("Redirecting to login page...");
          navigate("/login"); // Replace '/login' with your actual login page path
        }
      }
    },
    [axiosPrivate, dispatch, navigate, 1]
  );

  return setSwitchState;
};

export default useSwitchIt;
