/**
 *
 * List
 *
 */

import React from 'react';
import PropTypes from 'prop-types';

function List({ usernameList }) {
  if (usernameList.length > 0) {
    return (
      <ul>
        {usernameList.map(username => (
          <li>{username}</li>
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
