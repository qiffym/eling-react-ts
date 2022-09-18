import React from 'react';

import { HiChevronLeft } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';

const ViewUser = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="px-6 py-14">
        <div className="flex flex-row items-center mb-4 space-x-1">
          <button onClick={() => navigate(-1)} className="btn btn-ghost p-3">
            <HiChevronLeft className="text-2xl" />
          </button>
          <h1 className="text-3xl font-bold">User Detail</h1>
        </div>
        <div className="bg-white rounded-lg p-4">
          <table className="w-2/5">
            <tr>
              <td>ID</td>
              <td>1</td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>-</td>
            </tr>
            <tr>
              <td>Name</td>
              <td>Qiff Ya Muhammad</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>qiffym</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
