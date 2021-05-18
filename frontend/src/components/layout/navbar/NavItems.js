/* eslint-disable consistent-return */
/* eslint-disable array-callback-return */
/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledNavigation = styled.ul`
  overflow: none;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100%;
  transform: ${({ open }) =>
    open ? 'translate(0, 0)' : 'translate(-100%, -100%)'};
  background-color: var(--secondaryClr);
  display: ${({ open }) => (open ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: translate 0.3s ease-in-out;

  .active {
    color: var(--secondaryClr);
  }

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
    transform: none;

    li {
      padding: 0;
    }
  }
`;

const NavItems = ({ links, open, active }) => {
  return (
    <StyledNavigation className={active} open={open}>
      {links &&
        links.map((link) => {
          return (
            <li key={link}>
              <Link to={link === 'Home' ? '/' : `/${link}`}>{link}</Link>
            </li>
          );
        })}
    </StyledNavigation>
  );
};

export default NavItems;
