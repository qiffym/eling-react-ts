import React, { ChangeEvent, FC, useEffect, useReducer, useState } from 'react';
import { useAddMaterial } from '../../hooks/useClasses';
import { addMaterialReducer } from '../../reducers/reducers';
import { Types } from '../../types/reducer-type';
import LoadingButton from '../loading/LoadingButton';

type Props = {
  actionSave: () => void;
  modalAction: () => void;
  idClasses: number;
  idContent: number;
};

const AddMaterialModal: FC<Props> = ({
  actionSave,
  modalAction,
  idClasses,
  idContent,
}) => {
  const { isLoading, addMaterial } = useAddMaterial();
  const [isDisable, setDisable] = useState(false);
  const [state, dispatch] = useReducer(addMaterialReducer, {
    title: '',
    file: null,
  });

  useEffect(() => {
    if (state.title === '' || state.file === null) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [state]);

  console.log(state.file);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box w-[40%] max-w-5xl">
          <div className="felx flex-row justify-between items-center">
            <button
              onClick={modalAction}
              className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
            <h3 className="text-lg font-bold">Tambah Materi</h3>
          </div>
          <form
            className="mt-4 flex flex-col space-y-5 w-full"
            onSubmit={e => {
              addMaterial(e, idClasses, idContent, {
                title: state.title,
                file: state.file,
              });
              actionSave();
            }}>
            <div className="flex flex-col space-y-1">
              <label htmlFor="class-textinput" className="font-medium">
                Nama Materi
              </label>
              <input
                type="text"
                placeholder="Bab 1"
                name="class-textinput"
                className="input input-bordered w-full "
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    type: Types.MaterialTitle,
                    payload: {
                      title: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="desc-textarea" className="font-medium">
                Description
              </label>
              <input
                type="file"
                className="file:cursor-pointer block w-full text-sm text-slate-500
                file:mr-4 file:py-2 file:px-4
                file:rounded-full file:border-0
                file:text-sm file:font-semibold
                file:bg-violet-50 file:text-violet-700
                hover:file:bg-violet-100 file:transition-all"
                onChange={(e: any) =>
                  dispatch({
                    type: Types.MaterialFile,
                    payload: {
                      file: e.target.files[0],
                    },
                  })
                }
              />
            </div>
            <button
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

export default AddMaterialModal;
