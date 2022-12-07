/* eslint-disable react/jsx-no-useless-fragment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdKeyboardReturn } from 'react-icons/md';
import { MyContext } from '../../../../context/context';
import { useGrading, useGradingAssignment } from '../../../../hooks/useTeacher';
import { GradingAssignmentType } from '../../../../types/class-type';
import { Types } from '../../../../types/reducer-type';
import filedownload from '../../../../assets/images/filedownload.png';

type Props = {
  classID: number;
  contentID: number;
  assignmentID: number;
};

const GradingAssignment: FC<Props> = ({ classID, contentID, assignmentID }) => {
  const { ungrading, unsubmitted, graded } = useGradingAssignment(
    classID,
    contentID,
    assignmentID,
  );
  const [grade, setGrade] = useState(0);

  const [show, setShow] = useState(false);

  const [submissionData, setSubmissionData] = useState<GradingAssignmentType>();

  const addGrade = useGrading(classID, contentID, assignmentID);
  const { dispatch } = useContext(MyContext);

  return (
    <section id="content" className="-mb-10">
      <div className="container mx-auto w-[95%] rounded-box">
        <div className="flex items-start space-x-3">
          {/* Kiri */}
          <div className="p-4 h-[85vh] rounded-box w-4/12 bg-white drop-shadow-lg overflow-auto">
            <div className="flex flex-row items-center space-x-2">
              <FaUsers className="text-2xl rounded-full" />
              <span className="text-sm">All students</span>
            </div>
            <hr className="my-4" />

            <div className="flex flex-col space-y-5">
              {/* Diserahkan / Turned in */}
              <section id="turn-in">
                <h3 className="text-xl font-bold bg-slate-200 p-2 mb-2">
                  Diserahkan
                </h3>
                {/* Baris ke-1 */}
                {ungrading?.data?.map((item: GradingAssignmentType) => (
                  <div
                    key={item.student_id}
                    onClick={() => {
                      setSubmissionData(item);
                      setShow(true);
                    }}
                    className="flex flex-row justify-between items-center p-2 hover:bg-slate-100 hover:cursor-pointer group border-b transition-all">
                    {/* Avatar & Name */}
                    <div className="grow">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-10 h-10">
                            <img
                              src={item.avatar}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">
                            {item.name.length <= 25
                              ? item.name
                              : item.name.slice(0, 25)}
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* Nilai */}
                    <div>
                      <form
                        onSubmit={(e) => {
                          addGrade(e, {
                            studentID: item.student_id,
                            score: grade,
                          });
                          dispatch({
                            type: Types.AddAssignmentSuccess,
                            payload: {
                              success: false,
                            },
                          });
                        }}
                        className="flex flex-row items-center space-x-2">
                        <div className="flex flex-row items-end text-lg">
                          <input
                            type="text"
                            placeholder="0"
                            className="w-9 border-b-gray-500 font-bold hover:border-b-2 group-hover:bg-slate-100 focus:outline-none focus:border-b-2"
                            onChange={(e: ChangeEvent<HTMLInputElement>) =>
                              setGrade(Number(e.currentTarget.value))
                            }
                          />
                          <span className="mr-2 text-slate-600">/100</span>
                        </div>
                        {/* Submit */}
                        <button
                          type="submit"
                          className="btn btn-sm btn-circle btn-outline">
                          <MdKeyboardReturn className="text-lg" />
                        </button>
                      </form>
                    </div>
                  </div>
                ))}
              </section>

              {/* Ditugaskan / Assigned */}
              <section id="turn-in">
                <h3 className="text-xl font-bold bg-slate-200 p-2 mb-2">
                  Ditugaskan
                </h3>

                {/* Baris ke-1 */}
                {unsubmitted?.data?.map((item: GradingAssignmentType) => (
                  <div
                    key={item.student_id}
                    className="flex flex-row hover:cursor-pointer justify-between items-center p-2 hover:bg-slate-100 group border-b transition-all">
                    {/* Avatar & Name */}
                    <div className="grow">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-10 h-10">
                            <img
                              src={item.avatar}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                        </div>
                      </div>
                    </div>
                    {/* Nilai */}
                    <div>
                      <p className="hidden group-hover:block">
                        Belum mengumpulkan
                      </p>
                    </div>
                  </div>
                ))}
              </section>

              {/* Dinilai / Graded */}
              <section id="dinilai">
                <h3 className="text-xl font-bold bg-slate-200 p-2 mb-2">
                  Dinilai
                </h3>

                {/* Baris ke-1 */}
                {graded?.data?.map((item: GradingAssignmentType) => (
                  <div
                    key={item.student_id}
                    onClick={() => {
                      setSubmissionData(item);
                      setShow(true);
                    }}
                    className="flex flex-row justify-between items-center p-2 hover:bg-slate-100 hover:cursor-pointer group border-b transition-all">
                    {/* Avatar & Name */}
                    <div className="grow">
                      <div className="flex items-center space-x-3">
                        <div className="avatar">
                          <div className="mask mask-circle w-10 h-10">
                            <img
                              src={item.avatar}
                              alt="Avatar Tailwind CSS Component"
                            />
                          </div>
                        </div>
                        <div>
                          <div className="font-medium">{item.name}</div>
                        </div>
                      </div>
                    </div>
                    {/* Nilai */}
                    <div>
                      <div className="flex flex-row items-center space-x-2">
                        <div className="flex flex-row items-end text-lg">
                          <input
                            type="text"
                            placeholder="0"
                            value={item?.submission?.score}
                            className=" max-w-[3.2rem] border-b-gray-500 font-bold hover:border-b-2 group-hover:bg-slate-100 focus:outline-none focus:border-b-2"
                          />
                          <span className="mr-2 text-slate-600">/100</span>
                        </div>
                        {/* Submit */}
                        <button
                          type="submit"
                          disabled
                          className="btn btn-sm btn-circle btn-outline">
                          <MdKeyboardReturn className="text-lg" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </section>
            </div>
          </div>

          {/* Kanan */}
          <div className="p-4 h-[85vh] rounded-box grow bg-white drop-shadow-lg overflow-auto">
            {/* Buat IF-ELSE DISINI */}

            {/* Summery Submission */}
            <section id="summery-submission">
              <div className="flex items-center space-x-5">
                {/* Diserahkan */}
                <div className="border-r pr-3">
                  <h1 className="text-4xl font-semibold">
                    {ungrading?.data?.length === undefined
                      ? '0'
                      : ungrading?.data?.length}
                  </h1>
                  <span className="text-sm font-normal">Diserahkan</span>
                </div>
                {/* Diberikan */}
                <div className="border-r pr-3">
                  <h1 className="text-4xl font-semibold">
                    {unsubmitted?.data?.length === undefined
                      ? 0
                      : unsubmitted?.data?.length}
                  </h1>
                  <span className="text-sm font-normal">Diberikan</span>
                </div>
                {/* Dinilai */}
                <div className="pr-3">
                  <h1 className="text-4xl font-semibold">
                    {graded?.data?.length === undefined
                      ? 0
                      : graded?.data?.length}
                  </h1>
                  <span className="text-sm font-normal">Dinilai</span>
                </div>
              </div>

              {/* File Yang Diserahkan Siswa */}
              {show ? (
                <div className="container mx-auto mt-10">
                  <div className="grid grid-cols-5 gap-5">
                    {/* Card 1 */}
                    <div className="card w-40 bg-base-200 shadow-xl">
                      <div
                        className="card-body flex items-center p-4 hover:cursor-pointer"
                        onClick={() => {
                          window.open(
                            submissionData?.submission.file,
                            '_blank',
                            'noopener,noreferrer',
                          );
                        }}>
                        <div className="flex space-x-2">
                          <div className="avatar">
                            <div className="mask mask-circle w-8 h-8">
                              <img
                                src={submissionData?.avatar}
                                alt={submissionData?.name}
                              />
                            </div>
                          </div>
                          <h3 className="break-words font-medium text-sm">
                            {submissionData?.name}
                          </h3>
                        </div>

                        <figure className="py-2">
                          <img
                            src={filedownload}
                            alt="file_download"
                            width={65}
                            height="200px"
                            className="mask mask-square opacity-30"
                          />
                        </figure>
                        <div className="card-actions justify-start">
                          <span className="link-hover cursor-pointer text-sm">
                            {/* {item.submission.file.slice(0, 16)}... */}
                            {submissionData?.submission.file.slice(0, 16)}...
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : null}
            </section>

            {/* Specific Submission */}
            {show ? (
              <>
                <section id="specific-submission">
                  <div className="flex flex-col space-y-3">
                    <div className="flex justify-end">
                      <div
                        className="tooltip tooltip-left"
                        data-tip="back to summery">
                        <button
                          type="button"
                          onClick={() => setShow(false)}
                          className="btn btn-sm btn-circle btn-outline">
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
                              d="M6 18L18 6M6 6l12 12"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <h3 className="text-2xl font-medium">
                        {submissionData?.name}
                      </h3>
                      <h3 className="text-xl opacity-80">
                        {submissionData?.submission.score === null
                          ? 'Belum dinilai'
                          : submissionData?.submission.score}
                      </h3>
                    </div>

                    {/* File Download */}
                    {/* Tambahkan onClick menuju link url file nya */}
                    <div className="flex hover:opacity-80 cursor-pointer">
                      <div className="flex space-x-4 items-center w-[60%] border border-slate-300 rounded-box">
                        <figure className="p-3 border-r border-slate-300">
                          <img
                            src={filedownload}
                            alt="file_download"
                            width={65}
                            height="200px"
                            className="mask mask-square opacity-40"
                          />
                        </figure>
                        <div
                          className="grow"
                          onClick={() => {
                            window.open(
                              submissionData?.submission.file,
                              '_blank',
                              'noopener,noreferrer',
                            );
                          }}>
                          <p className="font-medium">
                            {Number(
                              submissionData?.submission.filename.length,
                            ) <= 48
                              ? submissionData?.submission.filename
                              : `${submissionData?.submission.filename.slice(
                                  0,
                                  48,
                                )}...`}
                          </p>
                          <h2 className="opacity-90 uppercase">
                            {submissionData?.submission.file_extension}
                          </h2>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              </>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradingAssignment;
