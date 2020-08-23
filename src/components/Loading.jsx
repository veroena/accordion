import React from 'react';

export const Loading = () => {
  return (
      <div className="loading">
        <p>Loading</p>
        <div className="animation">
          <div className="circle"></div>
          <div className="circle"></div>
          <div className="circle"></div>
        </div>
      </div>
  );
};
