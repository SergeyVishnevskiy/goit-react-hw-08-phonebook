import {
  GET_USERS,
  ADD_USER,
  DELETE_USER,
  CLEAR_USER,
} from "../constans/constants";
import { createAction } from "@reduxjs/toolkit";

export const userGet = createAction(GET_USERS);
export const userAdd = createAction(ADD_USER);
export const userDelete = createAction(DELETE_USER);
export const userClear = createAction(CLEAR_USER);
