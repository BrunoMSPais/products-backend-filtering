/* eslint-disable import/prefer-default-export */
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { HiShoppingBag } from 'react-icons/hi';
import { Container } from '../../styles/GlobalStyle';

export const Nav = styled.nav`
  background: var(--darkBg);
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;
  position: fixed;
  top: 0;
  z-index: 1;
`;

export const NavbarContainer = styled(Container)`
  display: flex;
  justify-content: space-between;
  height: 100%;
  position: relative;

  ${Container}
`;

export const NavLogo = styled(Link)`
  justify-self: flex-start;
  cursor: pointer;
  text-decoration: none;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
`;

export const NavIcon = styled(HiShoppingBag)`
  margin-right: 0.5rem;
`;

export const Hamburger = styled.div`
  display: block;
  position: absolute;
  top: 50%;
  right: 0;
  transform: translate(-0.5rem, -50%);
  font-size: 1.8rem;
  cursor: pointer;

  @media screen and (min-width: 960px) {
    display: none;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  text-align: center;

  @media screen and (max-width: 960px) {
    position: absolute;
    top: 80px;
    height: calc(100vh - 80px);
    width: 100%;
    flex-direction: column;
    justify-content: space-evenly;
    right: ${({ click }) => (click ? 0 : '-100%')};
    transition: all 0.5s ease;
    background: var(--darkBg);
    opacity: 2;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  width: 100%;
  border-bottom: 2px solid transparent;

  &:hover,
  &:focus,
  &:active {
    border: none;
    color: var(--primaryClr);
  }

  @media screen and (min-width: 960px) {
    width: auto;

    &:hover,
    &:focus,
    &:active {
      border-bottom: 2px solid var(--primaryClr);
    }
  }
`;

export const NavLinks = styled(Link)`
  color: var(--textClr);
  display: table;
  text-align: center;
  text-decoration: none;
  padding: 2rem;
  width: 100%;

  &:hover,
  &:focus,
  &:active {
    color: var(--primaryClr);
    transition: all 0.3s ease;
  }

  @media screen and (min-width: 960px) {
    height: 100%;
    display: flex;
    align-items: center;
    padding: 0.5rem 1rem;
  }
`;
