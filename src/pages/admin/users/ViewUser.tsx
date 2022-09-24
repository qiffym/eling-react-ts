import React from 'react';

import { HiChevronLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { UserType } from '../../../types/user-type';

type LocationParams = {
  user: UserType;
};

const ViewUser = () => {
  const navigate = useNavigate();
  const { user } = useLocation().state as LocationParams;

  return (
    <>
      <div className="px-6 py-14">
        <div className="flex flex-row items-center mb-4 space-x-1">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-square h-10 w-12"
          >
            <HiChevronLeft className="text-2xl" />
          </button>
          <h1 className="text-3xl font-bold">User Detail</h1>
        </div>
        <div className="bg-white rounded-lg p-4">
          <table className="w-2/5">
            <tr>
              <td>ID</td>
              <td>{user.id}</td>
            </tr>
            <tr>
              <td>Avatar</td>
              <td>
                <div className="avatar">
                  <div className="w-12 rounded-xl ring ring-primary">
                    <img src={user.avatar} alt={user.name} />
                  </div>
                </div>
              </td>
            </tr>
            <tr>
              <td>Name</td>
              <td>{user.name}</td>
            </tr>
            <tr>
              <td>Username</td>
              <td>{user.username}</td>
            </tr>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
