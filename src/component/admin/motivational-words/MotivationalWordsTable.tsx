import React, { FC } from 'react';
import { HiTrash, HiPencilAlt, HiEye } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { MotivationalWordsType } from '../../../types/motivational-type';

type Props = {
  motivationalData: MotivationalWordsType[];
};

const MotivationalWordsTable: FC<Props> = ({ motivationalData }) => {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto">
      <table className="table table-zebra w-full">
        <thead>
          <tr className="text-center">
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th>From</th>
            <th>Active</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {motivationalData
            .sort((a, b) => a.id - b.id)
            .map(item => (
              <tr key={item.id} className="text-center">
                <th>{item.id}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>{item.from}</td>
                <td>{item.active}</td>
                <td>
                  <button
                    onClick={() =>
                      navigate(`${item.id}`, {
                        state: {
                          user: item,
                        },
                      })
                    }
                    className="btn btn-xs space-x-1">
                    <HiEye className="text-md" /> <span>View</span>
                  </button>
                  <button
                    onClick={() =>
                      navigate(`${item.id}/edit`, {
                        state: {
                          user: item,
                        },
                      })
                    }
                    className="btn btn-warning btn-xs mx-2 space-x-1">
                    <HiPencilAlt className="text-md" />
                    <span>Edit</span>
                  </button>
                  <button className="btn btn-error btn-xs text-white space-x-1">
                    <HiTrash className="text-md" /> <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
};

export default MotivationalWordsTable;
