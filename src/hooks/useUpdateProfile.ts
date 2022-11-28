/* eslint-disable no-console */
import { FormEvent, useState } from 'react';

const useUpdateProfile = (id: number) => {
  const [toast, setToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [message, setMessage] = useState('');
  const baseURL = process.env.REACT_APP_BASE_URL;

  const user = JSON.parse(localStorage.getItem('user') || '');

  const updateProfile = async (
    e: FormEvent<HTMLFormElement>,
    input: {
      role: number;
      name: string;
      username: string;
      email: string;
      gender: string;
      birthday: string;
      religion: string;
      address: string;
      telpon: string;
      nik?: string;
      nip?: string;
      nis?: string;
      nisn?: string;
      rombel?: number;
    },
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(`${baseURL}/api/profile/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          role: input.role,
          name: input.name,
          email: input.email,
          username: input.username,
          gender: input.gender,
          birthday: input.birthday,
          religion: input.religion,
          address: input.address,
          telpon: input.telpon,
          nik: input?.nik,
          nip: input?.nip,
          nis: input?.nis,
          nisn: input?.nisn,
          rombel: input?.rombel,
        }),
      });
      const result = await response.json();
      console.log(result);
      if (response.status >= 200 && response.status < 300) {
        setToast(true);
        setMessage(result.message);
        setTimeout(() => setToast(false), 3000);
      } else {
        setErrorToast(true);
        setMessage(result.message);
        setTimeout(() => setErrorToast(false), 3000);
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
    updateProfile,
  };
};

export default useUpdateProfile;
