import React from 'react';

const Home = () => {
  return (
    <div>
      <p>Home</p>
      <button
        onClick={() => {
          localStorage.clear();
          window.location.reload();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Home;
