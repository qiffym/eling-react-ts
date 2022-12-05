/* eslint-disable no-console */
import { FormEvent, useContext } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

// Rombel Classes
export const useAdminAddRombel = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { dispatch } = useContext(MyContext);

  const addAdminRombel = async (
    e: FormEvent<HTMLFormElement>,
    id: number,
    name: string,
    grade: number,
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${baseURL}/api/admin/resources/rombel-classes`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            department_id: id,
            name,
            grade,
          }),
        },
      );
      const result = await response.json();
      dispatch({
        type: Types.AddAssignmentSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return addAdminRombel;
};

export const useAdminDeleteRombel = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const deleteAdminRombel = async (id: number) => {
    try {
      const response = await fetch(
        `${baseURL}/api/admin/resources/rombel-classes/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      const result = await response.json();
      dispatch({
        type: Types.DeleteSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return deleteAdminRombel;
};

export const useAdminEditRombel = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { dispatch } = useContext(MyContext);

  const editAdminRombel = async (
    e: FormEvent<HTMLFormElement>,
    id: number,
    name: string,
    grade: number,
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${baseURL}/api/admin/resources/rombel-classes/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            department_id: id,
            name,
            grade,
          }),
        },
      );
      const result = await response.json();
      dispatch({
        type: Types.AddAssignmentSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return editAdminRombel;
};

// Motivational Word
export const useAdminAddMotivationalWord = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { dispatch } = useContext(MyContext);

  const addAdminMotivationalWord = async (
    e: FormEvent<HTMLFormElement>,
    title: string,
    body: string,
    from: string,
    active: number,
  ) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${baseURL}/api/admin/resources/motivational-words`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            title,
            body,
            from,
            active,
          }),
        },
      );
      const result = await response.json();
      dispatch({
        type: Types.AddAssignmentSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return addAdminMotivationalWord;
};

// Delete Motivational Word
export const useAdminDeleteMotivationalWord = () => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const deleteAdminMotivationalWord = async (id: number) => {
    try {
      const response = await fetch(
        `${baseURL}/api/admin/resources/motivational-words/${id}`,
        {
          method: 'DELETE',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      const result = await response.json();
      dispatch({
        type: Types.DeleteSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
    }
  };

  return deleteAdminMotivationalWord;
};
