/**
 * Test sagas
 */

/* eslint-disable redux-saga/yield-effects */
import { takeLatest } from 'redux-saga/effects';
// import { usernameAddFailed } from '../../App/actions';
import addUsernamePageSaga, { addUsername } from '../saga';
import { USERNAME_ADD } from '../../App/constants';
const username = 'mxstbr';

describe('addUsername Saga', () => {
  let addUsernameGenerator;

  beforeEach(() => {
    addUsernameGenerator = addUsername();

    const selectDescriptor = addUsernameGenerator.next().value;
    expect(selectDescriptor).toMatchSnapshot();
    const callDescriptor = addUsernameGenerator.next(username).value;
    expect(callDescriptor).toMatchSnapshot();
  });

  describe('githubDataSaga Saga', () => {
    const githubDataSaga = addUsernamePageSaga();
    it('should start task to watch for LOAD_REPOS action', () => {
      const takeLatestDescriptor = githubDataSaga.next().value;
      expect(takeLatestDescriptor).toEqual(
        takeLatest(USERNAME_ADD, addUsername),
      );
    });
  });
  // it('should call the usernameAddFailed action if the response errors', () => {
  //   const response = 'some error';
  //   const putDescriptor = addUsernameGenerator.throw(response).value;
  //   expect(putDescriptor).toEqual(put(usernameAddFailed(response)));
  // });
});
