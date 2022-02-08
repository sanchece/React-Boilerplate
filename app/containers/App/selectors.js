import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the mainPage state domain
 */

const selectAppDomain = state => state.app || initialState;

/**
 * Other specific selectors
 */

const makeUsernamesSelector = () =>
  createSelector(
    selectAppDomain,
    appState => appState.usernameList,
  );
const makeLoadingSelector = () =>
  createSelector(
    selectAppDomain,
    appState => appState.loading,
  );
const makeErrorSelector = () =>
  createSelector(
    selectAppDomain,
    appState => appState.error,
  );

export {
  makeUsernamesSelector,
  makeLoadingSelector,
  makeErrorSelector,
  selectAppDomain,
};
