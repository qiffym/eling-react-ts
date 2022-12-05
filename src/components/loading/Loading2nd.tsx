import React from 'react';

const Loading2ND = () => (
  <div className="flex h-screen">
    <div className="m-auto flex flex-col space-y-5">
      <div className="loader-dots block relative w-16 h-5 mt-2">
        <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary" />
        <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary" />
        <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary" />
        <div className="absolute top-0 mt-1 w-3 h-3 rounded-full bg-primary" />
      </div>
    </div>
  </div>
);

export default Loading2ND;
