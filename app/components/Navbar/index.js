/**
 *
 * Navbar
 *
 */

import React from 'react';
import Navigationbar from './Navigationbar';
import NavbarLink from './NavbarLink';

function Navbar() {
  return (
    <div>
      <Navigationbar>
        <NavbarLink to="/">Home</NavbarLink>
        <NavbarLink to="add">Add Username</NavbarLink>
      </Navigationbar>
    </div>
  );
}

export default Navbar;
