/* eslint-disable no-console */
import { FormEvent, useContext, useState } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

const useUpdateAssignment = (idClasses: number, idContent: number) => {
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const updateAssignment = async (
    e: FormEvent<HTMLFormElement>,
    id: number,
    input: {
      title: string;
      description: string;
      deadline: any;
    },
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${idClasses}/contents/${idContent}/assignments/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            title: input.title,
            description: input.description,
            deadline: input.deadline,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.AddAssignmentSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    isLoading,
    updateAssignment,
  };
};

export default useUpdateAssignment;
