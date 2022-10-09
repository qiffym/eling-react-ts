import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { HiPlus } from 'react-icons/hi';
import Loading from '../../../component/loading/Loading';
import CreateClassModal from '../../../component/modal/CreateClassModal';
import Header from '../../../component/header/Header';
import Footer from '../../../component/layout/Footer';
import CardClass from '../../../component/teacher/home/Card';
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
      <section>
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-medium">My Class</h2>
          </div>
          <div>
            <input
              type="search"
              placeholder="Search"
              className="input input-bordered w-96 max-w-xs rounded-full"
            />
          </div>
        </div>
        <hr className="border-t border-gray-300 my-4" />
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
      </section>
      <Footer />
    </>
  );
};

export default DashboardTeacher;
