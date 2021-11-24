import {
  ALL_CATEGORY_REQUEST,
  ALL_CATEGORY_SUCCESS,
  ALL_CATEGORY_FAIL,
} from "../constants/categoryConstants";

export const newCollectionReducer = (
  state = { new_collections: [] },
  action
) => {
  switch (action.type) {
    case ALL_CATEGORY_REQUEST:
      return {
        loading: true,
        new_collections: [],
      };

    case ALL_CATEGORY_SUCCESS:
      return {
        loading: false,
        new_collections: action.payload,
      };

    case ALL_CATEGORY_FAIL:
      return {
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
