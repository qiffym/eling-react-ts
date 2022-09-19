import { useCallback, useEffect, useState } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');

  const fetchData = useCallback(async () => {
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
  }, [baseURL, url, user.token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    data,
  };
};
