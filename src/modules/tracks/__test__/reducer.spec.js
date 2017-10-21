import * as actions from './../actions';
import { INITIAL_STATE } from './../model';

import reducer from './../reducer';

import fixtures from './fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('Tracks Reducer', () => {
  it('should handle SET_TRACKS', () => {
    const response = fixtures.createResponse(2);
    const nextState = reducer(INITIAL_STATE, actions.setTracks(response));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: response.entities.tracks,
      results: response.result,
    });

    const newResponse = fixtures.createResponse(1);
    const newState = reducer(nextState, actions.setTracks(newResponse));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        ...newResponse.entities.tracks,
      },
      results: newResponse.result,
    });
  });
});
