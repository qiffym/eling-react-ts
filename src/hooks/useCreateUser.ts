import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export const useCreateUser = () => {
  const [isLoading, setLoading] = useState(false);
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
    }
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
      console.log(result);
      navigate(-1);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return {
    isLoading,
    createUser,
  };
};
