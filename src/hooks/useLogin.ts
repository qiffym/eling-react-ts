import { FormEvent, useContext } from 'react';
import { useNavigate } from 'react-router-dom';

import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

const useLogin = () => {
  const { dispatch } = useContext(MyContext);
  const navigate = useNavigate();
  const baseURL = process.env.REACT_APP_BASE_URL;

  const authLogin = async (
    e: FormEvent<HTMLFormElement>,
    username: string,
    password: string
  ) => {
    e.preventDefault();
    const response = await fetch(`${baseURL}/api/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const result = await response.json();
    if (response.status >= 200 && response.status < 300) {
      localStorage.setItem('token', result.data.token);
      localStorage.setItem('user', JSON.stringify(result.data));
      navigate('/');
    } else {
      alert('Username dan passsword salah');
    }
  };

  return authLogin;
};

export default useLogin;
