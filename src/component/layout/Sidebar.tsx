import React from 'react';

const Sidebar = () => {
  return (
    <div className="drawer-side bg-white overflow-auto hover:overflow-scroll h-screen">
      <label className="drawer-overlay"></label>
      <ul className="menu p-4 overflow-y-auto w-60 bg-base-100 text-base-content">
        <li>
          <a>Sidebar Item 1</a>
        </li>
        <li>
          <a>Sidebar Item 2</a>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
