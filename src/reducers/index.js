import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_ERROR
} from "../actions/actionTypes";

const initialState = {
  data: [],
  error: ""
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST:
      return {
        ...state,
        data: action.payload
      };
    case FETCH_SEARCH_ERROR:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
