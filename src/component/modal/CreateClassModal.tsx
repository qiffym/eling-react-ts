import React, { ChangeEvent, FC, useEffect, useReducer, useState } from 'react';
import { useCreateClass } from '../../hooks/useClasses';
import { createClassReducer } from '../../reducers/reducers';
import { Types } from '../../types/reducer-type';
import LoadingButton from '../loading/LoadingButton';

type Props = {
  actionSave: () => void;
  modalAction: () => void;
};

const CreateClassModal: FC<Props> = ({ actionSave, modalAction }) => {
  const { isLoading, createClass } = useCreateClass();
  const [isDisable, setDisable] = useState(false);
  const [state, dispatch] = useReducer(createClassReducer, {
    name: '',
    description: '',
    rombel_class_id: 1,
  });

  useEffect(() => {
    if (state.name === '') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [state]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box relative">
          <div className="felx flex-row justify-between items-center">
            <button
              type="button"
              onClick={modalAction}
              className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
            <h3 className="text-lg font-bold">Tambah Kelas</h3>
          </div>
          <form
            onSubmit={(e) => {
              createClass(e, {
                name: state.name,
                rombel_class_id: state.rombel_class_id,
                description: state.description,
              });
              actionSave();
            }}
            className="mt-4 flex flex-col space-y-5 w-full">
            <div className="flex flex-col space-y-1">
              <label htmlFor="romble-textinput" className="font-medium">
                Romble ID
              </label>
              <select
                onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                  dispatch({
                    type: Types.RombelID,
                    payload: {
                      rombel_class_id: Number(e.target.value),
                    },
                  });
                }}
                className="select select-bordered w-full ">
                <option value="DEFAULT" disabled>
                  -- Rombel ID --
                </option>
                <option value="1">X TKJ 1</option>
                <option value="2">X TKJ 2</option>
                <option value="3">XI TKJ 1</option>
                <option value="4">XI TKJ 2</option>
                <option value="5">XII TKJ 1</option>
                <option value="6">XII TKJ 2</option>
              </select>
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="class-textinput" className="font-medium">
                Nama Kelas
              </label>
              <input
                type="text"
                placeholder="Pemrograman Dasar"
                name="class-textinput"
                className="input input-bordered w-full "
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    type: Types.ClassName,
                    payload: {
                      name: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="desc-textarea" className="font-medium">
                Description
              </label>
              <textarea
                name="desc-textarea"
                className="textarea textarea-bordered w-full resize-none"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  dispatch({
                    type: Types.ClassDescription,
                    payload: {
                      description: e.target.value,
                    },
                  })
                }
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary px-12 text-white"
              disabled={isDisable}>
              {isLoading ? <LoadingButton /> : 'Save'}
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default CreateClassModal;
