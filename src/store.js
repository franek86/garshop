import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { productReducer } from "./reducers/productReducer";
import { sliderReducer } from "./reducers/sliderReducers";

const reducer = combineReducers({
  productList: productReducer,
  silders: sliderReducer,
});

const initState = {};

const store = createStore(
  reducer,
  initState,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
