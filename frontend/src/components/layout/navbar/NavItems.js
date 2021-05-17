/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.ul`
  overflow: none;
  position: fixed;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(-100%)')};
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: var(--secondaryClr);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: transform 5s ease-in-out;

  li {
    color: var(--textAltClr);
    transition: all 0.3s ease-in;

    &:hover,
    &:focus {
      color: var(--textClr);
    }
  }

  li {
    padding: 1em 0;
  }

  @media (min-width: 760px) {
    display: flex;
    position: relative;
    width: 30%;
    height: 100%;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    li {
      padding: 0;
    }
  }
`;

const NavItems = ({ links, open }) => {
  return (
    <StyledNavigation open={open}>
      {links &&
        links.map((link) => {
          return (
            <li key={link}>
              <Link to={`/${link}`}>{link}</Link>
            </li>
          );
        })}
    </StyledNavigation>
  );
};

export default NavItems;
