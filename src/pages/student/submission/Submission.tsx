/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { FcDocument } from 'react-icons/fc';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { StudentSubmissionDetail } from '../../../types/student-type';
import CreateSubmissionModal from '../../../components/student/modal/CreateSubmissionModal';

import Loading2ND from '../../../components/loading/Loading2nd';
import { usePostSubmission } from '../../../hooks/useStudent';
import ToastError from '../../../components/toast/ToastError';
import Toast from '../../../components/toast/Toast';

type LocationAssignmentType = {
  id: number;
  title: string;
  description: string;
  deadline: string;
  created_at: string;
};

const Submission = () => {
  const navigate = useNavigate();
  const { assignment } = useLocation().state as any;
  const [openModal, setOpenModal] = useState(false);
  const assignmentData: LocationAssignmentType = assignment;
  const { isLoading, data } = useFetch(
    `/api/student/submissions/${assignmentData.id}`,
  );

  const submissionDetail: StudentSubmissionDetail = data;

  const { postSubmission, message, toast, toastError } = usePostSubmission(
    submissionDetail.assignment_id,
  );

  return (
    <div className="mt-5 sm:mt-20 mb-4">
      {isLoading ? (
        <Loading2ND />
      ) : (
        <>
          <section id="header" className="mt-5 sm:mt-20">
            <div className="flex flex-row items-center space-x-2 container mx-auto xl:ml-16 w-11/12 mb-4">
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
            <div className="container mx-auto xl:ml-16 w-11/12">
              <div className="container w-full xl:w-8/12 drop-shadow bg-white rounded-box p-5">
                <h3 className="text-3xl font-medium">Instruksi Tugas</h3>
                <hr className="my-3" />
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-2xl md:text-3xl font-medium">
                      {submissionDetail.title}
                    </h1>
                    <div className="text-sm md:text-md opacity-90 mb-4">
                      <span className="border-r border-r-slate-500 pr-2">
                        {submissionDetail.author}
                      </span>
                      <span className="px-2">
                        Dibuat {submissionDetail.created_at}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col justify-start items-start md:flex-row md:justify-between md:items-center text-sm md:text-md">
                  <span className="font-semibold">100 poin</span>
                  <span className="font-semibold">
                    Tenggat: {submissionDetail.deadline}
                  </span>
                </div>
                <hr className="my-3" />
                <p>{submissionDetail.description}</p>
              </div>
            </div>
          </section>

          {/* Submission Status */}
          <section className="mt-5">
            <div className="container mx-auto xl:ml-16 w-11/12">
              <div className="container w-full xl:w-8/12 drop-shadow bg-white rounded-box p-5">
                <h3 className="text-3xl font-medium">Submission Status</h3>
                <hr className="my-3" />
                <div className="overflow-x-auto w-full lg:w-4/5">
                  <table className="table table-compact table-zebra w-full">
                    <tbody>
                      <tr>
                        <td>Status</td>
                        <td
                          className={
                            submissionDetail.submission?.status_id === '2'
                              ? 'text-teal-600'
                              : submissionDetail.submission?.status_id === '3'
                              ? 'text-red-600'
                              : 'font-normal'
                          }>
                          : {submissionDetail.submission?.status}
                        </td>
                      </tr>
                      <tr>
                        <td>Grading Status</td>
                        <td>
                          :{' '}
                          {submissionDetail.submission?.status_id === '1'
                            ? 'Belum Mengumpulkan'
                            : submissionDetail.submission?.status_id === '2' &&
                              submissionDetail.submission?.score === 0
                            ? 'Menunggu untuk dinilai'
                            : submissionDetail.submission?.status_id === '3' &&
                              submissionDetail.submission?.score === 0
                            ? 'Menunggu untuk dinilai'
                            : 'Sudah dinilai'}
                        </td>
                      </tr>
                      <tr>
                        <td>Due Date</td>
                        <td>: {submissionDetail.deadline} WIB</td>
                      </tr>
                      <tr>
                        <td>Submitted At</td>
                        <td>: {submissionDetail.submission?.submitted_at}</td>
                      </tr>
                      <tr>
                        <td>File Submission</td>
                        <td>
                          <div className="flex items-center">
                            <span className="mr-1">:</span>
                            {submissionDetail.submission?.file !== null ? (
                              <FcDocument />
                            ) : null}
                            <a
                              href={submissionDetail.submission?.file}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="hover:link">
                              {submissionDetail.submission?.filename}
                            </a>
                          </div>
                        </td>
                      </tr>
                      <tr>
                        <td>Score</td>
                        <td className="font-bold">
                          : {submissionDetail.submission?.score}
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                {/* Create Submission */}
                <div className="flex justify-center mt-4">
                  <button
                    type="button"
                    disabled={submissionDetail.submission?.score !== 0}
                    onClick={() => setOpenModal(true)}
                    className="btn btn-primary text-center">
                    Update Submission
                  </button>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {openModal ? (
        <CreateSubmissionModal
          uploadSubmission={postSubmission}
          actionSave={() => {
            setOpenModal(false);
          }}
          modalAction={() => setOpenModal(false)}
          isOpen={openModal}
        />
      ) : null}

      {toast ? (
        <div className="px-5 z-50 mb-24">
          <Toast desc={`${message}, Tugasmu berhasil dikumpulkan.`} />
        </div>
      ) : null}

      {toastError ? (
        <div className="px-5 z-50 mb-24">
          <ToastError desc={`${message} please try again!`} />
        </div>
      ) : null}
    </div>
  );
};

export default Submission;
