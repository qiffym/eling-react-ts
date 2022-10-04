import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useLogin = () => {
  const [isLoading, setLoading] = useState(false);
  const navigate = useNavigate();
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
        alert('Username atau passsword salah');
        setLoading(false);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return { isLoading, authLogin };
};

export default useLogin;
