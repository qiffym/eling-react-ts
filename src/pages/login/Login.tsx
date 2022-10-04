import React, { ChangeEvent, useEffect, useState } from 'react';
import LoadingButton from '../../component/loading/LoadingButton';
import useLogin from '../../hooks/useLogin';
import { Helmet } from 'react-helmet';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import logosmk from '../../assets/images/smkn3mlg150x150.png';

const Login = () => {
  const currentYear = new Date().getFullYear();
  const { isLoading, authLogin } = useLogin();
  const [disable, setDisable] = useState(false);
  const [input, setInput] = useState({
    username: '',
    password: '',
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    if (input.username === '' || input.password === '') {
      setDisable(true);
    } else if (isLoading) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [input, isLoading]);

  return (
    <>
      {/* <Helmet>
        <title>Login</title>
      </Helmet> */}
      <div className="flex w-screen h-screen bg-yellow-300">
        <div className="bg-slate-200 m-auto w-full max-w-sm flex flex-col justify-center content-center items-center border-4 border-slate-400 rounded-xl shadow-2xl px-7 py-14">
          <img src={logosmk} alt="logo_smk" className="mb-4" />
          <h2 className="text-4xl font-bold text-teal-600">Masuk</h2>
          <h3 className="text-lg font-semibold mb-2">
            E-Learning SMK Negeri 3 Malang
          </h3>
          <div className="border-t-2 w-1/2 border-teal-600 inline-block mb-4"></div>
          <form onSubmit={e => authLogin(e, input.username, input.password)}>
            {/* Username */}
            <label htmlFor="username" className="text-slate-600">
              <FaUserAlt className="text-md inline mr-1 pb-1" />
              Username
            </label>
            <input
              type="text"
              placeholder="username / email"
              name="username"
              id="username"
              className="input input-bordered w-full focus:outline-none focus:ring ring-teal-600 mb-3"
              value={input.username}
              onChange={handleChange}
            />

            {/* Password */}
            <label htmlFor="password" className="text-slate-600">
              <FaLock className="text-md inline mr-1 pb-1" />
              Password
            </label>
            <input
              type="password"
              placeholder="*********"
              name="password"
              id="password"
              autoComplete="on"
              className="input input-bordered w-full focus:outline-none focus:ring ring-teal-600 mb-3"
              value={input.password}
              onChange={handleChange}
            />
            <button
              disabled={disable}
              className="btn w-full bg-teal-600 border-slate-400">
              {isLoading ? <LoadingButton /> : 'Login'}
            </button>
          </form>
          {/* Footer */}
          <div className="border-t-2 w-72 border-slate-400 inline-block mb-3 mt-4"></div>
          <div className="inline-block">
            <h3 className="italic font-semibold text-slate-500 hover:text-slate-700 hover:font-bold">
              #SMKBisa #SMKHebat
            </h3>
          </div>
          <div className="mt-5 text-center text-slate-600 text-xs">
            <p>&copy; {currentYear} E-Learning SMK Negeri 3 Malang</p>
            <p>
              Design with ❤️ by.{' '}
              <a
                href="http://qiffyamuhammad.my.id"
                rel="noopener noreferrer"
                target="_blank"
                className="text-teal-600">
                Qiff Ya Muhammad
              </a>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;
