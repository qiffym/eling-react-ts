import React, { FC, useState } from 'react';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { MdAssignment } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';
import { useAssignmentDelete } from '../../../../hooks/useDeleteClasses';
import { AssignmentDetailType } from '../../../../types/class-type';
import Loading2ND from '../../../loading/Loading2nd';
import ModalDelete from '../../../modal/ModalDelete';
import EditAssignmentModal from './modal/EditAssignmentModal';

type Props = {
  isLoading?: boolean;
  data?: AssignmentDetailType;
  classID: number;
  contentID: number;
};

const InstructionAssignment: FC<Props> = ({
  isLoading,
  data,
  classID,
  contentID,
}) => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);
  const assignmentDelete = useAssignmentDelete(classID, contentID);
  const navigate = useNavigate();

  return (
    <>
      {isLoading ? (
        <Loading2ND />
      ) : (
        <section id="instruction-assignment">
          <div className="container lg:mx-auto xl:ml-16 w-11/12">
            <div className="flex justify-start items-start">
              <div className="text-7xl py-2">
                <MdAssignment />
              </div>
              <div className="container ml-2 lg:w-full xl:w-8/12 drop-shadow bg-white rounded-box p-5">
                <div className="flex justify-between items-start">
                  <div>
                    <h1 className="text-3xl font-medium">{data?.title}</h1>
                    <div className="text-md opacity-90 mb-4">
                      <span className="border-r border-r-slate-500 pr-2">
                        Qiff Ya Muhammad
                      </span>
                      <span className="px-2">Dibuat {data?.created_at}</span>
                    </div>
                  </div>
                  <div className="space-x-2">
                    <div className="tooltip" data-tip="Edit">
                      <button
                        type="button"
                        onClick={() => setOpenEditModal(true)}
                        className="btn btn-sm btn-square btn-warning text-lg">
                        <HiPencilAlt />
                      </button>
                    </div>
                    <div className="tooltip" data-tip="Delete">
                      <button
                        type="button"
                        onClick={() => setOpenDelModal(true)}
                        className="btn btn-sm btn-square btn-error text-lg">
                        <HiTrash />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="flex justify-between items-center">
                  <span className="font-semibold">100 poin</span>
                  <span className="font-semibold">
                    Tenggat: {data?.deadline_parse}
                  </span>
                </div>
                <hr className="my-3" />
                <p>{data?.description}</p>
              </div>
            </div>
          </div>
        </section>
      )}
      {/* Edit Modal */}
      {openEditModal ? (
        <EditAssignmentModal
          data={data}
          classID={classID}
          contentID={contentID}
          actionUpdate={() => {
            setOpenEditModal(false);
          }}
          modalAction={() => setOpenEditModal(false)}
        />
      ) : null}

      {/* Delete Modal */}
      {openDelModal ? (
        <ModalDelete
          isOpen={openDelModal}
          actionDelete={() => {
            assignmentDelete(data?.id);
            setOpenDelModal(false);
            navigate(-1);
          }}
          modalAction={() => setOpenDelModal(false)}
        />
      ) : null}
    </>
  );
};

export default InstructionAssignment;
