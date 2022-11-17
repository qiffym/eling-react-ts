/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import useNetwork from '../../hooks/useNetwork';
import Appbar from './Appbar';

import BottomBar from './BottomBar';
import Footer from './Footer';

const HeaderIndex = () => {
  const pathLoc = useLocation().pathname;

  const realPath = pathLoc.split('/');

  const isOnline = useNetwork();

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
      {isOnline ? null : (
        <div className="alert alert-error rounded-none shadow-lg transition-all duration-100">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current flex-shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Error! No Connection.</span>
          </div>
        </div>
      )}
      <Outlet />

      {realPath[1] === 'online-class' ? '' : <BottomBar />}
      <Footer />
    </>
  );
};

export default HeaderIndex;
