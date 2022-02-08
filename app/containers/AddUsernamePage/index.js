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
import { usernameAdd } from '../App/actions';
import updateUsername from './actions';
import { makeUsernameSelector } from './selectors';
import { makeLoadingSelector, makeErrorSelector } from '../App/selectors';
import StatusCard from '../../components/StatusCard';

export function AddUsernamePage({
  username,
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
            value={username}
            onChange={onUpdateUsername}
          />
        </label>
        <input type="submit" value="Add" />
      </form>
      <StatusCard {...StatusProps} />
    </div>
  );
}

AddUsernamePage.propTypes = {
  username: PropTypes.string,
  onUpdateUsername: PropTypes.func,
  onSubmitForm: PropTypes.func,
  loading: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
};

const mapStateToProps = createStructuredSelector({
  username: makeUsernameSelector(),
  loading: makeLoadingSelector(),
  error: makeErrorSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    onUpdateUsername: event => {
      dispatch(updateUsername(event.target.value));
    },
    onSubmitForm: event => {
      if (event !== undefined && event.preventDefault) event.preventDefault();
      const username = event.target.username_input.value;
      // console.debug('/AddUsernamePage onSubmitForm(), username:', username);
      dispatch(usernameAdd(username));
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
