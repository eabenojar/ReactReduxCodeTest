import {
  FETCH_SEARCH_REQUEST,
  FETCH_SEARCH_FAILURE,
  FETCH_SEARCH_SUCCESS
} from "../actions/actionTypes";

const initialState = {
  data: []
};

export default function mainReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_SEARCH_REQUEST:
      return {
        ...state,
        data: action.payload
      };
    default:
      return state;
  }
}
