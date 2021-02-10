import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutRequest,
  logoutSuccess,
  logoutError,
  getCurrentUserRequest,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "../actions/authAction";

axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
export const register = (credentials) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post("/users/signup", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(registerSuccess(data));
    })
    .catch((error) => dispatch(registerError(error)));
};
export const logIn = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post("/users/login", credentials)
    .then(({ data }) => {
      token.set(data.token);
      dispatch(loginSuccess(data));
    })
    .catch((error) => dispatch(loginError(error)));
};
export const logOut = () => (dispatch) => {
  dispatch(logoutRequest());
  axios
    .post("/users/logout")
    .then(() => {
      token.unset();
      dispatch(logoutSuccess());
    })
    .catch((error) => dispatch(logoutError(error)));
};
export const getCurrentUser = () => (dispatch, getState) => {
  const {
    auth: { token: persistedToken },
  } = getState();
  if (!persistedToken) return;
  token.set(persistedToken);
  dispatch(getCurrentUserRequest());
  axios
    .get("/users/current")
    .then(({ data }) => {
      dispatch(getCurrentUserSuccess(data));
    })
    .catch((error) => dispatch(getCurrentUserError(error)));
};
