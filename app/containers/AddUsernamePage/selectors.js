import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the addUsernamePage state domain
 */

const selectAddUsernamePageDomain = state =>
  state.addUsernamePage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AddUsernamePage
 */

const makeUsernameSelector = () =>
  createSelector(
    selectAddUsernamePageDomain,
    substate => substate.username,
  );

export { selectAddUsernamePageDomain, makeUsernameSelector };
