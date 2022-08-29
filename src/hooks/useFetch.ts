import { useState } from 'react';

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const baseURL = process.env.REACT_APP_BASE_URL;

  const fetchData = async (body: any) => {
    const response = await fetch(`${baseURL}${url}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': '*',
      },
    });
    const result = await response.json();
    setData(result.data);
  };

  return {
    fetchData,
    data,
  };
};
