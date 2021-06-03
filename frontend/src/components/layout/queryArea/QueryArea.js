/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable react/prop-types */
import React from 'react';

import {
  QueryContainer,
  QueryTitle,
  FiltersContainer,
  FiltersWrapper,
  SortingWrapper,
  FilterSlider,
  FilterTextFields,
  FilterField,
  SortField,
} from './QueryArea.elements';

const QueryArea = ({ loading }) => {
  return (
    <QueryContainer>
      <FiltersContainer>
        <FiltersWrapper>
          <QueryTitle>Filters</QueryTitle>
          <FilterSlider type="range" />
          <FilterTextFields>
            <FilterField
              label="Min Price"
              type="number"
              id="lower"
              disabled={loading}
              value={0}
            />
            <FilterField
              label="Max Price"
              type="number"
              id="highest"
              disabled={loading}
              value={100}
            />
          </FilterTextFields>
        </FiltersWrapper>

        <SortingWrapper>
          <QueryTitle>Sorting</QueryTitle>
          <div>
            <SortField
              type="radio"
              label="Sort by Highest Price"
              id="descPrice"
              disabled={loading}
            />
            <label htmlFor="descPrice">Sort by Highest Price</label>
          </div>

          <div>
            <SortField
              type="radio"
              label="Sort by Lowest Price"
              id="ascPrice"
              disabled={loading}
            />
            <label htmlFor="ascPrice">Sort by Lowest Price</label>
          </div>

          <div>
            <SortField
              type="radio"
              label="Sort by Highest Rating"
              id="descRate"
              disabled={loading}
            />
            <label htmlFor="descRate">Sort by Highest Rating</label>
          </div>

          <div>
            <SortField
              type="radio"
              label="Sort by Lowest Rating"
              id="ascRate"
              disabled={loading}
            />
            <label htmlFor="ascRate">Sort by Lowest Rating</label>
          </div>
        </SortingWrapper>
      </FiltersContainer>
    </QueryContainer>
  );
};

export default QueryArea;
