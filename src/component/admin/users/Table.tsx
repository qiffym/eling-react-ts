import React, { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiTrash, HiPencilAlt, HiEye } from 'react-icons/hi';
import { useDeleteUser } from '../../../hooks/useDeleteUser';
import { UserType } from '../../../types/user-type';
import Modal from '../../modal/Modal';
import { MyContext } from '../../../context/context';
import { Types } from '../../../types/reducer-type';

type Props = {
  userData: UserType[];
};

const Table: FC<Props> = ({ userData }) => {
  const [openModal, setOpenModal] = useState(false);
  const user = JSON.parse(localStorage.getItem('user') || '');
  const [deleteID, setDeleteID] = useState({
    id: 0,
    username: '',
  });
  const { dispatch } = useContext(MyContext);
  const navigate = useNavigate();
  const deleteUser = useDeleteUser();

  return (
    <>
      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          <thead>
            <tr>
              <th>Role</th>
              <th>Name</th>
              <th>Username/Email</th>
              <th />
            </tr>
          </thead>
          <tbody>
            {userData
              .filter((usr) => usr.username !== user.user.username)
              .sort((a, b) => a.role.localeCompare(b.role))
              .map((item) => (
                <React.Fragment key={item.id}>
                  <tr>
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
                    <td>
                      <button
                        type="button"
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
                        type="button"
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
                      <button
                        type="button"
                        onClick={() => {
                          setOpenModal(true);
                          setDeleteID({
                            id: item.id,
                            username: item.username,
                          });
                        }}
                        className="btn btn-error btn-xs text-white space-x-1">
                        <HiTrash className="text-md" /> <span>Delete</span>
                      </button>
                    </td>
                  </tr>
                </React.Fragment>
              ))}
          </tbody>
        </table>
      </div>

      {openModal ? (
        <Modal
          userData={deleteID.username}
          actionDelete={() => {
            deleteUser(deleteID.id);
            dispatch({
              type: Types.DeleteSuccess,
              payload: {
                success: false,
              },
            });
            setOpenModal(false);
          }}
          modalAction={() => setOpenModal(false)}
        />
      ) : null}
    </>
  );
};

export default Table;
