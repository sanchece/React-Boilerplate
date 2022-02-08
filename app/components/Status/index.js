/**
 *
 * Status
 *
 */
import React from 'react';
import PropTypes from 'prop-types';
import { StatusWrap } from './status.style';
import {
  USERNAMES_REQUESTED_STATUS,
  USERNAME_ADD_STATUS,
  USERNAMES_RECEIVED_STATUS,
  USERNAMES_ADD_SUCCESS_STATUS,
} from '../../containers/App/constants';
function Status({ status, error }) {
  if (status === 'INITIAL_STATE') {
    return <div />;
  }
  return (
    <StatusWrap
      color={
        status === USERNAMES_RECEIVED_STATUS ||
        status === USERNAMES_ADD_SUCCESS_STATUS ||
        status === USERNAMES_REQUESTED_STATUS ||
        status === USERNAME_ADD_STATUS
          ? 'green'
          : 'red'
      }
    >
      <div>Status:{`${status}`}</div>
      <div> {error ? `${error}` : ``}</div>
    </StatusWrap>
  );
}
Status.propTypes = {
  status: PropTypes.oneOfType([
    PropTypes.object,
    PropTypes.bool,
    PropTypes.string,
  ]),
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default Status;
