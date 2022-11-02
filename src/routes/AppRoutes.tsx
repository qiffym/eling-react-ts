import { Navigate, Route, Routes } from 'react-router-dom';
import LayoutIndex from '../component/layout';
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
import ClassDetail from '../pages/teacher/classes/ClassDetail';
import Profile from '../pages/profile/Profile';
import RombelClass from '../pages/admin/rombel-class/RombelClass';
import MotivationalWords from '../pages/admin/motivational-words/MotivationalWords';
import AddMotivational from '../pages/admin/motivational-words/AddMotivational';
import AddRombel from '../pages/admin/rombel-class/AddRombel';
import Forum from '../pages/teacher/forum/Forum';
import AssignmentDetail from '../pages/teacher/assignment/AssignmentDetail';
import HeaderIndex from '../component/layout/HeaderIndex';
import StudentDetailClass from '../pages/student/classes/StudentDetailClass';

const AppRoutes = () => (
  <Routes>
    <Route path="login" element={<PublicRoutes />}>
      <Route path="/login" element={<Login />} />
    </Route>
    <Route path="/" element={<ProtectedRoutes />}>
      <Route path="/" element={<LayoutIndex />}>
        <Route path="/" element={<HeaderIndex />}>
          <Route path="/" element={<Navigate to="dashboard" replace />} />
          <Route path="dashboard" element={<Home />} />
          <Route path="me" element={<Profile />} />
          <Route path="/" element={<ProtectedRoutes roleRequired="student" />}>
            <Route path="my-classes">
              <Route path=":id" element={<StudentDetailClass />} />
            </Route>
          </Route>

          <Route path="/" element={<ProtectedRoutes roleRequired="teacher" />}>
            <Route path="online-class">
              <Route path=":id" element={<ClassDetail />} />
              <Route
                path=":id/contents/:id/assignment/:id"
                element={<AssignmentDetail />}
              />
              <Route path=":id/contents/:id/forums/:id" element={<Forum />} />
            </Route>
          </Route>
          <Route path="/" element={<ProtectedRoutes roleRequired="admin" />}>
            <Route path="resources">
              <Route path="users">
                <Route index element={<Users />} />
                <Route path="new" element={<CreateUser />} />
                <Route path=":id/edit" element={<EditUser />} />
                <Route path=":id" element={<ViewUser />} />
              </Route>
              <Route path="rombel-class">
                <Route path="new" element={<AddRombel />} />
                <Route index element={<RombelClass />} />
              </Route>
              <Route path="motivational-words">
                <Route path="new" element={<AddMotivational />} />
                <Route index element={<MotivationalWords />} />
              </Route>
            </Route>
          </Route>
        </Route>
      </Route>
    </Route>

    <Route path="permissiondenied" element={<PermissionDenied />} />
    <Route path="*" element={<NotFound />} />
  </Routes>
);

export default AppRoutes;
