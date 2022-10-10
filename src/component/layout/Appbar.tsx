import React from 'react';
import { Outlet } from 'react-router-dom';
import { LoginType } from '../../types/context-type';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';

const Appbar = () => {
  const user: LoginType = JSON.parse(localStorage.getItem('user') || '');
  const authLogout = useLogout();

  return (
    <>
      <nav className="flex flex-row fixed w-[82%] justify-end items-center h-16 px-6 space-x-5 z-50">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost m-1 space-x-3">
            <div className="flex flex-row items-center space-x-2">
              <div className="avatar ">
                <div className="w-8 rounded-full ring ring-gray-400 ring-offset-base-100 ring-offset-0">
                  <img src={user.user.avatar} alt={user.user.name} />
                </div>
              </div>
              <h1>{user.user.name}</h1>
            </div>
            <HiOutlineChevronDown />
          </label>

          <ul
            tabIndex={0}
            className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
            <li>
              <p>My Profile</p>
            </li>
            <hr />
            <li className="font-bold hover:text-red-500">
              <p
                onClick={() => {
                  authLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>
                <BiLogOut className="text-lg" />
                Keluar
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
