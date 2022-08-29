import { useContext } from 'react';

import { Navigate, Outlet } from 'react-router-dom';
import { MyContext } from '../../context/context';

function PublicRoutes() {
  const { state } = useContext(MyContext);
  const token = localStorage.getItem('token');

  const useAuth = () => {
    if (token) {
      return true;
    }
    return false;
  };
  const auth = useAuth();

  return auth ? <Navigate to="/" /> : <Outlet />;
}

export default PublicRoutes;
