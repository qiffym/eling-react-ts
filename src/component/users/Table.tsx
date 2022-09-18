import React, { FC } from 'react';
import ryujin1 from '../../assets/ryujin1.jpg';
import ryujin2 from '../../assets/ryujin2.jpg';

type Props = {
  view: () => void;
  edit: () => void;
};

const Table: FC<Props> = ({ view, edit }) => {
  return (
    <div className="overflow-x-auto w-full">
      <table className="table w-full">
        <thead>
          <tr>
            <th>Role</th>
            <th>Name</th>
            <th>Username</th>
            <th>Email</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Admin</td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ryujin1} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Hart Hagerty</div>
                  <div className="text-sm opacity-50">United States</div>
                </div>
              </div>
            </td>
            <td>
              <br />
              <span className="badge badge-ghost badge-sm">
                Desktop Support Technician
              </span>
            </td>
            <td>Purple</td>
            <th>
              <button onClick={view} className="btn btn-xs">
                details
              </button>
              <button onClick={edit} className="btn btn-warning btn-xs mx-2">
                Edit
              </button>
              <button className="btn btn-error btn-xs text-white">
                Delete
              </button>
            </th>
          </tr>

          <tr>
            <td>Guru</td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ryujin2} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Brice Swyre</div>
                  <div className="text-sm opacity-50">China</div>
                </div>
              </div>
            </td>
            <td>
              Carroll Group
              <br />
              <span className="badge badge-ghost badge-sm">Tax Accountant</span>
            </td>
            <td>Red</td>
            <th>
              <button className="btn btn-xs">details</button>
              <button className="btn btn-warning btn-xs mx-2">Edit</button>
              <button className="btn btn-error btn-xs text-white">
                Delete
              </button>
            </th>
          </tr>

          <tr>
            <td>User</td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ryujin1} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Marjy Ferencz</div>
                  <div className="text-sm opacity-50">Russia</div>
                </div>
              </div>
            </td>
            <td>
              Rowe-Schoen
              <br />
              <span className="badge badge-ghost badge-sm">
                Office Assistant I
              </span>
            </td>
            <td>Crimson</td>
            <th>
              <button className="btn btn-xs">details</button>
              <button className="btn btn-warning btn-xs mx-2">Edit</button>
              <button className="btn btn-error btn-xs text-white">
                Delete
              </button>
            </th>
          </tr>

          <tr>
            <td>User</td>
            <td>
              <div className="flex items-center space-x-3">
                <div className="avatar">
                  <div className="mask mask-squircle w-12 h-12">
                    <img src={ryujin2} alt="Avatar Tailwind CSS Component" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">Yancy Tear</div>
                  <div className="text-sm opacity-50">Brazil</div>
                </div>
              </div>
            </td>
            <td>
              Wyman-Ledner
              <br />
              <span className="badge badge-ghost badge-sm">
                Community Outreach Specialist
              </span>
            </td>
            <td>Indigo</td>
            <th>
              <button className="btn btn-xs">details</button>
              <button className="btn btn-warning btn-xs mx-2">Edit</button>
              <button className="btn btn-error btn-xs text-white">
                Delete
              </button>
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Table;
