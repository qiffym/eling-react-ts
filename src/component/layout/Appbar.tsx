import React from 'react';
import { Outlet } from 'react-router-dom';

const Appbar = () => {
  return (
    <>
      <nav className="flex flex-row fixed w-[82%] justify-end items-center h-16 px-6 space-x-5 z-50">
        Appbar
      </nav>
      <Outlet />
    </>
  );
};

export default Appbar;
