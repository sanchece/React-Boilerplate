/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const USERNAMES_REQUESTED = 'app/usernamesRequested';
export const USERNAMES_REQUEST_FAILED = 'app/usernamesRequestFailed';
export const USERNAMES_RECEIVED = 'app/usernamesReceived';

export const USERNAME_ADD = 'app/usernameAdd';
export const USERNAMES_ADD_FAILED = 'app/usernameAddFailed';
export const USERNAMES_ADD_SUCCESS = 'app/usernameAddSuccess';

export const USERNAMES_REQUESTED_STATUS = 'Requesting usernames from server...';
export const USERNAMES_REQUEST_FAILED_STATUS =
  'Server usernames request failed.';
export const USERNAMES_RECEIVED_STATUS =
  'Server usernames returned successfully.';

export const USERNAME_ADD_STATUS = 'Adding username to server...';
export const USERNAMES_ADD_FAILED_STATUS = 'Username add failed';
export const USERNAMES_ADD_SUCCESS_STATUS = 'Username added successfully.';
export const INITIAL_STATE = 'INITIAL_STATE';
