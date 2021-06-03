/* eslint-disable no-undef */
import styled from 'styled-components';
import { Container } from '../../styles/GlobalStyle';

export const QueryContainer = styled(Container)`
  width: 100%;
  margin-top: 5.5em;
  margin-left: 0.5em;
  margin-right: 2.5em;
  padding: 1.5em 0.5em;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  box-shadow: 5px 5px 5px 2px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  background-color: #eaeaea;
`;

export const FiltersContainer = styled.form`
  display: flex;
  justify-content: space-between;

  background-color: #eaeaea;
`;

export const QueryTitle = styled.h2``;

export const FiltersWrapper = styled.div`
  /* width: 40%; */
`;

export const SortingWrapper = styled.div`
  display: flex;
  flex-direction: column;

  /* width: 50%; */
`;

export const FilterSlider = styled.input``;

export const FilterTextFields = styled.div``;

export const FilterField = styled.input``;

export const SortField = styled.input`
  margin-right: 1em;
`;
