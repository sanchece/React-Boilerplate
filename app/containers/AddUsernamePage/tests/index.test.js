/**
 *
 * Tests for AddUsernamePage
 *
 * @see https://github.com/react-boilerplate/react-boilerplate/tree/master/docs/testing
 *
 */

import React from 'react';
import { render } from 'react-testing-library';
import { IntlProvider } from 'react-intl';
// import 'jest-dom/extend-expect'; // add some helpful assertions
import { Provider } from 'react-redux';
import updateUsername from '../actions';
import { usernameAdd, usernameAddFailed } from '../../App/actions';
import { AddUsernamePage, mapDispatchToProps } from '../index';
import configureStore from '../../../configureStore';
import { DEFAULT_LOCALE } from '../../../i18n';
import { BLANK_USERNAME } from '../constants';
describe('<AddUsernamePage />', () => {
  let store;

  beforeAll(() => {
    store = configureStore();
  });

  it('Expect to not log errors in console', () => {
    const spy = jest.spyOn(global.console, 'error');
    const dispatch = jest.fn();
    render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <AddUsernamePage
            username=""
            error={false}
            loading={{
              status: false,
              getRequestStatus: 'INITIAL_STATE',
              postRequestStatus: 'INITIAL_STATE',
            }}
            dispatch={dispatch}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(spy).not.toHaveBeenCalled();
  });

  /**
   * Unskip this test to use it
   *
   * @see {@link https://jestjs.io/docs/en/api#testskipname-fn}
   */
  it('Should render and match the snapshot', () => {
    const dispatch = jest.fn();
    const {
      container: { firstChild },
    } = render(
      <Provider store={store}>
        <IntlProvider locale={DEFAULT_LOCALE}>
          <AddUsernamePage
            username=""
            error={false}
            loading={{
              status: false,
              getRequestStatus: 'INITIAL_STATE',
              postRequestStatus: 'INITIAL_STATE',
            }}
            dispatch={dispatch}
          />
        </IntlProvider>
      </Provider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});

describe('mapDispatchToProps', () => {
  describe('onUpdateUsername', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onUpdateUsername).toBeDefined();
    });

    it('should dispatch updateUsername when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const username = 'carlos';
      result.onUpdateUsername({ target: { value: username } });
      expect(dispatch).toHaveBeenCalledWith(updateUsername(username));
    });
  });

  describe('onSubmitForm', () => {
    it('should be injected', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      expect(result.onSubmitForm).toBeDefined();
    });

    it('should dispatch usernameAdd when called', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const username = 'carlos';
      result.onSubmitForm({ target: { username_input: { value: username } } });
      expect(dispatch).toHaveBeenCalledWith(usernameAdd(username));
    });
    it('should dispatch usernameAddFailed when called username is blank', () => {
      const dispatch = jest.fn();
      const result = mapDispatchToProps(dispatch);
      const username = '';
      result.onSubmitForm({ target: { username_input: { value: username } } });
      expect(dispatch).toHaveBeenCalledWith(usernameAddFailed(BLANK_USERNAME));
    });

    it('should preventDefault if called with event', () => {
      const preventDefault = jest.fn();
      const result = mapDispatchToProps(() => {});
      const username = 'mxstbr';
      const evt = {
        preventDefault,
        target: { username_input: { value: username } },
      };
      result.onSubmitForm(evt);
      expect(preventDefault).toHaveBeenCalledWith();
    });
  });
});
