/* eslint-disable react/jsx-props-no-spreading */
import React, {
  ChangeEvent,
  createRef,
  FC,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useDropzone } from 'react-dropzone';
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
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  const [isDisable, setDisable] = useState(false);
  const [state, dispatch] = useReducer(addMaterialReducer, {
    title: '',
    file: null,
  });

  const dropzoneRef: any = createRef();

  const openDialog = () => {
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  useEffect(() => {
    if (state.title === '' || acceptedFiles.length === 0) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [state, acceptedFiles.length]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box w-[50%] max-w-5xl">
          <div className="felx flex-row justify-between items-center">
            <button
              type="button"
              onClick={modalAction}
              className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
            <h3 className="text-lg font-bold">Tambah Materi</h3>
          </div>
          <form
            className="mt-4 flex flex-col space-y-5 w-full"
            onSubmit={(e) => {
              addMaterial(e, idClasses, idContent, {
                title: state.title,
                file: acceptedFiles[0],
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
                Material File
              </label>
              {/* <input
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
              /> */}
              <div
                {...getRootProps({
                  className:
                    'mt-4 flex justify-center items-center p-20 flex-col space-y-5 w-full border-dashed border-2 border-indigo-300 rounded-lg',
                })}>
                <input type="file" {...getInputProps()} />
                <p>Drag and drop your file here or</p>
                <button
                  type="button"
                  onClick={openDialog}
                  className="btn btn-ghost max-w-xs justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                  Choose a file
                </button>
                <ul>{files}</ul>
              </div>
              {/* {acceptedFiles.length > 0 ? (
                <button
                  type="button"
                  onClick={() => postSubmission(acceptedFiles[0])}
                  className="btn btn-ghost w-full mt-5 transition-all justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                  Upload Submission
                </button>
              ) : null} */}
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

export default AddMaterialModal;
