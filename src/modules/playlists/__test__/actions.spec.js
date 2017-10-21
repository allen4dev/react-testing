import * as actions from './../actions';
import * as actionTypes from './../actionTypes';

import fixtures from './fixtures';

describe('playlists action creators', () => {
  it('should create an action to set playlists', () => {
    const response = fixtures.createResponse(2);

    const expectedAction = {
      type: actionTypes.SET_PLAYLISTS,
      response,
    };

    expect(actions.setPlaylists(response)).toEqual(expectedAction);
  });
});
