import { combineReducers } from "redux";
import MainReducer from "./MainReducer";

const AllReducer = combineReducers({ MainReducer });

export default AllReducer;
