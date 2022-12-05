import React, { FC, useState, useContext } from 'react';
import { HiTrash, HiPencilAlt, HiEye } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import { MyContext } from '../../../context/context';
import { useAdminDeleteMotivationalWord } from '../../../hooks/useAdmin';
import { MotivationalWordsType } from '../../../types/motivational-type';
import { Types } from '../../../types/reducer-type';
import ModalDelete from '../../modal/ModalDelete';

type Props = {
  motivationalData: MotivationalWordsType[];
};

const MotivationalWordsTable: FC<Props> = ({ motivationalData }) => {
  const navigate = useNavigate();
  const deleteAdminMotivationalWord = useAdminDeleteMotivationalWord();
  const [data, setData] = useState({
    dataID: 0,
    dataFrom: '',
  });
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const { dispatch } = useContext(MyContext);

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
            .map((item) => (
              <tr key={item.id} className="text-center">
                <th>{item.id}</th>
                <td>{item.title}</td>
                <td>{item.body}</td>
                <td>{item.from}</td>
                <td>{item.active === true ? 'True' : 'False'}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      navigate(`${item.id}`, {
                        state: {
                          word: item,
                        },
                      })
                    }
                    className="btn btn-xs space-x-1">
                    <HiEye className="text-md" /> <span>View</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-warning btn-xs mx-2 space-x-1">
                    <HiPencilAlt className="text-md" />
                    <span>Edit</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-error btn-xs text-white space-x-1"
                    onClick={() => {
                      setData({
                        dataID: item.id,
                        dataFrom: item.from,
                      });
                      setOpenModalDelete(true);
                    }}>
                    <HiTrash className="text-md" /> <span>Delete</span>
                  </button>
                </td>
              </tr>
            ))}
        </tbody>
      </table>

      {openModalDelete ? (
        <ModalDelete
          isOpen={openModalDelete}
          modalAction={() => setOpenModalDelete(false)}
          data={data.dataFrom}
          actionDelete={() => {
            deleteAdminMotivationalWord(data.dataID);
            dispatch({
              type: Types.DeleteSuccess,
              payload: {
                success: false,
              },
            });
          }}
        />
      ) : null}
    </div>
  );
};

export default MotivationalWordsTable;
