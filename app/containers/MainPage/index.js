/**
 *
 * MainPage
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

import saga from './saga';
import { usernamesRequested } from '../App/actions';
import {
  makeUsernamesSelector,
  makeLoadingSelector,
  makeErrorSelector,
} from '../App/selectors';
import UsernamesList from '../../components/UsernamesList';
import reducer from '../App/reducer';

export function MainPage({ loadUsernames, usernameList, loading, error }) {
  useInjectSaga({ key: 'mainPage', saga });
  useInjectReducer({ key: 'App', reducer });
  // useEffect(() => {
  //   loadUsernames()
  // });
  // console.debug('/MainPage/index, state:', { usernameList, loading, error });
  const usernamesListProps = {
    usernameList,
    loading,
    error,
  };
  return (
    <div>
      <Helmet>
        <title>List of Usernames </title>
        <meta name="description" content="Description of MainPage" />
      </Helmet>
      <h3>List of Usernames</h3>
      <button type="button" onClick={loadUsernames}>
        Request usernames from server
      </button>
      <UsernamesList {...usernamesListProps} />
    </div>
  );
}

MainPage.propTypes = {
  loading: PropTypes.object,
  error: PropTypes.oneOfType([PropTypes.object, PropTypes.bool]),
  usernameList: PropTypes.array,
  loadUsernames: PropTypes.func,
};

const mapStateToProps = createStructuredSelector({
  loading: makeLoadingSelector(),
  error: makeErrorSelector(),
  usernameList: makeUsernamesSelector(),
});

function mapDispatchToProps(dispatch) {
  return {
    loadUsernames: () => {
      dispatch(usernamesRequested());
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
)(MainPage);
