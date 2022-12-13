/* eslint-disable no-console */
import { FormEvent, useCallback, useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';
import {
  StudentMotivationalWord,
  StudentUpcomingAssignmentType,
} from '../types/student-type';

export const useFetchMotivationalWord = () => {
  const [motivationalWord, setMotivationalWord] =
    useState<StudentMotivationalWord>();
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/student/random-motivational-word`,
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
      setMotivationalWord(result.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [baseURL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    motivationalWord,
  };
};

export const useFetchUpcomingAssignment = () => {
  const [upcomingAssignment, setUpcomingAssignment] = useState<
    StudentUpcomingAssignmentType[]
  >([]);
  const [isLoading, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');

  const fetchData = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(
        `${baseURL}/api/student/upcoming-assignments`,
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
      setUpcomingAssignment(result.data);
      setLoading(false);
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }, [baseURL]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return {
    isLoading,
    upcomingAssignment,
  };
};

export const useStudentComment = () => {
  const [isLoadingComment, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const addComment = async (
    e: FormEvent<HTMLFormElement>,
    classID: number,
    contentID: number,
    forumsID: number,
    input: {
      comment: string;
    },
  ) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(
        `${baseURL}/api/student/my-classes/${classID}/contents/${contentID}/forums/${forumsID}/comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            comment: input.comment,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.ReplyCommentSuccess,
        payload: {
          success: result.success,
        },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    isLoadingComment,
    addComment,
  };
};

export const useStudentReplyComment = () => {
  const [isLoadingReply, setLoading] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const addReplyComment = async (
    e: FormEvent<HTMLFormElement>,
    classID: number,
    contentID: number,
    forumsID: number,
    commentID: number,
    input: {
      comment: string;
    },
  ) => {
    try {
      e.preventDefault();
      setLoading(true);
      const response = await fetch(
        `${baseURL}/api/student/my-classes/${classID}/contents/${contentID}/forums/${forumsID}/comments/${commentID}/sub-comments`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            comment: input.comment,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
      dispatch({
        type: Types.ReplyCommentSuccess,
        payload: {
          success: result.success,
        },
      });
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };
  return {
    isLoadingReply,
    addReplyComment,
  };
};

export const usePostSubmission = (assignmentID: number) => {
  const [isLoading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [toast, setToast] = useState(false);
  const [toastError, setToastError] = useState(false);
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');
  const { dispatch } = useContext(MyContext);

  const postSubmission = async (file: any) => {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('_method', 'PUT');

    try {
      setLoading(true);
      const response = await fetch(
        `${baseURL}/api/student/submissions/${assignmentID}`,
        {
          method: 'POST',
          headers: {
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: formData,
        },
      );
      const result = await response.json();
      if (response.status >= 200 && response.status < 300) {
        setToast(true);
        setMessage(result.message);
        dispatch({
          type: Types.AddSubmissionSuccess,
          payload: {
            success: result.success,
          },
        });
        setTimeout(() => setToast(false), 5000);
      } else {
        setToastError(true);
        setMessage(result.error);
        setTimeout(() => setToastError(false), 5000);
      }
    } catch (error) {
      console.log(error);
      setToast(false);
      setToastError(false);
    }
  };
  return {
    isLoading,
    postSubmission,
    toast,
    toastError,
    message,
  };
};
