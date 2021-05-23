/* eslint-disable react/prop-types */
import React from 'react';

import { StarContainer, OuterStar, InnerStar } from './Rating.elements';

const Rating = ({ rating }) => {
  const starsTotal = 5;

  const percentage = (rating / starsTotal) * 100;

  const percentageRounded = `${Math.round(percentage / 10) * 10}%`;

  return (
    <StarContainer>
      <OuterStar>
        <InnerStar percent={percentageRounded} />
      </OuterStar>
    </StarContainer>
  );
};

export default Rating;
