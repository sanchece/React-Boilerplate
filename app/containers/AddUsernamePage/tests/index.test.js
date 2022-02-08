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
import { browserHistory } from 'react-router-dom';
import { AddUsernamePage } from '../index';
import configureStore from '../../../configureStore';
describe('<AddUsernamePage />', () => {
  const store = configureStore({}, browserHistory);

  it('Should render and match the snapshot', () => {
    const {
      container: { firstChild },
    } = render(
      <IntlProvider store={store}>
        <AddUsernamePage
          loading={{
            status: false,
            getRequestStatus: 'INITIAL_STATE',
            postRequestStatus: 'INITIAL_STATE',
          }}
          usernameList={['username_1', 'username2']}
          error={false}
          username=""
        />
      </IntlProvider>,
    );
    expect(firstChild).toMatchSnapshot();
  });
});
