/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';
import { UserType } from '../types/user-type';
import useLogout from './useLogout';

export const useMe = () => {
  const [profile, setProfile] = useState<UserType>();
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { state } = useContext(MyContext);

  const authLogout = useLogout();

  const fetchProfile = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/api/me`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const result = await response.json();
      setProfile(result.data);
      setLoading(false);

      if (response.status === 401) {
        authLogout();
        localStorage.clear();
        window.location.reload();
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [baseURL, user.token, state.updateSuccess.success]);

  useEffect(() => {
    fetchProfile();
  }, [fetchProfile]);

  return {
    isLoading,
    profile,
  };
};

// Profile Picture
export const useUpdatePhotoProfile = () => {
  const [isLoading, setLoading] = useState(false);
  const [toast, setToast] = useState(false);
  const [errorToast, setErrorToast] = useState(false);
  const [message, setMessage] = useState('');
  const [errMessage, setErrMessage] = useState('');

  const baseURL = process.env.REACT_APP_BASE_URL;
  const { dispatch } = useContext(MyContext);

  const user = JSON.parse(localStorage.getItem('user') || '');

  const updatePhotoProfile = async (file: any) => {
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('_method', 'PATCH');

    try {
      setLoading(true);
      const response = await fetch(`${baseURL}/api/profile/update-avatar`, {
        method: 'POST',
        headers: {
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
        body: formData,
      });
      const result = await response.json();
      console.log(result);
      if (response.status >= 200 && response.status < 300) {
        setToast(true);
        setMessage(result.message);
        dispatch({
          type: Types.UpdateSuccess,
          payload: {
            success: result.success,
          },
        });
        setTimeout(() => setToast(false), 5000);
      } else {
        setErrorToast(true);
        setErrMessage(result.error);
        setTimeout(() => setErrorToast(false), 5000);
      }
    } catch (error) {
      console.log(error);
      setToast(false);
    }
  };
  return {
    isLoading,
    toast,
    errorToast,
    message,
    errMessage,
    updatePhotoProfile,
  };
};
