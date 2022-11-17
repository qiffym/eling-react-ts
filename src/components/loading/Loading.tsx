import React from 'react';

const Loading = () => (
    <div className="absolute top-1/2 right-[45%] z-50">
      <div className="lds-ellipsis">
        <div />
        <div />
        <div />
        <div />
      </div>
    </div>
  )

export default Loading;
