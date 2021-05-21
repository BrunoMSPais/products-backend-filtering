import React from 'react';

import { LoaderContainer, LoadingSpinner } from './Loader.elements';

const Loader = () => {
  return (
    <LoaderContainer>
      <LoadingSpinner>
        <div className="spinner-gradient" />
      </LoadingSpinner>
    </LoaderContainer>
  );
};

export default Loader;
