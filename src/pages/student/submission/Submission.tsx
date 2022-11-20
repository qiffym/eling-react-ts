import React, { useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const Submission = () => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);

  console.log(openModal, setOpenModal);

  return (
    <div className="mt-20 mb-4">
      <section id="header" className="mt-20">
        <div className="flex flex-row items-center space-x-2 container ml-16 mb-4 w-9/12 rounded-box">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-square h-5 w-10">
            <HiChevronLeft className="text-2xl" />
          </button>
          <h1 className="text-3xl font-bold">Submission Detail</h1>
          <hr className="mb-4 border-t-2" />
        </div>
      </section>

      {/* Instruction Assignment */}
      <section id="instruction-assignment">
        <div className="container lg:mx-auto xl:ml-16 w-11/12">
          <div className="container lg:w-full xl:w-8/12 drop-shadow bg-white rounded-box p-5">
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-3xl font-medium">Tugas 1</h1>
                <div className="text-md opacity-90 mb-4">
                  <span className="border-r border-r-slate-500 pr-2">
                    Qiff Ya Muhammad
                  </span>
                  <span className="px-2">Dibuat 1 minggu yang lalu</span>
                </div>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-semibold">100 poin</span>
              <span className="font-semibold">
                Tenggat: 2 minggu dari sekarang
              </span>
            </div>
            <hr className="my-3" />
            <p>deskripsi tugas</p>
          </div>
        </div>
      </section>

      {/* Submission Status */}
      <section className="mt-10">
        <div className="container lg:mx-auto xl:ml-16 w-11/12">
          <div className="container lg:w-full xl:w-8/12 drop-shadow bg-white rounded-box p-5">
            <h3 className="text-3xl font-medium">Submission Status</h3>
            <hr className="my-3" />
            <div className="flex items-center space-x-16 text-lg">
              <div>
                <p>Status</p>
                <p>Deadline</p>
                <p>Submitted At</p>
                <p>File Submission</p>
                <p>Score</p>
              </div>
              <div>
                <p>: Tugas baru diberikan</p> {/* Status */}
                <p>: 2 Minggu dari sekarang</p> {/* Deadline */}
                <p>: -</p> {/* Submitted At */}
                <p>: -</p> {/* File Submission */}
                <p>: -</p> {/* Score */}
              </div>
            </div>

            {/* Create Submission */}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                // onClick={() => setOpenModal(true)}
                className="btn btn-primary text-center">
                Create Submission
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* {openModal ? (
        <CreateSubmissionModal
          actionSave={() => {
            setOpenModal(false);
          }}
          modalAction={() => setOpenModal(false)}
        />
      ) : null} */}
    </div>
  );
};

export default Submission;
