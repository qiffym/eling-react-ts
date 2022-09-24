import React from 'react';
import { useNavigate } from 'react-router-dom';

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen">
      <div className="m-auto flex flex-col space-y-5">
        <h1 className="font-extrabold text-7xl">Not Found :(</h1>
        <button onClick={() => navigate('/')} className="btn">
          Please Back :)
        </button>
      </div>
    </div>
  );
};

export default NotFound;
