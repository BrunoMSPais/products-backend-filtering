/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import NavLogo from './NavLogo';
import Hamburger from './Hamburger';

const StyledNavbar = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: var(--secondaryClr);
  position: sticky;
  z-index: 10;
`;

function Navbar() {
  return (
    <StyledNavbar className="container">
      <NavLogo logoText="products.js" />
      <Hamburger />
    </StyledNavbar>
  );
}

export default Navbar;
