import { combineReducers } from "redux";
import likeReducer from "./likeReducer";
import createReducer from "./createReducer";
import addToBasket from "./basketReducer";

const rootReducer = combineReducers({
  likeReducer,
  createReducer,
  addToBasket
});

export default rootReducer;
