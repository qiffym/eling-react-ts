import React, { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { FaUserAlt, FaLock } from 'react-icons/fa';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
import LoadingButton from '../../components/loading/LoadingButton';
import useLogin from '../../hooks/useLogin';
import logosmk from '../../assets/images/smkn3mlg150x150.png';
import ToastError from '../../components/toast/ToastError';

const Login = () => {
  const currentYear = new Date().getFullYear();
  const { isLoading, authLogin, message, toast } = useLogin();
  const [disable, setDisable] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
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
      <Helmet>
        <title>Login</title>
      </Helmet>
      <section
        id="login"
        className="bg-gradient-to-r from-[#eaea72] to-yellow-400 min-h-screen">
        <div className="container mx-auto pt-16">
          <div className="grid grid-cols-none md:grid-cols-3 px-10 text-center max-h-screen xl:w-full xl:px-60">
            {/* Logo Sekolah */}
            <div className="hidden md:block bg-white rounded-tl-2xl rounded-bl-2xl shadow-lg">
              <img
                src={logosmk}
                alt="logo_smk"
                width={200}
                className="mx-auto my-10"
              />
            </div>

            {/* Login Form */}
            <div className="md:col-span-2 shadow-xl">
              <div className="bg-slate-200 rounded-2xl sm:rounded-none sm:rounded-tr-2xl sm:rounded-br-2xl">
                <div className="text-left text-sm font-bold pl-5 pt-2">
                  <span className="text-teal-600">Smeka</span>Negama
                </div>
                <div className="py-10">
                  <div className="md:hidden">
                    <img
                      src={logosmk}
                      alt="logo_smk"
                      className="mx-auto mb-3"
                    />
                  </div>
                  <h2 className="text-4xl font-bold text-teal-600">Masuk</h2>
                  <h3 className="text-lg font-semibold">
                    e-Learning SMK Negeri 3 Malang
                  </h3>
                  <div className="border-t-2 w-16 border-teal-600 inline-block mb-2" />
                  <form
                    onSubmit={(e) =>
                      authLogin(e, input.username, input.password)
                    }>
                    <div className="flex flex-col items-center">
                      {/* Username */}
                      <div className="form-control mb-2">
                        <label className="input-group">
                          <span className="bg-slate-100 -mr-4">
                            <FaUserAlt className="text-gray-500" />
                          </span>
                          <input
                            type="text"
                            placeholder="username / email"
                            className="input input-bordered bg-slate-100 focus:outline-none border-slate-100 md:w-[255px]"
                            name="username"
                            id="username"
                            value={input.username}
                            onChange={handleChange}
                          />
                        </label>
                      </div>

                      {/* Password */}
                      <div className="form-control">
                        <label className="input-group">
                          <span className="bg-slate-100 -mr-4">
                            <FaLock className="text-gray-500" />
                          </span>
                          <input
                            type={showPassword ? 'text' : 'password'}
                            placeholder="password"
                            className="input input-bordered bg-slate-100 focus:outline-none border-slate-100 md:w-[205px]"
                            name="password"
                            id="password"
                            value={input.password}
                            onChange={handleChange}
                          />
                          <span className="bg-slate-100 hidden md:flex">
                            <button
                              type="button"
                              onClick={() => setShowPassword(!showPassword)}>
                              {showPassword ? (
                                <AiOutlineEyeInvisible />
                              ) : (
                                <AiOutlineEye />
                              )}
                            </button>
                          </span>
                        </label>
                      </div>

                      {/* Remember Me & Forget Password */}
                      <div className="w-72 hidden justify-between mb-5 mt-1">
                        <label
                          htmlFor="remember"
                          className="flex items-center text-xs text-slate-500 hover:text-slate-700">
                          <input
                            type="checkbox"
                            name="remember"
                            id="remember"
                            className="mr-1"
                            // onChange={handleChange}
                          />{' '}
                          Ingat saya
                        </label>
                        <a
                          href="#!"
                          className="text-xs text-slate-500 hover:text-slate-700">
                          Lupa password?
                        </a>
                      </div>

                      {/* Button Submit */}
                      <button
                        disabled={disable}
                        type="submit"
                        className="btn w-11/12 md:w-72 bg-teal-600 border-slate-400 mt-5">
                        {isLoading ? <LoadingButton /> : 'Masuk'}
                      </button>
                    </div>
                  </form>

                  {/* Footer */}
                  <div className="border-t-2 w-72 border-slate-400 inline-block mb-2" />
                  <br />
                  <div className="inline-block">
                    <h3 className="italic font-semibold text-slate-500 hover:text-slate-700 hover:font-bold">
                      #SMKBisa #SMKHebat
                    </h3>
                  </div>
                  <div className="mt-5 text-center text-slate-500 text-xs mr-5">
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
            </div>
          </div>
        </div>

        {toast ? (
          <div className="px-5 z-50 mb-24 flex justify-center items-center">
            <ToastError desc={message} />
          </div>
        ) : null}
      </section>
    </>
  );
};

export default Login;
