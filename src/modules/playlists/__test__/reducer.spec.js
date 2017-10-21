import * as actions from './../actions';
import { INITIAL_STATE } from './../model';
import reducer from './../reducer';

import fixtures from './fixtures';

test('@@INIT', () => {
  expect(reducer(undefined, {})).toEqual(INITIAL_STATE);
});

describe('tracks action creators', () => {
  it('should handle SET_PLAYLISTS', () => {
    const response = fixtures.createResponse(2);
    const nextState = reducer(INITIAL_STATE, actions.setPlaylists(response));

    expect(nextState).toEqual({
      ...INITIAL_STATE,
      entities: response.entities.playlists,
    });

    const newResponse = fixtures.createResponse(3);
    const newState = reducer(nextState, actions.setPlaylists(newResponse));

    expect(newState).toEqual({
      ...nextState,
      entities: {
        ...nextState.entities,
        ...newResponse.entities.playlists,
      },
    });
  });
});
