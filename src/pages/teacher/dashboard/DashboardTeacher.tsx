import React, { useEffect } from 'react';
import { HiPlus } from 'react-icons/hi';
import Modal from '../../../component/modal/Modal';
import CardClass from '../../../component/teacher/home/Card';
import { useFetch } from '../../../hooks/useFetch';

const DashboardTeacher = () => {
  const { data } = useFetch('/api/teacher/online-classes');

  return (
    <>
      <label
        htmlFor="my-modal-3"
        className="btn flex w-14 h-14 btn-primary rounded-full fixed z-10 right-5 bottom-5 items-center content-center justify-center drop-shadow-xl"
      >
        <HiPlus className="text-xl" />
      </label>
      <Modal />
      <CardClass classes={data} />
    </>
  );
};

export default DashboardTeacher;
