import React from 'react';
import { NavLink } from 'react-router-dom';

const LinkNavItems = [
  { name: 'Users', path: 'resources/users' },
  { name: 'Rombel Classes', path: 'resources/classes' },
  { name: 'Motivational Words', path: 'resources/motivational' },
];

const Sidebar = () => {
  return (
    <div className="drawer-side bg-white overflow-auto h-screen">
      <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content text-center">
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      </ul>
      <label className="px-6 text-gray-400 text-sm">Resources</label>
      {LinkNavItems.map((item) => (
        <ul
          key={item.name}
          className="menu p-4 py-2 overflow-y-auto w-64 bg-base-100 text-base-content text-center"
        >
          <li>
            <NavLink to={item.path}>{item.name}</NavLink>
          </li>
        </ul>
      ))}
      <hr className="mx-6" />
      <div className="menu py-4 px-8 bg-base-100 text-base-content cursor-pointer">
        <h3 className=" inline-block text-gray-400 hover:text-black transition-colors">
          <p
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </p>
        </h3>
      </div>
    </div>
  );
};

export default Sidebar;
