/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { HiPlus } from 'react-icons/hi';
import Loading from '../../../component/loading/Loading';
import CreateClassModal from '../../../component/modal/CreateClassModal';
import Header from '../../../component/header/Header';
import CardClass from '../../../component/teacher/home/Card';
import { useClasses } from '../../../hooks/useClasses';
import { LoginType } from '../../../types/context-type';

const DashboardTeacher = () => {
  const { isLoading, classList } = useClasses();
  const [openModal, setOpenModal] = useState(false);
  const user: LoginType = JSON.parse(localStorage.getItem('user') || '');

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Header>Dashboard</Header>
      <div className="px-3 flex flex-row justify-between sm:hidden">
        <div className="flex flex-row items-center space-x-3">
          <div className="avatar ">
            <div className="w-12 rounded-full ring-2 ring-slate-300 ring-offset-base-100 ring-offset-1">
              <img src={user.user.avatar} alt={user.user.name} />
            </div>
          </div>
          <div className="flex flex-col">
            <h1 className="font-medium text-base">{user.user.name}</h1>
            <h3 className="font-medium text-base">{user.user.role}</h3>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setOpenModal(true)}
          className="btn btn-ghost btn-circle sm:hidden">
          <HiPlus className="text-2xl" />
        </button>
      </div>
      <>
        <div className="flex flex-col space-y-3 px-3 py-3 sm:py-0 sm:space-y-0 sm:px-3 sm:flex-row sm:justify-between sm:items-center">
          <div>
            <h2 className="hidden sm:block text-2xl font-medium">My Class</h2>
          </div>
          <div className="form-control">
            <div className="input-group sm:px-0">
              <input
                type="search"
                placeholder="Search…"
                className="input input-bordered w-full sm:w-72"
              />
              <button type="button" className="btn btn-square">
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
          type="button"
          onClick={() => setOpenModal(true)}
          className="hidden sm:flex btn w-14 h-14 btn-primary rounded-full fixed z-10 right-5 bottom-5 items-center content-center justify-center drop-shadow-md">
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
                type="button"
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
    </>
  );
};

export default DashboardTeacher;
