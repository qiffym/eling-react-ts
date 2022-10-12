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

  const convertGender = () => {
    switch (user.gender) {
      case 'L':
        return 'Laki-laki';
      case 'P':
        return 'Perempuan';
      default:
        return 'No Gender';
    }
  };

  return (
    <>
      <div className="px-6 py-14">
        <div className="flex flex-row items-center mb-4 space-x-1">
          <button
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-square h-10 w-12">
            <HiChevronLeft className="text-2xl" />
          </button>
          <h1 className="text-3xl font-bold">User Detail</h1>
        </div>
        <div className="overflow-x-auto bg-white rounded-lg p-2">
          <table className="table w-full px-10">
            <tbody>
              <tr>
                <td>
                  <img
                    className="mask mask-circle mb-5 w-32"
                    src={user.avatar}
                    alt={user.name}
                  />
                </td>
                <td></td>
                <td></td>
                <td>
                  <h2 className="font-bold text-xl">{user.name}</h2>
                </td>
              </tr>

              <tr>
                <td className="text-gray-400">Username</td>
                <td></td>
                <td></td>
                <td className="font-semibold">{user.username}</td>
              </tr>

              <tr>
                <td className="text-gray-400">Birthday</td>
                <td></td>
                <td></td>
                <td className="font-semibold">{user.birthday}</td>
              </tr>

              <tr>
                <td className="text-gray-400">Religion</td>
                <td></td>
                <td></td>
                <td className="font-semibold">{user.religion}</td>
              </tr>

              <tr>
                <td className="text-gray-400">Gender</td>
                <td></td>
                <td></td>
                <td className="font-semibold">{convertGender()}</td>
              </tr>

              <tr>
                <td className="text-gray-400">Email</td>
                <td></td>
                <td></td>
                <td className="font-semibold">{user.email}</td>
              </tr>

              <tr>
                <td className="text-gray-400">Address</td>
                <td></td>
                <td></td>
                <td className="font-semibold">{user.address}</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default ViewUser;
