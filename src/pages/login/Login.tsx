import React, { ChangeEvent, useEffect, useState } from 'react';
import useLogin from '../../hooks/useLogin';

const Login = () => {
  const authLogin = useLogin();
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
    } else {
      setDisable(false);
    }
  }, [input]);

  return (
    <div className="flex w-screen h-screen">
      <div className="m-auto w-full flex flex-col justify-center content-center items-center">
        <form onSubmit={(e) => authLogin(e, input.username, input.password)}>
          <input
            type="text"
            placeholder="Username / email"
            name="username"
            className="input input-bordered w-full max-w-sm"
            value={input.username}
            onChange={handleChange}
          />

          <input
            type="password"
            placeholder="Password"
            name="password"
            className="input input-bordered w-full max-w-sm mt-2 mb-3"
            value={input.password}
            onChange={handleChange}
          />
          <button disabled={disable} className="btn w-full max-w-sm">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
