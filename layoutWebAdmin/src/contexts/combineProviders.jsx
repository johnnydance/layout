import React from 'react';

const combineProviders = (...providers) => ({ children }) => {
  return providers.reduceRight(
    (acc, Provider) => <Provider>{acc}</Provider>,
    children
  );
};

export default combineProviders;
