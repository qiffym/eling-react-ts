import React, { useContext, useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';
import Loading from '../../../component/loading/Loading';
import Modal from '../../../component/modal/Modal';
import CardClass from '../../../component/teacher/home/Card';
import { MyContext } from '../../../context/context';
import { useFetch } from '../../../hooks/useFetch';
import { Types } from '../../../types/reducer-type';

const DashboardTeacher = () => {
  const { dispatch } = useContext(MyContext);
  const { isLoading, data } = useFetch('/api/teacher/online-classes');

  useEffect(() => {
    dispatch({
      type: Types.Classes,
      payload: data,
    });
  }, [dispatch, data]);

  return (
    <>
      <label
        htmlFor="my-modal-3"
        className="btn flex w-14 h-14 btn-primary rounded-full fixed z-10 right-5 bottom-5 items-center content-center justify-center drop-shadow-md"
      >
        <HiPlus className="text-xl" />
      </label>
      <Modal />

      {isLoading ? <Loading /> : <CardClass classes={data} />}
    </>
  );
};

export default DashboardTeacher;
