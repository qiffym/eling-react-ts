import React from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutIndex from '../../component/layout';
import Appbar from '../../component/layout/Appbar';

import Home from '../home/Home';
import Login from '../login/Login';
import CreateUser from '../users/CreateUser';
import EditUser from '../users/EditUser';
import Users from '../users/Users';
import ViewUser from '../users/ViewUser';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ProtectedRoutes />}>
        <Route path="/" element={<LayoutIndex />}>
          <Route path="/" element={<Appbar />}>
            <Route path="/" element={<Navigate to="dashboard" replace />} />
            <Route path="dashboard" element={<Home />} />
            <Route path="resources">
              <Route path="users">
                <Route index element={<Users />} />
                <Route path="new" element={<CreateUser />} />
                {/* <Route path=":id/edit" element={<EditUser />} /> */}
                <Route path="edit" element={<EditUser />} />
                {/* <Route path=":id" element={<ViewUser />} /> */}
                <Route path="user" element={<ViewUser />} />
              </Route>
              <Route path="classes" element={<Users />} />
              <Route path="motivational" element={<Users />} />
            </Route>
          </Route>
        </Route>
      </Route>
      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
