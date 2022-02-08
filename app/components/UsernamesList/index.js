/**
 *
 * UsernamesList
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
// import styled from 'styled-components';
import Loading from '../Loading';
import List from '../List';
import Status from '../Status';
import {
  USERNAMES_REQUEST_FAILED_STATUS,
  USERNAMES_ADD_FAILED_STATUS,
} from '../../containers/App/constants';
function UsernamesList({ usernameList, loading, error }) {
  if (loading.status === true) {
    return (
      <div>
        <Status status={loading.getRequestStatus} />
        <Loading />
      </div>
    );
  }

  if (
    error !== false &&
    (loading.getRequestStatus === USERNAMES_REQUEST_FAILED_STATUS &&
      loading.postRequestStatus === USERNAMES_ADD_FAILED_STATUS)
  ) {
    return (
      <div>
        <Status status={loading.getRequestStatus} error={error} />
        <Status status={loading.postRequestStatus} />
      </div>
    );
  }

  if (loading.status === false) {
    return (
      <div>
        <Status status={loading.getRequestStatus} />
        <Status status={loading.postRequestStatus} />
        <List usernameList={usernameList} />
      </div>
    );
  }
}
UsernamesList.propTypes = {
  loading: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  usernameList: PropTypes.array,
};

export default UsernamesList;
