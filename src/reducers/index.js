import { combineReducers } from "redux";
import products from "./productReducer";
import notes from "./notesReducer";

const rootReducer = combineReducers({
  products,
  notes
});

export default rootReducer;
