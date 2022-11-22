/* eslint-disable no-console */
import { FormEvent, useState } from 'react';

const useUpdateProfile = (id: number) => {
  const [isLoading, setLoading] = useState(false);
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
    setLoading(true);
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
      // navigate(-1);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    isLoading,
    updateProfile,
  };
};

export default useUpdateProfile;
