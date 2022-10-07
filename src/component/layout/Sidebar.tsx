import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { MyContext } from '../../context/context';
import logosmk from '../../assets/images/smkn3mlg150x150.png';

const LinkNavItems = [
  { name: 'Users', path: 'resources/users' },
  { name: 'Rombel Classes', path: 'resources/tes' },
  { name: 'Motivational Words', path: 'resources/motivational' },
];

const Sidebar = () => {
  const { state } = useContext(MyContext);
  const user = JSON.parse(localStorage.getItem('user') || '');

  const subNav = (role: string) => {
    switch (role) {
      case 'admin':
        return (
          <>
            <label className="px-6 text-gray-400 text-sm">Resources</label>
            {LinkNavItems.map(item => (
              <ul
                key={item.name}
                className="menu p-4 py-2 overflow-y-auto w-64 bg-base-100 text-base-content text-center">
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
            <label className="px-6 text-gray-400 text-sm">My Class</label>
            {state.classes?.classList?.length
              ? state.classes?.classList?.map(item => (
                  <ul
                    key={item.id}
                    className="menu p-4 py-2 text-sm overflow-y-auto w-64 bg-base-100 text-base-content">
                    <li>
                      <NavLink to={'/'}>{item.name}</NavLink>
                    </li>
                  </ul>
                ))
              : null}
          </>
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
      <img src={logosmk} alt="logo_smk" width={120} className="mx-auto my-2" />
      {/* <div className="border-t-2 w-full border-slate-600 inline-block "></div> */}

      <ul className="menu p-4 overflow-y-auto w-64 bg-base-100 text-base-content text-center mt-5">
        <li>
          <NavLink to="dashboard">Dashboard</NavLink>
        </li>
      </ul>

      {/* {user.user.role === 'admin' ? (
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
      )} */}

      {subNav(user.user.role)}

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
