import axios from "axios";

import {
  ALL_PRODUCT_REQUEST,
  ALL_PRODUCT_SUCCESS,
  ALL_PRODUCT_FAIL,
} from "../constants/productConstants";

export const getAllProducts = () => async (dispatch) => {
  try {
    dispatch({ type: ALL_PRODUCT_REQUEST });

    const res = await axios.get("http://localhost:1337/products");
    const data = res.data;

    const homeCat = (name) => {
      let filterProduct = data.filter((cat) =>
        cat.categories.some((catName) => catName.category === `${name}`)
      );

      return filterProduct;
    };

    dispatch({
      type: ALL_PRODUCT_SUCCESS,
      payload: data,
      new_collections: homeCat("New Collection"),
      archive: homeCat("Archive"),
    });
  } catch (error) {
    dispatch({ type: ALL_PRODUCT_FAIL, payload: error });
  }
};
