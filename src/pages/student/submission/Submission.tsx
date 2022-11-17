import React, { useState } from 'react';
// import CreateSubmissionModal from '../../../component/student/modal/CreateSubmissionModal';
import InstructionAssignment from '../../../component/teacher/home/online_class/InstructionAssignment';

const Submission = () => (
  // const [openModal, setOpenModal] = useState(false);
  <div className="mt-20 mb-4">
    <InstructionAssignment />
    <section className="mt-10 ml-20">
      <div className="container lg:mx-auto xl:ml-16 w-11/12">
        <div className="container lg:w-full xl:w-[70%] drop-shadow bg-white rounded-box p-5">
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
              <p>-</p> {/* Status */}
              <p>-</p> {/* Deadline */}
              <p>-</p> {/* Submitted At */}
              <p>-</p> {/* File Submission */}
              <p>-</p> {/* Score */}
            </div>
          </div>
          <div className=" flex justify-center">
            <button
              type="button"
              // onClick={() => setOpenModal(true)}
              className="btn btn-primary">
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
export default Submission;
