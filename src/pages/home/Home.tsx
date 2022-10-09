import Header from '../../component/header/Header';
import Stat from '../../component/home/Stat';
import DashboardAdmin from '../admin/dashboard/DashboardAdmin';
import DashboardTeacher from '../teacher/dashboard/DashboardTeacher';

const Home = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');

  console.log(user.token);

  const dashboardRole = (role: string) => {
    switch (role) {
      case 'admin':
        return <DashboardAdmin />;
      case 'teacher':
        return <DashboardTeacher />;
      case 'student':
        return (
          <>
            <Header>student</Header>
          </>
        );
      default:
        return (
          <>
            <Header>Dashboard</Header>
            {/* <Stat /> */}
          </>
        );
    }
  };

  return <div className="px-6 py-20">{dashboardRole(user.user.role)}</div>;
};

export default Home;
