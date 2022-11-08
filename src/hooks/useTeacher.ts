/* eslint-disable no-console */
import { FormEvent, useContext, useState } from 'react';
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
