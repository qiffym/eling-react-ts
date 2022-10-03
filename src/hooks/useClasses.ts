import { useCallback, useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';
import { Classes } from '../types/class-type';
import { Types } from '../types/reducer-type';

const useClasses = () => {
  const [classList, setClassList] = useState<Classes[]>();
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/api/teacher/online-classes`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
      });
      const result = await response.json();
      setClassList(result.data);
      dispatch({
        type: Types.Classes,
        payload: {
          classList: result.data,
        },
      });
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [baseURL, user.token]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    classList,
  };
};

export default useClasses;
