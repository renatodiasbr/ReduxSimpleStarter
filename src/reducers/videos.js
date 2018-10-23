import { REQUEST_VIDEOS, RECEIVE_VIDEOS } from "../actions";

export default function(
  state = { searchTerm: "", isFetching: false, items: [] },
  action
) {
  switch (action.type) {
    case REQUEST_VIDEOS:
      return {
        ...state,
        searchTerm: action.searchTerm,
        isFetching: true
      };
    case RECEIVE_VIDEOS:
      return {
        ...state,
        isFetching: false,
        items: action.videos || []
      };
    default:
      break;
  }
  return state;
}
