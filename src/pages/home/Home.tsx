import Header from '../../component/header/Header';

import DashboardAdmin from '../admin/dashboard/DashboardAdmin';
import DashboardTeacher from '../teacher/dashboard/DashboardTeacher';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');

  const dashboardRole = (role: string) => {
    switch (role) {
      case 'admin':
        return <DashboardAdmin />;
      case 'teacher':
        return <DashboardTeacher />;
      case 'student':
        return <Header>student</Header>;
      default:
        return (
          <>
            <Header>Dashboard</Header>
            {/* <Stat /> */}
          </>
        );
    }
  };

  return (
    <div className="px-2 py-8 sm:px-6 sm:py-20">
      {dashboardRole(user.user.role)}
    </div>
  );
};

export default Home;
