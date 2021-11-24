import axiosInstance from "../axiosHelper";

import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
} from "../constants/categoryConstants";

export const getCategories = () => async (dispatch) => {
  dispatch({ type: ALL_CATEGORY_REQUEST });
  try {
    const res = await axiosInstance("/categories");
    const { data } = res;
    dispatch({
      type: ALL_CATEGORY_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({ type: ALL_CATEGORY_FAIL, payload: error });
  }
};
