import { combineReducers } from "redux";
import videos from "./videos";
import selectedVideo from "./selectedVideo";

const rootReducer = combineReducers({
  videos,
  selectedVideo
});

export default rootReducer;
