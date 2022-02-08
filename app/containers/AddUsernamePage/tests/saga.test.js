/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { put } from 'redux-saga/effects';
import { usernameAddFailed } from 'containers/App/actions';
import addUsernamePageSaga from '../saga';

describe('addUsernamePageSaga Saga', () => {
  const addUsernameGenerator = addUsernamePageSaga();
  it('should call the usernameAddFailed action if the response errors', () => {
    const response = new Error('Some error');
    const putDescriptor = addUsernameGenerator.throw(response).value;
    expect(putDescriptor).toEqual(put(usernameAddFailed(response)));
  });
});
