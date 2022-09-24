import { FC } from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { LoginType } from '../types/context-type';

type ProtectedRouteRole = {
  roleRequired?: 'admin' | 'teacher' | 'student';
};

const ProtectedRoutes: FC<ProtectedRouteRole> = ({ roleRequired }) => {
  const getUser = localStorage.getItem('user');
  let token: string;
  let user: LoginType;

  if (typeof getUser === 'string') {
    user = JSON.parse(getUser);
    token = user.token;
  }

  const useAuth = () => {
    if (token) {
      return {
        auth: true,
        roles: user.user.role,
      };
    } else {
      return {
        auth: false,
        roles: null,
      };
    }
  };

  const { auth, roles } = useAuth();

  if (roleRequired) {
    return auth ? (
      roleRequired === roles ? (
        <Outlet />
      ) : (
        <Navigate to="/permissiondenied" />
      )
    ) : (
      <Navigate to="/login" />
    );
  } else {
    return auth ? <Outlet /> : <Navigate to="/login" />;
  }
};

export default ProtectedRoutes;
