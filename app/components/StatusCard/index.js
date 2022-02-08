/**
 *
 * StatusCard
 *
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import Loading from '../Loading';
import Status from '../Status';
import {
  USERNAME_ADD_STATUS,
  USERNAMES_ADD_FAILED_STATUS,
  USERNAMES_ADD_SUCCESS_STATUS,
} from '../../containers/App/constants';
function StatusCard({ error, loading }) {
  if (
    loading.status === true &&
    loading.postRequestStatus === USERNAME_ADD_STATUS
  ) {
    return (
      <div>
        <Status status={loading.postRequestStatus} />
        <Loading />
      </div>
    );
  }
  if (
    error !== false &&
    loading.postRequestStatus === USERNAMES_ADD_FAILED_STATUS
  ) {
    return <Status status={loading.postRequestStatus} error={error} />;
  }

  if (
    loading.status === false ||
    loading.postRequestStatus === USERNAMES_ADD_SUCCESS_STATUS
  ) {
    return <Status status={loading.postRequestStatus} />;
  }
}

StatusCard.propTypes = {
  loading: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

export default memo(StatusCard);
