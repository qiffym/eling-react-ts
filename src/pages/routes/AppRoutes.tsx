import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';

import Home from '../home/Home';
import Login from '../login/Login';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<Navigate to="home" replace />} />
        <Route path="home" element={<Home />} />
      </Route>
      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
