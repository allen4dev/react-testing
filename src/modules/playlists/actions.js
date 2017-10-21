import { normalize } from 'normalizr';

import * as actionTypes from './actionTypes';
import { playlistListSchema } from './model';

import api from './../../utils/api';

// Action creators
export function setPlaylists(response) {
  return {
    type: actionTypes.SET_PLAYLISTS,
    response,
  };
}

// Async actions

export function searchPlaylists(term) {
  return async dispatch => {
    const result = await api.playlists.searchPlaylists(term);
    const response = normalize(result, playlistListSchema);

    dispatch(setPlaylists(response));

    return response.entities.playlists;
  };
}
