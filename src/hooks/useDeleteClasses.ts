/* eslint-disable no-console */

import { useContext } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

export const useDeleteMaterial = (url: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const deleteMaterial = async (id: number) => {
    try {
      const response = await fetch(`${baseURL}${url}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.DeleteMaterialSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return deleteMaterial;
};

export const useDeleteClass = (url: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const deleteClass = async (id: number) => {
    try {
      const response = await fetch(`${baseURL}${url}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.DeleteClassSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return deleteClass;
};

export const useDeleteContent = (url: string) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const deleteContent = async (id: number) => {
    try {
      const response = await fetch(`${baseURL}${url}${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.DeleteContentSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (e) {
      console.log(e);
    }
  };

  return deleteContent;
};
