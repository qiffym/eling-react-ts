/* eslint-disable no-console */
/* eslint-disable-next-line react-hooks/exhaustive-deps */
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
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  }, [
    baseURL,
    user.token,
    state.createClassSuccess.success,
    state.updateSuccess.success,
  ]);

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
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    isLoading,
    createClass,
  };
};

export const useEditClass = () => {
  const [loadingClass, setLoadingClass] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const updateClass = async (
    e: FormEvent<HTMLFormElement>,
    id: number | undefined,
    input: {
      name: string;
      description: string;
      rombel_class_id: number;
    },
  ) => {
    try {
      e.preventDefault();
      setLoadingClass(true);
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${id}`,
        {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            name: input.name,
            description: input.description,
            rombel_class_id: input.rombel_class_id,
          }),
        },
      );
      const result = await response.json();
      console.log(result.success);
      dispatch({
        type: Types.DeleteSuccess,
        payload: {
          success: result.success,
        },
      });
      dispatch({
        type: Types.UpdateSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
      setLoadingClass(false);
    }
  };

  return {
    loadingClass,
    updateClass,
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
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    isLoading,
    addContent,
  };
};

export const useFetchMaterial = (classId: number, contentId?: number) => {
  const [data, setData] = useState<any>([]);
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { state } = useContext(MyContext);

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${classId}/contents/${contentId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      const result = await response.json();
      setData(result.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [
    baseURL,
    classId,
    contentId,
    user.token,
    state.addMaterialSuccess.success,
    state.deleteMaterialSuccess.success,
  ]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    data,
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
        type: Types.AddMaterialSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    isLoading,
    addMaterial,
  };
};

export const useFetchForum = (classId: number, contentId?: number) => {
  const [forumData, setForumData] = useState<any>([]);
  const [loadingForum, setLoadingForum] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { state } = useContext(MyContext);

  const fetchForum = useCallback(async () => {
    setLoadingForum(true);
    try {
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${classId}/contents/${contentId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      const result = await response.json();
      setForumData(result.data);
      setLoadingForum(false);
    } catch (e) {
      console.log(e);
      setLoadingForum(false);
    }
  }, [baseURL, classId, contentId, user.token, state.addForumSuccess.success]);

  useEffect(() => {
    fetchForum();
  }, [fetchForum]);

  return {
    loadingForum,
    forumData,
  };
};

export const useAddForum = () => {
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const addForum = async (
    e: FormEvent<HTMLFormElement>,
    idClasses: number,
    idContent: number,
    input: {
      topic: string;
      description: string;
    },
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${idClasses}/contents/${idContent}/forums`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            topic: input.topic,
            description: input.description,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.AddForumSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    isLoading,
    addForum,
  };
};

export const useFetchAssignment = (classId: number, contentId?: number) => {
  const [assignmentData, setAssignmentData] = useState<any>([]);
  const [loadingAssignment, setLoadingAssignment] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { state } = useContext(MyContext);

  const fetchAssignment = useCallback(async () => {
    setLoadingAssignment(true);
    try {
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${classId}/contents/${contentId}`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      );
      const result = await response.json();
      setAssignmentData(result.data);
      setLoadingAssignment(false);
    } catch (e) {
      console.log(e);
      setLoadingAssignment(false);
    }
  }, [
    baseURL,
    classId,
    contentId,
    user.token,
    state.addAssignmentSuccess.success,
  ]);

  useEffect(() => {
    fetchAssignment();
  }, [fetchAssignment]);

  return {
    loadingAssignment,
    assignmentData,
  };
};

export const useAddAssignment = () => {
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const addAssignment = async (
    e: FormEvent<HTMLFormElement>,
    idClasses: number,
    idContent: number,
    input: {
      title: string;
      description: string;
      deadline: string;
    },
  ) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${idClasses}/contents/${idContent}/assignments`,
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
            deadline: input.deadline,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.AddAssignmentSuccess,
        payload: {
          success: result.success,
        },
      });
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  return {
    isLoading,
    addAssignment,
  };
};
