import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_SUCCESS
} from "./actionTypes";

import axios from "axios";

export const getImages = value => dispatch => {
  console.log("INSIDE GET ACTIONS");
  axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.tags.getClusterPhotos&api_key=d5a0f33900852e696aa51e4cdbadc159&tag=${value}&format=json&nojsoncallback=1`
    )
    .then(res => {
      console.log("SUCCESS FROM ACTIONS", res);
      dispatch({
        type: FETCH_SEARCH_REQUEST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        // type: GET_ERRORS,
        payload: err.response.data
      });
    });
};
