import React, { FC } from 'react';
import { HiTrash } from 'react-icons/hi';

type Props = {
  actionDelete?: () => void;
  modalAction: () => void;
};

const DelAssignmentModal: FC<Props> = ({ actionDelete, modalAction }) => (
  <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
      <div className="relative w-96 my-6 mx-auto max-w-3xl">
        {/* content */}
        <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
          {/* header */}
          <div className="flex items-start justify-between p-3 border-slate-200">
            <h3 className="text-xl font-semibold">Delete Confirmation</h3>
            <button
              type="button"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={modalAction}>
              ✕
            </button>
          </div>
          {/* body */}
          <div className="relative p-6 flex-auto">Are you sure delete ?</div>
          <hr />
          {/* footer */}
          <div className="flex items-center justify-end p-3 space-x-3">
            <button
              className="btn btn-ghost btn-sm"
              type="button"
              onClick={modalAction}>
              Cancel
            </button>
            <button
              className="btn btn-error btn-sm font-semibold"
              type="button"
              onClick={actionDelete}>
              <HiTrash className="mr-1" /> Delete
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
  </>
);

export default DelAssignmentModal;
