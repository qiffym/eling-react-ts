/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from 'react';
import GradingAssignment from '../../../component/teacher/home/online_class/GradingAssignment';
import InstructionAssignment from '../../../component/teacher/home/online_class/InstructionAssignment';

const AssignmentDetail = () => {
  const [tab, setTab] = useState(1);
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
      {tab === 1 ? <GradingAssignment /> : <InstructionAssignment />}
    </>
  );
};

export default AssignmentDetail;
