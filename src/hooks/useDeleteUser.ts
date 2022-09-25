import { useContext } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

// /admin/resources/users/:id

export const useDeleteUser = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const deleteUser = async (id: number) => {
    try {
      const response = await fetch(
        `${baseURL}/api/admin/resources/users/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        }
      );
      const result = await response.json();
      dispatch({
        type: Types.DeleteSuccess,
        payload: {
          success: result.success,
        },
      });
      console.log(result);
    } catch (e) {
      console.log(e);
    }
  };

  return deleteUser;
};
