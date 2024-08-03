import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import {
  addUser,
  addAccessToken,
  addPersist,
  addSwitch,
} from "../features/user/userData";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    dispatch(addAccessToken(response.data.accessToken));
    dispatch(addSwitch(response.data.switchStates));
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
