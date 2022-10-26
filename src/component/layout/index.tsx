import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const LayoutIndex = () => (
  <div className="flex min-h-screen">
    <Sidebar />
    <div id="bodyDash" className="flex-1 bg-[#f5f6fa] h-full ml-64">
      <Outlet />
    </div>
  </div>
);

export default LayoutIndex;
