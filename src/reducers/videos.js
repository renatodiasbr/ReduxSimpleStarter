import { RECEIVE_VIDEOS } from "../actions";

export default function(state = [], action) {
  switch (action.type) {
    case RECEIVE_VIDEOS:
      return action.videos;
    default:
      break;
  }
  return state;
}
