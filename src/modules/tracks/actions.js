import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';
import { trackListSchema } from './model';

import api from './../../utils/api';

// Action creators
export function setTracks(response) {
  return {
    type: actionTypes.SET_TRACKS,
    response,
  };
}

// Async actions
export function searchTracks(term) {
  return async dispatch => {
    const tracks = await api.searchTracks(term);
    const response = normalize(tracks, trackListSchema);

    dispatch(setTracks(response));

    return response.result;
  };
}
