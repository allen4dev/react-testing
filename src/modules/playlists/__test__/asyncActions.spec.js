import configureMockStore from 'redux-mock-store';
import fetchMock from 'fetch-mock';
import thunk from 'redux-thunk';

import * as actions from './../actions';
import * as actionTypes from './../actionTypes';
import { INITIAL_STATE } from './../model';

import config from './../../../config';
import fixtures from './fixtures';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

const baseURL = 'http://api.soundcloud.com';
const clientID = config.CLIENT_ID;

describe('tracks action creators', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('create SET_PLAYLISTS when search playlists has been done', async () => {
    const term = 'anime';
    const url = `${baseURL}/playlists?q=${term}&limit=5&client_id=${clientID}`;
    const response = fixtures.createResponse(2);
    const results = Object.values(response.entities.playlists);

    fetchMock.getOnce(url, {
      body: results,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [{ type: actionTypes.SET_PLAYLISTS, response }];

    const store = mockStore(INITIAL_STATE);

    await store.dispatch(actions.searchPlaylists(term));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
