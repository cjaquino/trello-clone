import { combineReducers } from "redux";
import boards from "./boards";
import lists from "./lists";
import cards from "./cards";
import modal from "./modal";

const rootReducer = combineReducers({
  boards,
  lists,
  cards,
  modal,
});

export default rootReducer;
