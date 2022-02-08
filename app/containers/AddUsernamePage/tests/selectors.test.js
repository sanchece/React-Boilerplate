import { makeUsernameSelector } from '../selectors';

describe('makeSelectUsername', () => {
  const usernameSelector = makeUsernameSelector();
  it('should select the username', () => {
    const username = 'mxstbr';
    const mockedState = {
      addUsernamePage: {
        username,
      },
    };
    expect(usernameSelector(mockedState)).toEqual(username);
  });
});
