import axios from "../api/axios";
import { useDispatch } from "react-redux";
import {
  addUser,
  addAccessToken,
  addSensorData,
} from "../features/user/userData";

const useLogout = () => {
  const dispatch = useDispatch();

  const logout = async () => {
    dispatch(addUser(undefined));
    dispatch(addAccessToken(undefined));
    dispatch(addSensorData(undefined));
    try {
      const response = await axios("/logout", {
        withCredentials: true,
      });
    } catch (err) {
      console.error(err);
    }
  };

  return logout;
};

export default useLogout;
