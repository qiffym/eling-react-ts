/* eslint-disable no-console */
import { useContext, useState } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

// Profile Picture
export const useUpdatePhotoProfile = () => {
  const [isLoading, setLoading] = useState(false);
  const [messagePhoto, setMessagePhoto] = useState('');
  const [photoToast, setPhotoToast] = useState(false);
  const [photoToastError, setPhotoToastError] = useState(false);
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
      if (response.status >= 200 && response.status < 300) {
        setPhotoToast(true);
        setMessagePhoto(result.message);
        dispatch({
          type: Types.UpdateSuccess,
          payload: {
            success: result.success,
          },
        });
        setTimeout(() => setPhotoToast(false), 5000);
      } else {
        setPhotoToastError(true);
        setMessagePhoto(result.error);
        setTimeout(() => setPhotoToastError(false), 5000);
      }
    } catch (error) {
      console.log(error);
      setPhotoToast(false);
    }
  };
  return {
    updatePhotoProfile,
    messagePhoto,
    isLoading,
    photoToast,
    photoToastError,
  };
};
