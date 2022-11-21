import React from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { StudentSubmissionDetail } from '../../../types/student-type';

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
  // const [openModal, setOpenModal] = useState(false);
  const assignmentData: LocationAssignmentType = assignment;
  const { data } = useFetch(`/api/student/submissions/${assignmentData.id}`);

  const submissionDetail: StudentSubmissionDetail = data;

  return (
    <div className="mt-20 mb-4">
      <section id="header" className="mt-20">
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
            <div className="flex justify-between items-start">
              <div>
                <h1 className="text-2xl md:text-3xl font-medium">
                  {submissionDetail.title}
                </h1>
                <div className="text-sm md:text-md opacity-90 mb-4">
                  <span className="border-r border-r-slate-500 pr-2">
                    {submissionDetail.author}
                  </span>
                  <span className="px-2">{submissionDetail.created_at}</span>
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
      <section className="mt-10">
        <div className="container mx-auto xl:ml-16 w-11/12">
          <div className="container w-full xl:w-8/12 drop-shadow bg-white rounded-box p-5">
            <h3 className="text-3xl font-medium">Submission Status</h3>
            <hr className="my-3" />
            <div className="flex items-center space-x-5 md:space-x-16 text-md md:text-lg">
              <div>
                <p>Status</p>
                <p>Deadline</p>
                <p>Submitted At</p>
                <p>File Submission</p>
                <p>Score</p>
              </div>
              <div>
                <p>: {submissionDetail.submission?.status}</p> {/* Status */}
                <p>: {submissionDetail.deadline}</p> {/* Deadline */}
                <p>: {submissionDetail.submission?.submitted_at}</p>
                {/* Submitted At */}
                <p>: {submissionDetail.submission?.file}</p>
                {/* File Submission */}
                <p>: {submissionDetail.submission?.score}</p> {/* Score */}
              </div>
            </div>

            {/* Create Submission */}
            <div className="flex justify-center mt-4">
              <button
                type="button"
                // onClick={() => setOpenModal(true)}
                className="btn btn-primary text-center">
                Update Submission
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
