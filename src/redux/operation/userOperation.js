import axios from "axios";
import { setToken } from "../actions/tokenAction";
import { userClear } from "../actions/itemsAction";
import { userEmail } from "../actions/userEmailAction";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com";

export const createUserOperation = (user) => async (dispatch) => {
  try {
    const result = await axios.post("/users/signup", user);
    dispatch(setToken(result.data.token));
    dispatch(userEmail(result.data.user.email));
  } catch (error) {
    console.log(error);
  }
};

export const loginUserOperation = (user) => async (dispatch) => {
  try {
    const result = await axios.post("/users/login", user);
    dispatch(setToken(result.data.token));
    dispatch(userEmail(result.data.user.email));
  } catch (error) {
    console.log(error);
  }
};

export const logoutUserOperation = (token) => async (dispatch) => {
  try {
    await axios({
      url: "/users/logout",
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(userClear());
    dispatch(setToken(null));
    dispatch(userEmail(""));
  } catch (error) {
    console.log(error);
  }
};
