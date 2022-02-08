import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { usernameAddFailed, usernameAddSuccess } from '../App/actions';
import { USERNAME_ADD } from '../App/constants';

export function* addUsername(action) {
  try {
    const { username } = action.payload;
    const requestURL = `http://localhost:3000/api/usernames`;
    // console.debug('/AddUsernamePage/saga, addUsername(), username:', username);

    // post api call
    yield call(request, requestURL, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        newUsername: username,
      }),
    });
    yield put(usernameAddSuccess(username));
  } catch (error) {
    yield put(usernameAddFailed(error));
  }
}
// Individual exports for testing
export default function* addUsernamePageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(USERNAME_ADD, addUsername);
}
