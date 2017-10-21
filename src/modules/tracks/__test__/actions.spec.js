import * as actions from './../actions';
import * as actionTypes from './../actionTypes';

import fixtures from './fixtures';

describe('tracks action creators', () => {
  it('should create an action to set tracks', () => {
    const response = fixtures.createResponse(2);

    const expectedAction = {
      type: actionTypes.SET_TRACKS,
      response,
    };

    expect(actions.setTracks(response)).toEqual(expectedAction);
  });
});
