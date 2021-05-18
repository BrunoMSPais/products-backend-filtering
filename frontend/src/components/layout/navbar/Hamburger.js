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
    transform-origin: 1px;
    transition: all 0.3s ease;
  }

  .topLine {
    transform: ${({ open }) => (open ? 'rotate(45deg)' : 'rotate(0)')};
  }

  .middleLine {
    transform: ${({ open }) => (open ? 'translateX(1em)' : 'translateX(0)')};
    opacity: ${({ open }) => (open ? '0' : '1')};
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
  const [active, setActive] = useState('active');

  return (
    <>
      <StyledHamburger open={open} onClick={() => setOpen(!open)}>
        <div className="line topLine" />
        <div className="line middleLine" />
        <div className="line bottomLine" />
      </StyledHamburger>
      <NavItems
        links={['Home', 'About', 'Products']}
        open={open}
        active={active}
        onClick={() => {
          setOpen(!open);
          setActive(active === '' ? 'active' : '');
        }}
      />
    </>
  );
}

export default Hamburger;
