import YoutubeApiSearch from "youtube-api-search";
import _ from "lodash";
import consts from "../constants";

export const REQUEST_VIDEOS = "REQUEST_VIDEOS";
export const RECEIVE_VIDEOS = "RECEIVE_VIDEOS";
export const SELECT_VIDEO = "SELECT_VIDEO";

const doSearch = _.debounce((searchTerm, dispatch) => {
  YoutubeApiSearch(
    {
      key: consts.youtubeApikey,
      term: searchTerm
    },
    videos => {
      dispatch(receiveVideos(videos));
      if (!_.isNull(videos) && videos.length > 0)
        dispatch(selectVideo(videos[0]));
    }
  );
}, 300);

export const requestVideos = searchTerm => {
  return dispatch => {
    dispatch({
      type: REQUEST_VIDEOS,
      searchTerm
    });

    doSearch(searchTerm, dispatch);
  };
};

export const receiveVideos = videos => {
  return {
    type: RECEIVE_VIDEOS,
    videos
  };
};

export const selectVideo = video => {
  return {
    type: SELECT_VIDEO,
    video
  };
};
