import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutIndex from '../../component/layout';
import Appbar from '../../component/layout/Appbar';
import Home from '../home/Home';
import Login from '../admin/login/Login';
import CreateUser from '../admin/users/CreateUser';
import EditUser from '../admin/users/EditUser';
import Users from '../admin/users/Users';
import ViewUser from '../admin/users/ViewUser';
import PermissionDenied from '../not-found-page/PermissionDenied';
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
            <Route path="/" element={<ProtectedRoutes roleRequired="admin" />}>
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
      </Route>

      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="permissiondenied" element={<PermissionDenied />} />
    </Routes>
  );
};

export default AppRoutes;
