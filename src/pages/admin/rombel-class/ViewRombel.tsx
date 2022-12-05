import React from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { AdminRombelDetailType } from '../../../types/admin-type';
import { RombelType } from '../../../types/rombel-type';

type LocationParams = {
  rombel: RombelType;
};

const ViewRombel = () => {
  const navigate = useNavigate();
  const { rombel } = useLocation().state as LocationParams;
  const { data } = useFetch(`/api/admin/resources/rombel-classes/${rombel.id}`);

  const rombelData: AdminRombelDetailType = data;

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
            Rombel Class Details: {rombelData.name}
          </h1>
        </div>

        <div className="container mx-auto p-4 w-11/12 bg-white drop-shadow rounded-box mb-6">
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">ID</div>
            <div className="w-4/4 py-4 break-words">
              {rombelData.department_id}
            </div>
          </div>
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">Department</div>
            <div className="w-4/4 py-4 break-words">
              {rombelData.department_name}
            </div>
          </div>
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">Rombel Name</div>
            <div className="w-4/4 py-4 break-words">{rombelData.name}</div>
          </div>
          <div className="flex px-6">
            <div className="w-1/5 py-4 font-bold">Grade</div>
            <div className="w-4/4 py-4 break-words">{rombelData.grade}</div>
          </div>
        </div>
      </section>

      {/* Students */}
      <section>
        <div className="container mx-auto w-11/12 flex flex-row items-center mb-4 space-x-1">
          <h1 className="text-3xl font-bold">
            Students: {rombelData.total_student}
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

            {rombelData.students?.map((item, index) => (
              <tbody>
                <th className="text-center">{index + 1}</th>
                <th>{item.id}</th>
                <td>{item.name}</td>
                <td>{item.nis}</td>
                <td>{item.nisn}</td>
              </tbody>
            ))}
          </table>
        </div>
      </section>
    </section>
  );
};

export default ViewRombel;
