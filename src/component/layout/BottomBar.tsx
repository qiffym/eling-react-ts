import React from 'react';
import { NavLink } from 'react-router-dom';
import { HiOutlineHome, HiHome, HiOutlineCog, HiCog } from 'react-icons/hi';

const BottomBar = () => {
  const activeClassName = 'active';
  return (
    <div className="btm-nav border-t sm:hidden">
      <NavLink
        to="/dashboard"
        className={({ isActive }) => (isActive ? activeClassName : '')}>
        {({ isActive }) =>
          isActive ? (
            <HiHome className="text-2xl" />
          ) : (
            <HiOutlineHome className="text-2xl" />
          )
        }
      </NavLink>

      <label htmlFor="my-drawer-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      </label>
      <NavLink
        to="/me"
        className={({ isActive }) => (isActive ? activeClassName : '')}>
        {({ isActive }) =>
          isActive ? (
            <HiCog className="text-2xl " />
          ) : (
            <HiOutlineCog className="text-2xl" />
          )
        }
      </NavLink>
    </div>
  );
};

export default BottomBar;
