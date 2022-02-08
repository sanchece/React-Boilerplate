/*
 *
 * MainPage actions
 *
 */

import {
  USERNAMES_REQUESTED,
  USERNAMES_REQUEST_FAILED,
  USERNAMES_RECEIVED,
  USERNAME_ADD,
  USERNAMES_ADD_FAILED,
  USERNAMES_ADD_SUCCESS,
} from './constants';

export function usernamesRequested() {
  return {
    type: USERNAMES_REQUESTED,
  };
}
export function usernamesRequestFailed(error) {
  return {
    type: USERNAMES_REQUEST_FAILED,
    payload: {
      error,
    },
  };
}

export function usernamesReceived(usernameList) {
  return {
    type: USERNAMES_RECEIVED,
    payload: {
      usernameList,
    },
  };
}

export function usernameAdd(username) {
  return {
    type: USERNAME_ADD,
    payload: {
      username,
    },
  };
}
export function usernameAddFailed(error) {
  return {
    type: USERNAMES_ADD_FAILED,
    payload: {
      error,
    },
  };
}
export function usernameAddSuccess(username) {
  return {
    type: USERNAMES_ADD_SUCCESS,
    payload: {
      username,
    },
  };
}
