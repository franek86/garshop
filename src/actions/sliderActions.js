import axios from "axios";

import {
  SLIDER_SUCCESS,
  SLIDER_REQUEST,
  SLIDER_FAIL,
} from "../constants/sliderConstants";

export const getSliders = () => async (dispatch) => {
  try {
    dispatch({ type: SLIDER_REQUEST });
    const res = await axios.get("http://localhost:1337/main-sliders/");

    dispatch({ type: SLIDER_SUCCESS, payload: res.data });
  } catch (error) {
    dispatch({ type: SLIDER_FAIL, error: error });
  }
};
