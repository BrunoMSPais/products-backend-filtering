import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyle';

export const CardContainer = styled(Container)`
  margin-top: 80px; /* discard after building queryArea component */
  padding: 1.5em 0.5em;
  display: grid;
  grid-gap: 1rem;

  @media (min-width: 600px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (min-width: 900px) {
    grid-template-columns: repeat(3, 1fr);
  }
`;

export const CardBody = styled.div`
  height: 12em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  overflow: hidden;
`;

export const CardHeader = styled.header`
  font-size: 1.5em;
  background: var(--darkBg);
  padding: 1rem 0.5rem;
  color: var(--primaryClr);
`;

export const CardDescription = styled.p`
  color: var(--secondaryClr);
  height: 100%;
  padding: 1em;
`;

export const CardValues = styled.div`
  height: 4em;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardRating = styled.span`
  height: 100%;
  width: 30%;
  padding-left: 1em;
  display: grid;
  align-items: center;
  /* background: green; */
  color: #0e0e0e90;
`;

export const CardPrice = styled.span`
  height: 100%;
  width: 30%;
  padding-right: 1em;
  display: grid;
  align-items: center;
  justify-content: flex-end;
  /* background: blue; */
  color: #0e0e0e90;
`;
