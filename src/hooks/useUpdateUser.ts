import { FormEvent, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useUpdateUser = () => {
  const [isLoading, setLoading] = useState(false);
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
      console.log(result);
      navigate(-1);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return {
    isLoading,
    updateUser,
  };
};

export default useUpdateUser;
