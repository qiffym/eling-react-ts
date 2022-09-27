import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutIndex from '../component/layout';
import Appbar from '../component/layout/Appbar';
import Home from '../pages/home/Home';
import Login from '../pages/login/Login';
import CreateUser from '../pages/admin/users/CreateUser';
import EditUser from '../pages/admin/users/EditUser';
import Users from '../pages/admin/users/Users';
import ViewUser from '../pages/admin/users/ViewUser';
import PermissionDenied from '../pages/not-found-page/PermissionDenied';
import ProtectedRoutes from './ProtectedRoutes';
import PublicRoutes from './PublicRoutes';
import NotFound from '../pages/not-found-page/NotFound';

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
                  <Route path=":id" element={<ViewUser />} />
                  {/* <Route path="user" element={<ViewUser />} /> */}
                </Route>
                <Route path="motivational" element={<Users />} />
                <Route path="classes" element={<Users />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>

      <Route path="login" element={<PublicRoutes />}>
        <Route path="/login" element={<Login />} />
      </Route>

      <Route path="permissiondenied" element={<PermissionDenied />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default AppRoutes;
