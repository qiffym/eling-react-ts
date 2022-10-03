import React from 'react';
import { HiPlus } from 'react-icons/hi';
import Loading from '../../../component/loading/Loading';

import CardClass from '../../../component/teacher/home/Card';
import useClasses from '../../../hooks/useClasses';

const DashboardTeacher = () => {
  const { isLoading, classList } = useClasses();

  return (
    <>
      <label
        htmlFor="my-modal-3"
        className="btn flex w-14 h-14 btn-primary rounded-full fixed z-10 right-5 bottom-5 items-center content-center justify-center drop-shadow-md"
      >
        <HiPlus className="text-xl" />
      </label>

      {isLoading ? (
        <Loading />
      ) : classList?.length ? (
        <CardClass classes={classList} />
      ) : (
        <div className="flex h-[40rem]">
          <div className="m-auto flex flex-col">
            <button className="btn btn-ghost font-extrabold text-5xl">
              Tambah Kelas
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default DashboardTeacher;
