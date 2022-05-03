import { combineReducers } from "redux";
import mineSweeper from "./mineSweeper";

const rootReducer = combineReducers({
  mineSweeper,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
