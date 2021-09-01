import { createStore } from "redux";
import AppReducer from "../Reducer/AppReducer";

const store = createStore(AppReducer)

export default store;