import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const LayoutIndex = () => (
  <div className="flex min-h-screen">
    <Sidebar />
    <div
      id="bodyDash"
      className="hidden sm:block flex-1 bg-[#f5f6fa] h-full ml-64">
      <Outlet />
    </div>
    <div
      id="mobile-body"
      className="sm:hidden block flex-1 bg-[#f5f6fa] h-full overflow-auto">
      <Outlet />
    </div>
  </div>
);

export default LayoutIndex;
