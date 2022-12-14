/* eslint-disable no-console */
import { FormEvent, useContext, useState } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

// Rombel Classes
export const useAdminAddRombel = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { dispatch } = useContext(MyContext);
  const [message, setMessage] = useState('');

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
      if (response.status >= 200 && response.status < 300) {
        setMessage(result.message);
        dispatch({
          type: Types.AddAssignmentSuccess,
          payload: {
            success: result.success,
          },
        });
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return {
    addAdminRombel,
    message,
  };
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
  const [message, setMessage] = useState('');

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
      if (response.status >= 200 && response.status < 300) {
        setMessage(result.message);
        dispatch({
          type: Types.AddAssignmentSuccess,
          payload: {
            success: result.success,
          },
        });
      } else {
        setMessage(result.message);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return { editAdminRombel, message };
};

// Motivational Word
export const useAdminAddMotivationalWord = () => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { dispatch } = useContext(MyContext);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [resStatus, setResStatus] = useState(421);

  const addAdminMotivationalWord = async (
    title: string,
    body: string,
    from: string,
    active: number,
  ) => {
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
      setResStatus(response.status);
      if (response.status >= 200 && response.status < 300) {
        setMessage(result.message);
        setError(false);
        dispatch({
          type: Types.AddAssignmentSuccess,
          payload: {
            success: result.success,
          },
        });
      } else {
        setMessage(result.message);
        setError(true);
      }
    } catch (e) {
      console.log(e);
      setError(false);
    }
  };

  return { addAdminMotivationalWord, message, error, resStatus };
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

export const useAdminEditMotivational = (id: number) => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const baseURL = process.env.REACT_APP_BASE_URL;
  const { dispatch } = useContext(MyContext);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [resStatus, setResStatus] = useState(421);

  const editAdminMotivational = async (
    title: string,
    body: string,
    from: string,
    active: boolean,
  ) => {
    try {
      const response = await fetch(
        `${baseURL}/api/admin/resources/motivational-words/${id}`,
        {
          method: 'PUT',
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
      setResStatus(response.status);
      if (response.status >= 200 && response.status < 300) {
        setMessage(result.message);
        setError(false);
        dispatch({
          type: Types.AddAssignmentSuccess,
          payload: {
            success: result.success,
          },
        });
      } else {
        setMessage(result.message);
        setError(true);
      }
    } catch (e) {
      console.log(e);
    }
  };

  return { editAdminMotivational, message, error, resStatus };
};
