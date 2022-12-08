/* eslint-disable no-console */
/* eslint-disable no-alert */
/* eslint-disable react-hooks/exhaustive-deps */
import { useCallback, useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../context/context';
import useLogout from './useLogout';

export const useFetch = (url: string) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { state } = useContext(MyContext);
  const navigate = useNavigate();

  const authLogout = useLogout();

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

      if (response.status === 401) {
        authLogout();
        localStorage.clear();
        window.location.reload();
      }

      if (response.status === 404) {
        alert(
          'Silahkan hubungi guru pengajar untuk dapat mengerjakan tugas ini.',
        );
        navigate(-1);
        window.location.reload();
      }
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
    state.deleteContentSuccess.success,
    state.replyCommentSuccess.success,
    state.editForumSuccess.success,
    state.addSubmissionSuccess.success,
    state.addAssignmentSuccess.success,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    data,
  };
};
