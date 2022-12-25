import { createStore } from "redux";
import AllReducer from "../reducers/index";

const store = createStore(AllReducer);

export default store;
