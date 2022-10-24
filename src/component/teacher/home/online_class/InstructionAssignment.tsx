import React, { useState } from 'react';
import { HiPencilAlt, HiTrash } from 'react-icons/hi';
import { MdAssignment } from 'react-icons/md';
import DelAssignmentModal from './modal/DelAssignmentModal';
import EditAssignmentModal from './modal/EditAssignmentModal';

const InstructionAssignment = () => {
  const [openEditModal, setOpenEditModal] = useState(false);
  const [openDelModal, setOpenDelModal] = useState(false);

  return (
    <>
      <section id="instruction-assignment">
        <div className="container lg:mx-auto xl:ml-16 w-11/12">
          <div className="flex justify-start items-start">
            <div className="text-7xl py-2">
              <MdAssignment />
            </div>
            <div className="container ml-2 lg:w-full xl:w-8/12 drop-shadow bg-white rounded-box p-5">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-3xl font-medium">
                    Tugas 1: Makalah Sejarah Komputer
                  </h1>
                  <div className="text-md opacity-90 mb-4">
                    <span className="border-r border-r-slate-500 pr-2">
                      Qiff Ya Muhammad
                    </span>
                    <span className="px-2">Dibuat 6 hari yang lalu</span>
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
                  Tenggat: 20 Agustus 2022 23.59
                </span>
              </div>
              <hr className="my-3" />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Recusandae quo maiores quaerat earum mollitia nam totam esse
                repellendus adipisci maxime?
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Edit Modal */}
      {openEditModal ? (
        <EditAssignmentModal
          actionUpdate={() => {
            setOpenEditModal(false);
          }}
          modalAction={() => setOpenEditModal(false)}
        />
      ) : null}

      {/* Delete Modal */}
      {openDelModal ? (
        <DelAssignmentModal
          actionDelete={() => {
            setOpenDelModal(false);
          }}
          modalAction={() => setOpenDelModal(false)}
        />
      ) : null}
    </>
  );
};

export default InstructionAssignment;
