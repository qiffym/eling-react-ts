import React, { ChangeEvent, FC, useState } from 'react';
import { FaUsers } from 'react-icons/fa';
import { MdKeyboardReturn } from 'react-icons/md';
import { useGrading, useGradingAssignment } from '../../../../hooks/useTeacher';
import { GradingAssignmentType } from '../../../../types/class-type';

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
  const addGrade = useGrading(classID, contentID, assignmentID);

  console.log('ungrad', ungrading);
  console.log('unsub', unsubmitted);
  console.log('grad', graded);

  return (
    <section id="content" className="-mb-10">
      <div className="container mx-auto w-[95%] rounded-box">
        <div className="flex items-start space-x-3">
          {/* Kiri */}
          <div className="p-5 h-[85vh] rounded-box w-4/12 bg-white drop-shadow-lg overflow-auto">
            <div className="flex flex-row items-center space-x-2">
              <FaUsers className="text-2xl rounded-full" />
              <span className="hover:link text-sm">All users</span>
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
                    className="flex flex-row justify-between items-center p-2 hover:bg-slate-100 group border-b">
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
                      <form
                        onSubmit={(e) =>
                          addGrade(e, {
                            studentID: item.student_id,
                            score: grade,
                          })
                        }
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
                    className="flex flex-row justify-between items-center p-2 hover:bg-slate-100 group border-b">
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
                    className="flex flex-row justify-between items-center p-2 hover:bg-slate-100 group border-b">
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
          <div className="p-5 h-[85vh] rounded-box grow bg-white drop-shadow-lg overflow-auto">
            {/* Value */}
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default GradingAssignment;
