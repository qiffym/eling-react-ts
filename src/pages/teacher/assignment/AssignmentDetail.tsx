/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import GradingAssignment from '../../../component/teacher/home/online_class/GradingAssignment';
import InstructionAssignment from '../../../component/teacher/home/online_class/InstructionAssignment';
import { useFetch } from '../../../hooks/useFetch';
import { AssignmentDetailType } from '../../../types/class-type';

const AssignmentDetail = () => {
  const [tab, setTab] = useState(1);
  const { classID, contentID, assignmentID } = useLocation().state as any;
  const { isLoading, data } = useFetch(
    `/api/teacher/online-classes/${classID}/contents/${contentID}/assignments/${assignmentID}`,
  );

  const assignmentData: AssignmentDetailType = data;

  return (
    <>
      <section id="header" className="mt-20 mb-4">
        <div className="container mx-auto w-[95%] rounded-box">
          <div className="tabs flex justify-start">
            <button
              type="button"
              onClick={() => setTab(0)}
              className={`${
                tab === 0
                  ? 'tab tab-lifted text-lg tab-active text-teal-500 font-bold'
                  : 'tab tab-lifted text-lg'
              }`}>
              Instruksi Tugas
            </button>
            <button
              type="button"
              onClick={() => setTab(1)}
              className={`${
                tab === 1
                  ? 'tab tab-lifted text-lg tab-active text-teal-500 font-bold'
                  : 'tab tab-lifted text-lg'
              }`}>
              Penilaian Tugas
            </button>
          </div>
          <hr />
        </div>
      </section>

      {/* Penilaian Tugas */}
      {tab === 1 ? (
        <GradingAssignment />
      ) : (
        <InstructionAssignment isLoading={isLoading} data={assignmentData} />
      )}
    </>
  );
};

export default AssignmentDetail;
