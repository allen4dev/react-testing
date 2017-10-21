import { combineReducers } from 'redux';

import * as actionTypes from './actionTypes';
import { INITIAL_STATE } from './model';

function entitiesReducer(state = INITIAL_STATE.entities, action = {}) {
  switch (action.type) {
    case actionTypes.SET_TRACKS:
      return {
        ...state,
        ...action.response.entities.tracks,
      };
    default:
      return state;
  }
}

function resultsReducer(state = INITIAL_STATE.results, action = {}) {
  switch (action.type) {
    case actionTypes.SET_TRACKS:
      return action.response.result;

    default:
      return state;
  }
}

const reducer = combineReducers({
  entities: entitiesReducer,
  results: resultsReducer,
});

export default reducer;
