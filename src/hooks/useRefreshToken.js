import axios from "../api/axios";
import { useSelector, useDispatch } from "react-redux";
import { addUser, addAccessToken, addPersist } from "../features/user/userData";

const useRefreshToken = () => {
  const dispatch = useDispatch();

  const refresh = async () => {
    const response = await axios.get("/refresh", {
      withCredentials: true,
    });
    dispatch(addAccessToken(response.data.accessToken));
    return response.data.accessToken;
  };
  return refresh;
};

export default useRefreshToken;
