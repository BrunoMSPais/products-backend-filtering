/* eslint-disable react/prop-types */
import styled from 'styled-components';
import React from 'react';
import { Link } from 'react-router-dom';

const StyledLogo = styled.img`
  min-height: 1rem;
  width: calc(height * 3 / 5);
  padding: 0.5em 0;
`;

const StyledTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  text-transform: uppercase;
  color: var(--primaryClr);
  padding: 0.5em 0;
`;

function NavLogo({ logoText, logoImage }) {
  if (logoText) {
    return (
      <Link to="/">
        <StyledTitle>{logoText}</StyledTitle>
      </Link>
    );
  }
  if (logoImage) {
    return (
      <Link to="/">
        <StyledLogo>{logoImage}</StyledLogo>
      </Link>
    );
  }
}

export default NavLogo;
