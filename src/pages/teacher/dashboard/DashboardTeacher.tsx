import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { HiPlus } from 'react-icons/hi';
import Loading from '../../../component/loading/Loading';
import CreateClassModal from '../../../component/modal/CreateClassModal';
import Modal from '../../../component/modal/Modal';
import Header from '../../../component/header/Header';

import CardClass from '../../../component/teacher/home/Card';
import { MyContext } from '../../../context/context';
import { useClasses } from '../../../hooks/useClasses';

const DashboardTeacher = () => {
  const { isLoading, classList } = useClasses();
  const [openModal, setOpenModal] = useState(false);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Header>Dashboard</Header>
      <button
        onClick={() => setOpenModal(true)}
        className="btn flex w-14 h-14 btn-primary rounded-full fixed z-10 right-5 bottom-5 items-center content-center justify-center drop-shadow-md">
        <HiPlus className="text-xl" />
      </button>

      {isLoading ? (
        <Loading />
      ) : classList?.length ? (
        <CardClass classes={classList} />
      ) : (
        <div className="flex h-[40rem]">
          <div className="m-auto flex flex-col">
            <button
              onClick={() => setOpenModal(true)}
              className="btn btn-ghost font-extrabold text-5xl">
              Tambah Kelas
            </button>
          </div>
        </div>
      )}
      {openModal ? (
        <CreateClassModal
          actionSave={() => {
            setOpenModal(false);
          }}
          modalAction={() => setOpenModal(false)}
        />
      ) : null}
    </>
  );
};

export default DashboardTeacher;
