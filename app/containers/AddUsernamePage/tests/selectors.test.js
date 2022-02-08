import {
  makeUsernameSelector,
  selectAddUsernamePageDomain,
} from '../selectors';

describe('selectAddUsernamePageDomain', () => {
  it('should select the addUsernamePageState', () => {
    const addUsernamePageState = {
      userData: {},
    };
    const mockedState = {
      addUsernamePage: addUsernamePageState,
    };
    expect(selectAddUsernamePageDomain(mockedState)).toEqual(
      addUsernamePageState,
    );
  });
});

describe('makeSelectUsername', () => {
  const usernameSelector = makeUsernameSelector();
  it('should select the username', () => {
    const username = 'carlos';
    const mockedState = {
      addUsernamePage: {
        username,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});
