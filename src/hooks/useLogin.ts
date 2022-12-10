/* eslint-disable no-alert */
/* eslint-disable no-console */
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;

  const authLogin = async (
    e: FormEvent<HTMLFormElement>,
    username: string,
    password: string,
  ) => {
    setLoading(true);
    try {
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
        setLoading(false);
        navigate('/');
      } else {
        setToast(true);
        setMessage('Username atau passsword salah');
        setLoading(false);
        setTimeout(() => setToast(false), 3000);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return { isLoading, authLogin, message, toast };
};

export default useLogin;
