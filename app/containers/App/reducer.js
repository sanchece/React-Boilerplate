/*
 *
 * App reducer
 *
 */
import produce from 'immer';
import {
  USERNAMES_REQUESTED,
  USERNAMES_REQUEST_FAILED,
  USERNAMES_RECEIVED,
  USERNAME_ADD,
  USERNAMES_ADD_FAILED,
  USERNAMES_ADD_SUCCESS,
  USERNAMES_REQUESTED_STATUS,
  USERNAMES_REQUEST_FAILED_STATUS,
  USERNAMES_RECEIVED_STATUS,
  USERNAME_ADD_STATUS,
  USERNAMES_ADD_FAILED_STATUS,
  USERNAMES_ADD_SUCCESS_STATUS,
  INITIAL_STATE,
} from './constants';
export const initialState = {
  usernameList: [],
  loading: {
    status: false,
    getRequestStatus: INITIAL_STATE,
    postRequestStatus: INITIAL_STATE,
  },
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      // usernames requested
      case USERNAMES_REQUESTED:
        draft.loading.status = true;
        draft.loading.getRequestStatus = USERNAMES_REQUESTED_STATUS;
        draft.loading.postRequestStatus = INITIAL_STATE;
        draft.error = false;

        break;
      case USERNAMES_REQUEST_FAILED:
        draft.loading.getRequestStatus = USERNAMES_REQUEST_FAILED_STATUS;
        draft.error = action.payload.error;
        draft.loading.status = false;
        break;
      case USERNAMES_RECEIVED:
        if (draft.loading.postRequestStatus !== USERNAME_ADD_STATUS) {
          draft.loading.status = false;
        }
        draft.loading.getRequestStatus = USERNAMES_RECEIVED_STATUS;
        draft.usernameList = action.payload.usernameList;
        break;

      // username added
      case USERNAME_ADD:
        draft.loading.status = true;
        draft.loading.postRequestStatus = USERNAME_ADD_STATUS;
        draft.loading.getRequestStatus = INITIAL_STATE;
        draft.error = false;
        break;
      case USERNAMES_ADD_FAILED:
        draft.loading.status = false;
        draft.loading.postRequestStatus = USERNAMES_ADD_FAILED_STATUS;
        draft.error = action.payload.error;
        break;
      case USERNAMES_ADD_SUCCESS:
        if (draft.loading.getRequestStatus !== USERNAMES_REQUESTED_STATUS) {
          draft.loading.status = false;
        }
        draft.usernameList.unshift(action.payload.username);
        draft.loading.postRequestStatus = USERNAMES_ADD_SUCCESS_STATUS;
        break;
    }
  });

export default appReducer;
