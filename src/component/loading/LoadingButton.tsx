import React from 'react';

const LoadingButton = () => (
  <div className="loader-dots block relative w-16 h-5 mt-2">
    <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-white" />
    <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-white" />
    <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-white" />
    <div className="absolute top-0 mt-1 w-2 h-2 rounded-full bg-white" />
  </div>
);

export default LoadingButton;
