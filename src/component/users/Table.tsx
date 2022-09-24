import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { UserType } from '../../types/user-type';

type Props = {
  userData: UserType[];
};

const Table: FC<Props> = ({ userData }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Role</th>
            <th>Name</th>
            <th>Username/Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {userData
            .sort((a, b) => a.role.localeCompare(b.role))
            .map((item) => (
              <tr key={item.id}>
                <td>{item.role}</td>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src={item.avatar}
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold">{item.name}</div>
                      {/* <div className="text-sm opacity-50">United States</div> */}
                    </div>
                  </div>
                </td>
                <td>
                  {item.username}
                  <br />
                  <span className="badge badge-ghost badge-sm">
                    {item.email}
                  </span>
                </td>
                <th>
                  <button
                    onClick={() =>
                      navigate(`${item.id}`, {
                        state: {
                          user: item,
                        },
                      })
                    }
                    className="btn btn-xs"
                  >
                    details
                  </button>
                  <button
                    onClick={() => navigate('edit')}
                    className="btn btn-warning btn-xs mx-2"
                  >
                    Edit
                  </button>
                  <button className="btn btn-error btn-xs text-white">
                    Delete
                  </button>
                </th>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
