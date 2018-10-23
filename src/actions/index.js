import YoutubeApiSearch from "youtube-api-search";
import consts from "../constants";

export const REQUEST_VIDEOS = "REQUEST_VIDEOS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";

export const requestVideos = searchTerm => {
  return dispatch => {
    YoutubeApiSearch(
      {
        key: consts.youtubeApikey,
        term: searchTerm
      },
      videos => dispatch(receiveVideos(videos))
    );
  };
};

export const receiveVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos
  };
};
