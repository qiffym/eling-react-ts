import { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';
import { ClassesType } from '../types/class-type';
import { Types } from '../types/reducer-type';

export const useClasses = () => {
  const [classList, setClassList] = useState<ClassesType[]>();
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { state, dispatch } = useContext(MyContext);

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
  }, [baseURL, user.token, state.createClassSuccess.success]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    classList,
  };
};

export const useCreateClass = () => {
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const createClass = async (
    e: FormEvent<HTMLFormElement>,
    input: {
      rombel_class_id: number;
      name: string;
      description: string;
    },
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(`${baseURL}/api/teacher/online-classes`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
          'Access-Control-Allow-Origin': '*',
          Authorization: `Bearer ${user.token}`,
        },
        body: JSON.stringify({
          rombel_class_id: input.rombel_class_id,
          name: input.name,
          description: input.description,
        }),
      });
      const result = await response.json();
      dispatch({
        type: Types.CreateClassSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return {
    isLoading,
    createClass,
  };
};

export const useAddContent = () => {
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const addContent = async (
    e: FormEvent<HTMLFormElement>,
    idClasses: number,
    input: {
      title: string;
      description: string;
    },
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${idClasses}/contents`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            title: input.title,
            description: input.description,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.AddContentSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return {
    isLoading,
    addContent,
  };
};

export const useAddMaterial = () => {
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const addMaterial = async (
    e: FormEvent<HTMLFormElement>,
    idClasses: number,
    idContent: number,
    input: {
      title: string;
      file: any;
    },
  ) => {
    e.preventDefault();
    const data = new FormData();
    data.append('title', input.title);
    data.append('file', input.file);
    setLoading(true);

    console.log(data.entries());

    try {
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${idClasses}/contents/${idContent}/materials`,
        {
          method: 'POST',
          body: data,
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.AddContentSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  };

  return {
    isLoading,
    addMaterial,
  };
};
