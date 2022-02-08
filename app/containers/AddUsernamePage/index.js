/**
 *
 * AddUsernamePage
 *
 */
import React, { memo } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';
import { useInjectSaga } from 'utils/injectSaga';
import { useInjectReducer } from 'utils/injectReducer';
import reducer from './reducer';
import saga from './saga';
import { usernameAdd, usernameAddFailed } from '../App/actions';
import updateUsername from './actions';
import { makeLoadingSelector, makeErrorSelector } from '../App/selectors';
import StatusCard from '../../components/StatusCard';
import { BLANK_USERNAME } from './constants';
export function AddUsernamePage({
  onUpdateUsername,
  onSubmitForm,
  loading,
  error,
}) {
  // console.debug('/AddUsernamePage, state:', { loading, error });
  useInjectReducer({ key: 'addUsernamePage', reducer });
  useInjectSaga({ key: 'addUsernamePage', saga });
  const StatusProps = {
    loading,
    error,
  };
  return (
    <div>
      <Helmet>
        <title>Add Username Form</title>
        <meta name="description" content="Description of AddUsernamePage" />
      </Helmet>
      <h3>Add Username Form</h3>
      <form onSubmit={onSubmitForm}>
        <label htmlFor="username_input">
          <input
            id="username_input"
            type="text"
            placeholder="Insert username here"
            onChange={onUpdateUsername}
          />
        </label>
        <input type="submit" value="Add" readOnly />
      </form>
      <StatusCard {...StatusProps} />
    </div>
  );
}

AddUsernamePage.propTypes = {
  onUpdateUsername: PropTypes.func,
  onSubmitForm: PropTypes.func,
  loading: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  loading: makeLoadingSelector(),
  error: makeErrorSelector(),
});

export function mapDispatchToProps(dispatch) {
  return {
    onUpdateUsername: event => {
      dispatch(updateUsername(event.target.value));
    },
    onSubmitForm: event => {
      if (event !== undefined && event.preventDefault) event.preventDefault();
      const username = event.target.username_input.value;
      if (username === '' || username === null) {
        dispatch(usernameAddFailed(BLANK_USERNAME));
      } else {
        dispatch(usernameAdd(username));
      }
      // console.debug('/AddUsernamePage onSubmitForm(), username:', username);
    },
  };
}
const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);

export default compose(
  withConnect,
  memo,
)(AddUsernamePage);
