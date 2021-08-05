import changeTheNumber from "./updown";
import addtodo from "./todofunc";
import { combineReducers } from "redux";

const rootReducer =combineReducers({
    changeTheNumber,addtodo
})
export default rootReducer;


