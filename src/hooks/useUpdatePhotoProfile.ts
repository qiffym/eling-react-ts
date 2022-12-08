/* eslint-disable no-console */
import { useContext, useState } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

// Profile Picture
export const useUpdatePhotoProfile = () => {
  const [isLoading, setLoading] = useState(false);
  const [toastPhoto, setToastPhoto] = useState(false);
  const [errorToastPhoto, setErrorToastPhoto] = useState(false);
  const [messagePhoto, setMessagePhoto] = useState<string>();

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
        setToastPhoto(true);
        setMessagePhoto(result.message);
        dispatch({
          type: Types.UpdateSuccess,
          payload: {
            success: result.success,
          },
        });
        setTimeout(() => setToastPhoto(false), 5000);
      } else {
        setErrorToastPhoto(true);
        console.log(errorToastPhoto);

        setMessagePhoto(result.error);
        setTimeout(() => setErrorToastPhoto(false), 5000);
      }
    } catch (error) {
      console.log(error);
      setToastPhoto(false);
    }
  };
  return {
    updatePhotoProfile,
    messagePhoto,
    isLoading,
    toastPhoto,
    errorToastPhoto,
  };
};
