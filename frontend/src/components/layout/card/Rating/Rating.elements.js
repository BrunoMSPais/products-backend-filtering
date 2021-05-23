/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const StarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0.5em;
  position: relative;
`;

export const OuterStar = styled.div`
  position: relative;
  display: inline-block;
  &::before {
    content: '\f005 \f005 \f005 \f005 \f005';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: var(--primaryClr);
  }
`;

export const InnerStar = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  white-space: nowrap;
  overflow: hidden;
  width: ${({ percent }) => percent};

  &::before {
    content: '\f005 \f005 \f005 \f005 \f005';
    font-family: 'Font Awesome 5 Free';
    font-weight: 900;
    color: #f8ce0b;
  }
`;
