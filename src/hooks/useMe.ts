/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';
import { UserType } from '../types/user-type';

export const useMe = () => {
  const [profile, setProfile] = useState<UserType>();
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { state } = useContext(MyContext);

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
