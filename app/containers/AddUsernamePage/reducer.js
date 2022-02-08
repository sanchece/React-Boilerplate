/*
 *
 * AddUsernamePage reducer
 *
 */
import produce from 'immer';
import { UPDATE_USERNAME } from './constants';

export const initialState = {
  username: '',
};

/* eslint-disable default-case, no-param-reassign */
const addUsernamePageReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case UPDATE_USERNAME:
        draft.username = action.payload.username;
        break;
    }
  });

export default addUsernamePageReducer;
