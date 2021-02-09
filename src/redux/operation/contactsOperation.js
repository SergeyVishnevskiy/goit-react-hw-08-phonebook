import axios from "axios";
import { usersGet, userAdd, userDelete } from "../actions/itemsAction";

axios.defaults.baseURL = "https://goit-phonebook-api.herokuapp.com/";

export const getUserOperation = (token) => async (dispatch) => {
  try {
    const result = await axios({
      url: "contacts",
      method: "get",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(usersGet(result.data));
  } catch (error) {
    console.log(error);
  }
};

export const postUserOperation = (item, token) => async (dispatch) => {
  try {
    const result = await axios({
      url: "/contacts",
      method: "post",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: item,
    });
    dispatch(userAdd(result.data));
  } catch (error) {
    console.log(error);
  }
};

export const deleteUserOption = (id, token) => async (dispatch) => {
  try {
    await axios({
      url: `/contacts/${id}`,
      method: "delete",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    dispatch(userDelete(id));
  } catch (error) {
    console.log(error);
  }
};
