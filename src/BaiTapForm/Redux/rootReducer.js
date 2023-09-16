import { combineReducers } from "redux";
import { svReducer } from "./svReducer";

export let rootReducer = combineReducers({svReducer:svReducer})