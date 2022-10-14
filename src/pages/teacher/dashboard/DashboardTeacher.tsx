import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { HiPlus } from 'react-icons/hi';
import Loading from '../../../component/loading/Loading';
import CreateClassModal from '../../../component/modal/CreateClassModal';
import Header from '../../../component/header/Header';
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
          <div className="form-control">
            <div className="input-group">
              <input
                type="search"
                placeholder="Search…"
                className="input input-bordered w-72"
              />
              <button className="btn btn-square">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
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
    </>
  );
};

export default DashboardTeacher;
