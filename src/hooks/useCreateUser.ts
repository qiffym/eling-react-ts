/* eslint-disable no-console */
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCreateUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [message, setMessage] = useState('');

  const baseURL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '');

  const createUser = async (
    e: FormEvent<HTMLFormElement>,
    input: {
      role: number;
      name: string;
      gender: string;
      email: string;
      username: string;
      password: string;
    },
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/api/admin/resources/users`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          role: input.role,
          name: input.name,
          gender: input.gender,
          email: input.email,
          username: input.username,
          password: input.password,
        }),
      });
      const result = await response.json();
      if (response.status >= 200 && response.status < 300) {
        setToast(true);
        setMessage(result.message);
        setTimeout(() => setToast(false), 3000);
        // navigate(`/resources/users/${}`);
        navigate(-1);
      } else {
        setErrorToast(true);
        setMessage(result.message);
        setTimeout(() => setErrorToast(false), 3000);
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setToast(false);
      setLoading(false);
    }
  };

  return {
    toast,
    errorToast,
    message,
    isLoading,
    createUser,
  };
};
