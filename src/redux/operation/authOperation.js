import axios from "axios";
import {
  registerRequest,
  registerSuccess,
  registerError,
  loginRequest,
  loginSuccess,
  loginError,
  logoutSuccess,
} from "../actions/authAction";

// axios.defaults.baseURL = process.env.REACT_APP_BASE_URL;

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};
export const register = (credentials) => (dispatch) => {
  dispatch(registerRequest());
  axios
    .post(process.env.REACT_APP_BASE_SIGNUP, {
      ...credentials,
      returnSecureToken: true,
    })
    .then(({ data }) => {
      token.set(data.token);
      dispatch(registerSuccess(data));
    })
    .catch((error) => dispatch(registerError(error)));
};
export const logIn = (credentials) => (dispatch) => {
  dispatch(loginRequest());
  axios
    .post(process.env.REACT_APP_BASE_SIGNIN, {
      ...credentials,
      returnSecureToken: true,
    })
    .then(({ data }) => {
      token.set(data.idToken);
      dispatch(loginSuccess(data));
    })
    .catch((error) => dispatch(loginError(error)));
};
export const logOut = () => (dispatch) => {
  dispatch(logoutSuccess());
  // dispatch(logoutRequest());
  // axios
  //   .post("/users/logout")
  //   .then(() => {
  //     token.unset();
  //     dispatch(logoutSuccess());
  //   })
  //   .catch((error) => dispatch(logoutError(error)));
};
// export const getCurrentUser = () => (dispatch, getState) => {
//   const {
//     auth: { token: persistedToken },
//   } = getState();
//   if (!persistedToken) return;
//   token.set(persistedToken);
//   dispatch(getCurrentUserRequest());
//   axios
//     .get("/users/current")
//     .then(({ data }) => {
//       dispatch(getCurrentUserSuccess(data));
//     })
//     .catch((error) => dispatch(getCurrentUserError(error)));
// };
