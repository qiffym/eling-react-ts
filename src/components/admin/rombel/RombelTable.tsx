import React, { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiTrash, HiPencilAlt, HiEye } from 'react-icons/hi';
import { RombelType } from '../../../types/rombel-type';
import { useAdminDeleteRombel } from '../../../hooks/useAdmin';
import ModalDelete from '../../modal/ModalDelete';
import { MyContext } from '../../../context/context';
import { Types } from '../../../types/reducer-type';

type Props = {
  rombelData: RombelType[];
};

const RombelTable: FC<Props> = ({ rombelData }) => {
  const navigate = useNavigate();
  const deleteAdminRombel = useAdminDeleteRombel();
  const [rombel, setRombel] = useState({
    rombelID: 0,
    rombelName: '',
  });
  const [openModalDelete, setOpenModalDelete] = useState(false);

  const { dispatch } = useContext(MyContext);

  return (
    <>
      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr className="text-center">
              <th>ID</th>
              <th>Department</th>
              <th>Name</th>
              <th>Grade</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {rombelData.map((item) => (
              <tr key={item.id} className="text-center">
                <th>{item.id}</th>
                <td>{item.department_id}</td>
                <td>{item.name}</td>
                <td>{item.grade}</td>
                <td>
                  <button
                    type="button"
                    onClick={() =>
                      navigate(`${item.id}`, {
                        state: {
                          rombel: item,
                        },
                      })
                    }
                    className="btn btn-xs space-x-1">
                    <HiEye className="text-md" /> <span>View</span>
                  </button>
                  <button
                    type="button"
                    onClick={() =>
                      navigate(`${item.id}/edit`, {
                        state: {
                          rombel: item,
                        },
                      })
                    }
                    className="btn btn-warning btn-xs mx-2 space-x-1">
                    <HiPencilAlt className="text-md" />
                    <span>Edit</span>
                  </button>
                  <button
                    type="button"
                    className="btn btn-error btn-xs text-white space-x-1"
                    onClick={() => {
                      setRombel({
                        rombelID: item.id,
                        rombelName: item.name,
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
      </div>
      {openModalDelete ? (
        <ModalDelete
          isOpen={openModalDelete}
          modalAction={() => setOpenModalDelete(false)}
          data={rombel.rombelName}
          actionDelete={() => {
            deleteAdminRombel(rombel.rombelID);
            dispatch({
              type: Types.DeleteSuccess,
              payload: {
                success: false,
              },
            });
          }}
        />
      ) : null}
    </>
  );
};

export default RombelTable;
