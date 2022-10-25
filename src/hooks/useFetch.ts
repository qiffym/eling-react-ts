/* eslint-disable no-console */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { state } = useContext(MyContext);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}${url}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const result = await response.json();
      setData(result.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [
    baseURL,
    url,
    user.token,
    state.deleteSuccess.success,
    state.addContentSuccess.success,
    state.updateSuccess.success,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    data,
  };
};
