import React, { useContext } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { MyContext } from '../../context/context';

const ProtectedRoutes = () => {
  const { state } = useContext(MyContext);
  const token = localStorage.getItem('token');
  const useAuth = () => {
    if (token) {
      return true;
    } else {
      return false;
    }
  };

  const auth = useAuth();

  return auth ? <Outlet /> : <Navigate to="/login" />;
};

export default ProtectedRoutes;
