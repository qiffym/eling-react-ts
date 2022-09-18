import { Navigate, Outlet } from 'react-router-dom';
import { LoginType } from '../../types/context-type';

function PublicRoutes() {
  const getUser = localStorage.getItem('user');
  let token: string;
  let user: LoginType;

  if (typeof getUser === 'string') {
    user = JSON.parse(getUser);
    token = user.token;
  }

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
