import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Appbar = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');

  return (
    <>
      <nav className="flex flex-row fixed w-[82%] justify-end items-center h-16 px-6 space-x-5 z-50">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn m-1">
            {user.user.name}
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            <li>
              <p>Options</p>
            </li>
            <li>
              <p
                onClick={() => {
                  localStorage.clear();
                  window.location.reload();
                }}
              >
                Logout
              </p>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
    </>
  );
};

export default Appbar;
