import { FETCH_SEARCH_REQUEST, FETCH_SEARCH_ERROR } from "./actionTypes";

import axios from "axios";

export const getImages = value => dispatch => {
  axios
    .get(
      `https://api.flickr.com/services/rest/?method=flickr.tags.getClusterPhotos&api_key=${
        process.env.REACT_APP_API_KEY
      }&tag=${value}&format=json&nojsoncallback=1`
    )
    .then(res => {
      dispatch({
        type: FETCH_SEARCH_REQUEST,
        payload: res.data
      });
    })
    .catch(err => {
      dispatch({
        type: FETCH_SEARCH_ERROR,
        payload: "Error Found"
      });
    });
};
