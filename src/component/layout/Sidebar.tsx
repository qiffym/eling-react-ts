import { NavLink } from 'react-router-dom';
import { MdDashboard } from 'react-icons/md';
import logosmk from '../../assets/images/smkn3mlg150x150.png';
import { useClasses } from '../../hooks/useClasses';
import { useFetch } from '../../hooks/useFetch';
import { StudentClasses } from '../../types/student-type';

const LinkNavItems = [
  { name: 'Users', path: 'resources/users' },
  { name: 'Rombel Classes', path: 'resources/rombel-class' },
  { name: 'Motivational Words', path: 'resources/motivational-words' },
];

const Sidebar = () => {
  const { classList } = useClasses();
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { data } = useFetch('/api/student/my-classes');
  const studentClassList: StudentClasses[] = data;

  const subNav = (role: string) => {
    switch (role) {
      case 'admin':
        return (
          <>
            <label className="px-6 text-gray-400 text-sm font-bold">
              Resources
            </label>
            {LinkNavItems.map((item) => (
              <ul
                key={item.name}
                className="menu p-4 py-0 w-64 bg-slate-600 text-white text-sm">
                <li>
                  <NavLink to={item.path}>{item.name}</NavLink>
                </li>
              </ul>
            ))}
          </>
        );

      case 'teacher':
        return (
          <>
            <label className="px-6 text-gray-400 text-sm font-bold">
              My Class
            </label>
            {classList?.length
              ? classList.map((item) => (
                  <ul
                    key={item.id}
                    className="menu menu-compact p-4 py-0 w-64 bg-slate-600 text-white">
                    <li>
                      <NavLink to={`online-class/${item.id}`} state={item}>
                        {item.name}
                      </NavLink>
                    </li>
                  </ul>
                ))
              : null}
          </>
        );

      case 'student':
        return (
          <>
            <label className="px-6 text-gray-400 text-sm font-bold">
              My Class
            </label>
            {studentClassList?.length
              ? studentClassList.map((item) => (
                  <ul
                    key={item.id}
                    className="menu menu-compact p-4 py-0 w-64 bg-slate-600 text-white">
                    <li>
                      <NavLink to={`my-classes/${item.id}`} state={item}>
                        {item.name}
                      </NavLink>
                    </li>
                  </ul>
                ))
              : null}
          </>
        );
      default:
        return (
          <ul className="rounded-md menu p-4 overflow-y-auto w-64 bg-slate-600 text-white text-center">
            <li>
              <NavLink to="dashboard">Dashboard</NavLink>
            </li>
          </ul>
        );
    }
  };

  return (
    <div className="hidden fixed sm:block drawer-side bg-slate-600 overflow-auto h-screen z-50">
      {/* Logo */}
      <div className="flex justify-center items-center space-x-2 p-3">
        <div className="mask mask-circle w-20 h-20">
          <img src={logosmk} alt="logo_smk" />
        </div>
        <div className="flex flex-col -space-y-1 text-slate-200">
          <p>e-Learning</p>
          <p className="font-semibold">
            <span className="text-[#eaea72]">SMEKA</span>NEGAMA
          </p>
        </div>
      </div>

      <hr />

      {/* Dashboard List */}
      <ul className="menu p-4 overflow-y-auto w-64 bg-slate-600 text-white text-center">
        <li>
          <NavLink to="dashboard">
            <MdDashboard className="-mr-2" />
            Dashboard
          </NavLink>
        </li>
      </ul>

      {subNav(user.user.role)}
    </div>
  );
};

export default Sidebar;
