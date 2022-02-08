/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Li } from './li.style';
function List({ usernameList }) {
  if (usernameList.length > 0) {
    return (
      <ul>
        {usernameList.map(username => (
          <Li>● {username}</Li>
        ))}
      </ul>
    );
  }
  return <div />;
}

List.propTypes = {
  usernameList: PropTypes.array,
};

export default List;
