import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { usernamesRequestFailed, usernamesReceived } from '../App/actions';
import { USERNAMES_REQUESTED } from '../App/constants';

export function* getUsernames() {
  try {
    // get api call
    // console.debug('/MainPage/saga, getUsernames()');
    const requestURL = `http://localhost:3000/api/usernames`;
    const apiResponse = yield call(request, requestURL);
    const { usernames } = apiResponse;

    yield put(usernamesReceived(usernames));
  } catch (error) {
    yield put(usernamesRequestFailed(error));
  }
}

// Individual exports for testing
export default function* mainPageSaga() {
  // See example in containers/HomePage/saga.js
  yield takeLatest(USERNAMES_REQUESTED, getUsernames);
}
