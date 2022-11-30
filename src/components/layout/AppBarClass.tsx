/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { HiOutlineChevronDown, HiChevronLeft } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import useLogout from '../../hooks/useLogout';
import { useFetch } from '../../hooks/useFetch';
import { UserType } from '../../types/user-type';

type Props = {
  headerTitle?: string;
};

const AppBarClass: FC<Props> = ({ headerTitle }) => {
  const { data } = useFetch('/api/me');
  const authLogout = useLogout();
  const [color, setColor] = useState(false);
  const navigate = useNavigate();

  const userData: UserType = data;

  const scrollAppbar = () => {
    if (window.scrollY >= 150) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', scrollAppbar);

    return () => {
      window.removeEventListener('scroll', scrollAppbar);
    };
  });

  // w-[82%] 2xl:w-[86.5%]

  return (
    <div>
      <header
        className={`${
          color ? 'bg-base-100 drop-shadow-sm border-b' : 'bg-transparent'
        } hidden sm:flex fixed w-[82%] 2xl:w-[86.5%]  h-16 px-6 space-x-5 z-50 transition-all duration-150 ease-in-out`}>
        <nav className="w-full sm:flex flex-row justify-between items-center">
          {color ? (
            <div className="flex flex-row items-center space-x-2">
              <button
                type="button"
                onClick={() => navigate('/')}
                className="btn btn-ghost btn-square h-8 w-12">
                <HiChevronLeft className="text-2xl" />
              </button>
              <h1 className="text-xl font-medium transition-all">
                {headerTitle}
              </h1>
            </div>
          ) : (
            <div />
          )}
          <div className="dropdown dropdown-end">
            <label tabIndex={0} className="btn btn-ghost m-1 space-x-3">
              <div className="flex flex-row items-center space-x-2">
                <div className="avatar ">
                  <div className="w-9 rounded-full ring-2 ring-slate-300 ring-offset-base-100 ring-offset-1">
                    <img src={userData.avatar} alt={userData.name} />
                  </div>
                </div>
                <h1>{userData.name}</h1>
              </div>
              <HiOutlineChevronDown />
            </label>

            <ul
              tabIndex={0}
              className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52">
              <li>
                <NavLink to="/me">My Profile</NavLink>
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
                  <BiLogOut className="text-lg -mr-1" />
                  Keluar
                </button>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default AppBarClass;
