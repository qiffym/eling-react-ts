/* eslint-disable no-console */
import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useUpdateUser = () => {
  const [isLoading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [message, setMessage] = useState('');

  const baseURL = process.env.REACT_APP_BASE_URL;
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user') || '');

  const updateUser = async (
    e: FormEvent<HTMLFormElement>,
    id: number,
    input: {
      name: string;
      email: string;
      username: string;
      password: string | undefined;
      confirm_password: string | undefined;
      gender: string;
      birthday: string;
      status: number;
      address: string;
      telpon: string;
      religion: string;
    },
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/admin/resources/users/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            name: input.name,
            email: input.email,
            username: input.username,
            password: input?.password,
            confirm_password: input?.confirm_password,
            gender: input.gender,
            birthday: input.birthday,
            status: input.status,
            address: input.address,
            telpon: input.telpon,
            religion: input.religion,
          }),
        },
      );
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
    updateUser,
  };
};

export default useUpdateUser;
