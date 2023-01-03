/* eslint-disable jsx-a11y/no-autofocus */
import React, { ChangeEvent, FC, useEffect, useReducer, useState } from 'react';
import { useEditClass } from '../../hooks/useClasses';
import { createClassReducer } from '../../reducers/reducers';
import { Types } from '../../types/reducer-type';
import LoadingButton from '../loading/LoadingButton';

type Props = {
  classesRombelID: number;
  classesID?: number;
  classesName?: string;
  classesDesc?: string;
  focusInputName?: boolean;
  focusInputDesc?: boolean;
  actionSave: () => void;
  modalAction: () => void;
};

const EditClassModal: FC<Props> = ({
  classesRombelID,
  classesID,
  classesName,
  classesDesc,
  focusInputName,
  focusInputDesc,
  actionSave,
  modalAction,
}) => {
  const { loadingClass, updateClass } = useEditClass();
  const [isDisable, setDisable] = useState(false);
  const [state, dispatch] = useReducer(createClassReducer, {
    name: classesName!,
    description: classesDesc!,
    rombel_class_id: classesRombelID,
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
            <h3 className="text-lg font-bold">Edit Kelas</h3>
          </div>
          <form
            onSubmit={(e) => {
              updateClass(e, classesID, {
                name: state.name,
                rombel_class_id: state.rombel_class_id,
                description: state.description,
              });
              actionSave();
            }}
            className="mt-4 flex flex-col space-y-5 w-full">
            <div className="flex flex-col space-y-1">
              <label htmlFor="romble-textinput" className="font-medium">
                Rombongan Belajar
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
                defaultValue={state.rombel_class_id}
                className="select select-bordered w-full ">
                <option value="DEFAULT" disabled>
                  -- Pilih Rombel --
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
                Nama Kelas Online
              </label>
              <input
                autoFocus={focusInputName}
                type="text"
                placeholder="Pemrograman Dasar"
                name="class-textinput"
                defaultValue={state.name}
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
                Deskripsi
              </label>
              <textarea
                autoFocus={focusInputDesc}
                rows={4}
                name="desc-textarea"
                defaultValue={state.description}
                className="textarea textarea-bordered w-full"
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
              {loadingClass ? <LoadingButton /> : 'Save'}
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default EditClassModal;
