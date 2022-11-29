import React from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { RombelType } from '../../../types/rombel-type';

type LocationParams = {
  rombel: RombelType;
};

const ViewRombel = () => {
  const navigate = useNavigate();
  const { rombel } = useLocation().state as LocationParams;

  return (
    <section id="rombel-detail" className="py-20">
      {/* Detail Information */}
      <section>
        <div className="container mx-auto w-11/12 flex flex-row items-center mb-4 space-x-1">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-square h-10 w-12">
            <HiChevronLeft className="text-2xl" />
          </button>
          <h1 className="text-3xl font-bold">
            Rombel Class Details: {rombel.name}
          </h1>
        </div>

        <div className="container mx-auto p-4 w-11/12 bg-white drop-shadow rounded-box mb-6">
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">ID</div>
            <div className="w-4/4 py-4 break-words">{rombel.id}</div>
          </div>
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">Department</div>
            <div className="w-4/4 py-4 break-words">
              {rombel.department_name}
            </div>
          </div>
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">Rombel Name</div>
            <div className="w-4/4 py-4 break-words">{rombel.name}</div>
          </div>
          <div className="flex px-6">
            <div className="w-1/5 py-4 font-bold">Grade</div>
            <div className="w-4/4 py-4 break-words">{rombel.grade}</div>
          </div>
        </div>
      </section>

      {/* Students */}
      <section>
        <div className="container mx-auto w-11/12 flex flex-row items-center mb-4 space-x-1">
          <h1 className="text-3xl font-bold">
            Students: {rombel.total_student}
          </h1>
        </div>
        <div className="container mx-auto w-11/12 overflow-x-auto drop-shadow rounded-box mb-6">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                <th />
                <th>Student ID</th>
                <th>Name</th>
                <th>NIS</th>
                <th>NISN</th>
              </tr>
            </thead>
            <tbody>
              <th className="text-center">1</th>
              <th>{rombel.students?.id}</th>
              <td>{rombel.students?.name}</td>
              <td>{rombel.students?.nis}</td>
              <td>{rombel.students?.nisn}</td>
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
};

export default ViewRombel;
