import { NavLink } from 'react-router-dom';

const LinkNavItems = [
  { name: 'Users', path: 'resources/users' },
  { name: 'Rombel Classes', path: 'resources/classes' },
  { name: 'Motivational Words', path: 'resources/motivational' },
];

const Sidebar = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');

  const dashborad = (role: string) => {
    switch (role) {
      case 'admin':
        return (
          <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content text-center">
            <li>
              <NavLink to="dashboard">Admin</NavLink>
            </li>
          </ul>
        );

      case 'teacher':
        return (
          <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content text-center">
            <li>
              <NavLink to="dashboard">Guru</NavLink>
            </li>
          </ul>
        );

      case 'student':
        return (
          <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content text-center">
            <li>
              <NavLink to="dashboard">Siswa</NavLink>
            </li>
          </ul>
        );
      default:
        return (
          <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content text-center">
            <li>
              <NavLink to="dashboard">Dashboard</NavLink>
            </li>
          </ul>
        );
    }
  };

  return (
    <div className="drawer-side bg-white overflow-auto h-screen">
      {/* {dashborad(user.user.role)} */}

      <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content text-center">
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      </ul>

      {user.user.role === 'admin' ? (
        <>
          <label className="px-6 text-gray-400 text-sm">Resources</label>
          {LinkNavItems.map((item) => (
            <ul
              key={item.name}
              className="menu p-4 py-2 overflow-y-auto w-64 bg-base-100 text-base-content text-center"
            >
              <li>
                <NavLink to={item.path}>{item.name}</NavLink>
              </li>
            </ul>
          ))}
        </>
      ) : (
        <label className="px-6 text-gray-400 text-sm">My Class</label>
      )}

      {/* <hr className="mx-6" />
      <div className="menu py-4 px-8 bg-base-100 text-base-content cursor-pointer">
        <h3 className=" inline-block text-gray-400 hover:text-black transition-colors">
          <p
            onClick={() => {
              localStorage.clear();
              window.location.reload();
            }}
          >
            Logout
          </p>
        </h3>
      </div> */}
    </div>
  );
};

export default Sidebar;
