/*
 *
 * AddUsernamePage actions
 *
 */

import { UPDATE_USERNAME } from './constants';

export default function updateUsername(username) {
  return {
    type: UPDATE_USERNAME,
    payload: {
      username,
    },
  };
}
