/* eslint-disable no-console */
import { FormEvent, useState } from 'react';

const useUpdatePassword = () => {
  const [toast, setToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [message, setMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');
  const baseURL = process.env.REACT_APP_BASE_URL;

  const user = JSON.parse(localStorage.getItem('user') || '');

  const updatePassword = async (
    e: FormEvent<HTMLFormElement>,
    password: string,
    new_password: string,
    new_password_confirmation: string,
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/profile/update-password`, {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          password,
          new_password,
          new_password_confirmation,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (response.status >= 200 && response.status < 300) {
        setToast(true);
        setMessage(result.message);
        setTimeout(() => setToast(false), 3000);
        localStorage.clear();
        window.location.reload();
      } else {
        setErrorToast(true);
        setErrMessage(result.error);
      }
    } catch (error) {
      console.log(error);
      setToast(false);
    }
  };

  return {
    toast,
    errorToast,
    message,
    errMessage,
    updatePassword,
  };
};

export default useUpdatePassword;
