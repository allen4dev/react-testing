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

describe('tracks async actions', () => {
  afterEach(() => {
    fetchMock.reset();
    fetchMock.restore();
  });

  it('creates SET_TRACKS when search tracks has been done', async () => {
    const term = 'anime';
    const url = `${baseURL}/tracks?q=${term}&limit=5&client_id=${clientID}`;
    const response = fixtures.createResponse(2);
    const tracks = Object.values(response.entities.tracks);

    fetchMock.getOnce(url, {
      body: tracks,
      headers: { 'content-type': 'application/json' },
    });

    const expectedActions = [
      {
        type: actionTypes.SET_TRACKS,
        response,
      },
    ];

    const store = mockStore(INITIAL_STATE);

    // return store.dispatch(actions.searchTracks(term)).then(() => {
    //   expect(store.getActions()).toEqual(expectedActions);
    // });

    await store.dispatch(actions.searchTracks(term));
    expect(store.getActions()).toEqual(expectedActions);
  });
});
