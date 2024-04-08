import React from 'react';

function LoadingAnimation({ macro }) {
  return (
    <div
      className={`border-t-color-base-3 border-r-color-base-3 border-b-color-base-3 border-l-transparent rounded-full animate-spin m-auto
      ${macro ? `w-20 h-20 border-4` : 'w-8 h-8 border-2'} `}
    ></div>
  );
}

export default LoadingAnimation;
