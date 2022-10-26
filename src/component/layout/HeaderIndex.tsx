/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Appbar from './Appbar';

import BottomBar from './BottomBar';
import Footer from './Footer';

const HeaderIndex = () => {
  const pathLoc = useLocation().pathname;

  const realPath = pathLoc.split('/');

  // w-[82%] 2xl:w-[86.5%]

  return (
    <>
      <Appbar />
      {/* Mobile AppBar */}
      {/* <nav className="sm:hidden flex flex-row justify-between bg-white w-full h-16 fixed items-center px-4 z-50 border-b">
          <h2 className="font-semibold text-xl">Dashboard</h2>
          <button
            type="button"
            // onClick={() => setOpenModal(true)}
            className="btn btn-ghost btn-circle">
            <HiPlus className="text-xl" />
          </button>
        </nav> */}

      <Outlet />
      {realPath[1] === 'online-class' ? '' : <BottomBar />}
      <Footer />
    </>
  );
};

export default HeaderIndex;
