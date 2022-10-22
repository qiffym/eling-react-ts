import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const LayoutIndex = () => (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 bg-[#f5f6fa] overflow-auto  h-screen">
        <Outlet />
      </div>
    </div>
  )

export default LayoutIndex;
