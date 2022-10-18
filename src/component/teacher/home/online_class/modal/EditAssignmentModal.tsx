import React, { ChangeEvent, FC, useEffect, useReducer, useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';

type Props = {
  actionUpdate: () => void;
  modalAction: () => void;
};

const EditAssignmentModal: FC<Props> = ({ actionUpdate, modalAction }) => {
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box w-[50%] max-w-5xl">
          <div className="felx flex-row justify-between items-center">
            <button
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={modalAction}>
              ✕
            </button>
            <h3 className="text-lg font-bold">Update Assingment</h3>
          </div>
          {/* Form */}
          <form className="mt-4 flex flex-col space-y-5 w-full">
            <div className="flex flex-col space-y-1">
              {/* Title */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Judul Tugas</span>
                </label>
                <input
                  type="text"
                  placeholder="Judul Tugas"
                  className="input input-bordered w-full"
                />
              </div>
              {/* Description */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Deskripsi Tugas</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Deskripsi Tugas"></textarea>
              </div>
              {/* Deadline */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Deadline Tugas</span>
                </label>
                <input
                  type="datetime-local"
                  placeholder="Judul Tugas"
                  className="input input-bordered w-full max-w-xs"
                />
              </div>
            </div>
            {/* Button */}
            <button className="btn btn-warning px-12">
              <HiPencilAlt className="mr-1" /> Update
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default EditAssignmentModal;
