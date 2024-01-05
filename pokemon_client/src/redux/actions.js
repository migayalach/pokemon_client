import axios from "axios";
import { LOGIN_USER, ERROR } from "./type-actions";
const URL = `http://localhost:3001/server`;

export const loginUser = (data) => {
  return async function (dispatch) {
    try {
      const access = await axios.post(`${URL}/login`, data);
      dispatch({
        type: LOGIN_USER,
        payload: access,
      });
    } catch (error) {
      dispatch({
        type: ERROR,
        payload: error,
      });
    }
  };
};
