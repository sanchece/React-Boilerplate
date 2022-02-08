import updateUsername from '../actions';
import { UPDATE_USERNAME } from '../constants';

describe('updateUsername actions', () => {
  describe('Updates username stored in local store', () => {
    it('has a type of UPDATE_USERNAME', () => {
      const username = 'some_username';
      const expected = {
        type: UPDATE_USERNAME,
        payload: {
          username,
        },
      };

      expect(updateUsername(username)).toEqual(expected);
    });
  });
});
