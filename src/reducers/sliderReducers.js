import {
  SLIDER_SUCCESS,
  SLIDER_REQUEST,
  SLIDER_FAIL,
} from "../constants/sliderConstants";

export const sliderReducer = (state = { slider: [] }, action) => {
  switch (action.type) {
    case SLIDER_REQUEST:
      return { slider: [] };
    case SLIDER_SUCCESS:
      return { slider: action.payload };
    case SLIDER_FAIL:
      return { error: action.payload };

    default:
      return state;
  }
};
