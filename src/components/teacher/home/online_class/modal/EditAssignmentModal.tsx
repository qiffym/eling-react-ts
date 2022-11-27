import React, { ChangeEvent, FC, useContext, useState } from 'react';
import { HiPencilAlt } from 'react-icons/hi';
import { MyContext } from '../../../../../context/context';
import useUpdateAssignment from '../../../../../hooks/useUpdateAssignment';
import { AssignmentDetailType } from '../../../../../types/class-type';
import { Types } from '../../../../../types/reducer-type';

type Props = {
  actionUpdate: () => void;
  modalAction: () => void;
  classID: number;
  contentID: number;
  data?: AssignmentDetailType;
};

const EditAssignmentModal: FC<Props> = ({
  actionUpdate,
  modalAction,
  classID,
  contentID,
  data,
}) => {
  const { updateAssignment } = useUpdateAssignment(classID, contentID);
  const { dispatch } = useContext(MyContext);
  const [input, setInput] = useState({
    title: data?.title,
    description: data?.description,
    deadline: data!.deadline,
  });

  const handleInput = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.currentTarget.value,
    });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box w-[50%] max-w-5xl">
          <div className="felx flex-row justify-between items-center">
            <button
              type="button"
              className="btn btn-sm btn-circle absolute right-2 top-2"
              onClick={modalAction}>
              ✕
            </button>
            <h3 className="text-lg font-bold">Update Assingment</h3>
          </div>
          {/* Form */}
          <form
            className="mt-4 flex flex-col space-y-5 w-full"
            onSubmit={(e) => {
              updateAssignment(e, data!.id, {
                title: input.title!,
                description: input.description!,
                deadline: input.deadline,
              });
              dispatch({
                type: Types.AddAssignmentSuccess,
                payload: {
                  success: false,
                },
              });

              actionUpdate();
            }}>
            <div className="flex flex-col space-y-1">
              {/* Title */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Judul Tugas</span>
                </label>
                <input
                  name="title"
                  type="text"
                  defaultValue={data?.title}
                  placeholder="Judul Tugas"
                  className="input input-bordered w-full"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              {/* Description */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Deskripsi Tugas</span>
                </label>
                <textarea
                  name="description"
                  defaultValue={data?.description}
                  className="textarea textarea-bordered h-24"
                  placeholder="Deskripsi Tugas"
                  onChange={(e) => handleInput(e)}
                />
              </div>
              {/* Deadline */}
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">Deadline Tugas</span>
                </label>
                <input
                  name="deadline"
                  type="datetime-local"
                  value={input.deadline}
                  className="input input-bordered w-full max-w-xs"
                  onChange={(e) => handleInput(e)}
                />
              </div>
            </div>
            {/* Button */}
            <button type="submit" className="btn btn-warning px-12">
              <HiPencilAlt className="mr-1" /> Update
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default EditAssignmentModal;
