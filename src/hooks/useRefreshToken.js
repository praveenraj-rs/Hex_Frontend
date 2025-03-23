import axios from "../api/axios";
import { useDispatch } from "react-redux";
import { addUser, addAccessToken } from "../features/user/userData";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    dispatch(addUser(response.data.userName));
    dispatch(addAccessToken(response.data.accessToken));
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
