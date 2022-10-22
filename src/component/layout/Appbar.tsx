/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { LoginType } from '../../types/context-type';
import useLogout from '../../hooks/useLogout';
import Footer from './Footer';

const Appbar = () => {
  const user: LoginType = JSON.parse(localStorage.getItem('user') || '');
  const authLogout = useLogout();

  return (
    <>
      <nav className="flex flex-row fixed w-[82%] 2xl:w-[86.5%] justify-end items-center h-16 px-6 space-x-5 z-50">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost m-1 space-x-3">
            <div className="flex flex-row items-center space-x-2">
              <div className="avatar ">
                <div className="w-8 rounded-full ring-2 ring-primary ring-offset-base-100 ring-offset-1">
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
              <NavLink to="me">My Profile</NavLink>
            </li>
            <hr />
            <li className="font-bold hover:text-red-500">
              <button
                type="button"
                onClick={() => {
                  authLogout();
                  localStorage.clear();
                  window.location.reload();
                }}>
                <BiLogOut className="text-lg" />
                Keluar
              </button>
            </li>
          </ul>
        </div>
      </nav>
      <Outlet />
      <Footer />
    </>
  );
};

export default Appbar;
