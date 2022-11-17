/* eslint-disable no-console */
import { FormEvent, useContext, useEffect, useState } from 'react';
import { MyContext } from '../context/context';
import { Types } from '../types/reducer-type';

export const useTeacherComment = () => {
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
        `${baseURL}/api/teacher/online-classes/${classID}/contents/${contentID}/forums/${forumsID}/comments`,
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
    } catch (error) {
      console.log(error);
    }
  };
  return {
    isLoadingComment,
    addComment,
  };
};

export const useTeacherReplyComment = () => {
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
        `${baseURL}/api/teacher/online-classes/${classID}/contents/${contentID}/forums/${forumsID}/comments/${commentID}/sub-comments`,
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
    } catch (error) {
      console.log(error);
    }
  };
  return {
    isLoadingReply,
    addReplyComment,
  };
};

export const useGradingAssignment = (
  classID: number,
  contentID: number,
  assignmentID: number,
) => {
  const [unsubmitted, setUnsubmitted] = useState<any>();
  const [ungrading, setUngrading] = useState<any>();
  const [graded, setGraded] = useState<any>();
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');

  useEffect(() => {
    Promise.all([
      fetch(
        `${baseURL}/api/teacher/online-classes/${classID}/contents/${contentID}/assignments/${assignmentID}/unsubmitted`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      ),
      fetch(
        `${baseURL}/api/teacher/online-classes/${classID}/contents/${contentID}/assignments/${assignmentID}/ungrading`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      ),
      fetch(
        `${baseURL}/api/teacher/online-classes/${classID}/contents/${contentID}/assignments/${assignmentID}/graded`,
        {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
        },
      ),
    ]).then(([resUnsubmitted, resUngrading, resGraded]) =>
      Promise.all([
        resUnsubmitted.json(),
        resUngrading.json(),
        resGraded.json(),
      ]).then(([dataUnsubmitted, dataUngrading, dataGraded]) => {
        setUnsubmitted(dataUnsubmitted);
        setUngrading(dataUngrading);
        setGraded(dataGraded);
      }),
    );
  }, [baseURL, user.token]);

  return {
    ungrading,
    unsubmitted,
    graded,
  };
};

export const useGrading = (
  classID: number,
  contentID: number,
  assignmentID: number,
) => {
  const baseURL = process.env.REACT_APP_BASE_URL;
  const user = JSON.parse(localStorage.getItem('user') || '');

  const addGrade = async (
    e: FormEvent<HTMLFormElement>,
    input: {
      studentID: number;
      score: number;
    },
  ) => {
    try {
      e.preventDefault();
      const response = await fetch(
        `${baseURL}/api/teacher/online-classes/${classID}/contents/${contentID}/assignments/${assignmentID}/grade`,
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json',
            'Access-Control-Allow-Origin': '*',
            Authorization: `Bearer ${user.token}`,
          },
          body: JSON.stringify({
            student_id: input.studentID,
            score: input.score,
          }),
        },
      );
      const result = await response.json();
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  return addGrade;
};
