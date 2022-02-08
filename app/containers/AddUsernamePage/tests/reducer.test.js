// import produce from 'immer';
import produce from 'immer';
import addUsernamePageReducer from '../reducer';
import updateUsername from '../actions';

/* eslint-disable default-case, no-param-reassign */
describe('addUsernamePageReducer', () => {
  let state;
  beforeEach(() => {
    state = {
      username: '',
    };
  });

  it('returns the initial state', () => {
    const expectedResult = state;
    expect(addUsernamePageReducer(undefined, {})).toEqual(expectedResult);
  });
  it('should handle the updateUsername action correctly', () => {
    const fixture = 'other';
    const expectedResult = produce(state, draft => {
      draft.username = fixture;
    });

    expect(addUsernamePageReducer(state, updateUsername(fixture))).toEqual(
      expectedResult,
    );
  });
});
