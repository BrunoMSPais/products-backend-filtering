import styled from 'styled-components';
import React, { useState } from 'react';
import NavItems from './NavItems';

const StyledHamburger = styled.div`
  width: 2rem;
  height: 2rem;
  position: fixed;
  top: 0.6rem;
  right: 2rem;
  z-index: 100;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  .line {
    width: 2rem;
    height: 0.25rem;
    background-color: var(--textClr);
    border-radius: 1000px;
    transform-origin: 4px;
    transition: all 0.3s ease;
  }

  .topLine {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  .middleLine {
    display: ${({ open }) => (open ? 'none' : 'block')};
  }

  .bottomLine {
    transform: ${({ open }) => (open ? 'rotate(-45deg)' : 'rotate(0)')};
  }

  @media (min-width: 760px) {
    display: none;
  }
`;

function Hamburger() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <StyledHamburger open={open} onClick={() => setOpen(!open)}>
        <div className="line topLine" />
        <div className="line middleLine" />
        <div className="line bottomLine" />
      </StyledHamburger>
      <NavItems
        links={['About', 'Products', 'Services']}
        open={open}
        onClick={() => setOpen(!open)}
      />
    </>
  );
}

export default Hamburger;
