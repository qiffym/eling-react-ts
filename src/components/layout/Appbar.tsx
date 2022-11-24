/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { useEffect, useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { HiOutlineChevronDown } from 'react-icons/hi';
import { BiLogOut } from 'react-icons/bi';
import { LoginType } from '../../types/context-type';
import useLogout from '../../hooks/useLogout';

const Appbar = () => {
  const user: LoginType = JSON.parse(localStorage.getItem('user') || '');
  const authLogout = useLogout();
  const pathLoc = useLocation().pathname;
  const [color, setColor] = useState(false);

  const scrollAppbar = () => {
    if (window.scrollY >= 40) {
      setColor(true);
    } else {
      setColor(false);
    }
  };

  const realPath = pathLoc.split('/');

  const headerTitle = (pathNow: string) => {
    switch (pathNow) {
      case '/dashboard':
        return 'Dashboard';
      case '/resources/users':
        return 'Users';
      case '/resources/rombel-class':
        return 'Rombel Class';
      case '/resources/motivational-words':
        return 'Motivational Words';
      case '/me':
        return user.user.name;
      default:
        return '';
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
      {realPath[1] === 'online-class' ? (
        ''
      ) : (
        <header
          className={`${
            color ? 'bg-base-100 drop-shadow-sm border-b' : 'bg-transparent'
          } hidden sm:flex fixed w-[82%] 2xl:w-[86.5%]  h-16 px-6 space-x-5 z-50 transition-all`}>
          <nav className="w-full sm:flex flex-row justify-between items-center">
            {color ? (
              <h1 className="text-xl font-medium transition-all">
                {headerTitle(pathLoc)}
              </h1>
            ) : (
              <div />
            )}
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost m-1 space-x-3">
                <div className="flex flex-row items-center space-x-2">
                  <div className="avatar ">
                    <div className="w-9 rounded-full ring-2 ring-slate-300 ring-offset-base-100 ring-offset-1">
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
      )}
    </div>
  );
};

export default Appbar;
