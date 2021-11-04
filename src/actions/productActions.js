// import axios from "axios";

import axiosInstance from "../axiosHelper";

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const res = await axiosInstance.get("/products");
    const data = res.data;

    const productCat = (name) => {
      let filterProduct = data.filter((cat) =>
        cat.categories.some((catName) => catName.name === `${name}`)
      );

      return filterProduct;
    };

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
      new_collections: productCat("New Collection"),
      archive: productCat("Archive"),
    });
  } catch (error) {
    dispatch({ type: ALL_PRODUCT_FAIL, payload: error });
  }
};
