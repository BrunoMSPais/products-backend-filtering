import React, { useState } from 'react';
import { BiMenuAltRight, BiXCircle } from 'react-icons/bi';
import {
  Nav,
  NavbarContainer,
  NavLogo,
  NavIcon,
  Hamburger,
  NavMenu,
  NavItem,
  NavLinks,
} from './Navbar.elements';

const Navbar = () => {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/">
            <NavIcon alt="MarketJS" />
            MarketJS
          </NavLogo>
          <NavMenu onClick={handleClick} click={click}>
            <NavItem>
              <NavLinks to="/">Home</NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="/about">About</NavLinks>
            </NavItem>
          </NavMenu>
          <Hamburger onClick={handleClick}>
            {click ? (
              <BiXCircle alt="Close Menu" />
            ) : (
              <BiMenuAltRight alt="Open Menu" />
            )}
          </Hamburger>
        </NavbarContainer>
      </Nav>
    </>
  );
};

export default Navbar;
