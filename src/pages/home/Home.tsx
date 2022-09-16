import React from 'react';
import Header from '../../component/header/Header';
import Stat from '../../component/home/Stat';

const Home = () => {
  return (
    <div className="w-screen px-6 py-14">
      <Header>Dashboard</Header>
      <Stat />
    </div>
  );
};

export default Home;
