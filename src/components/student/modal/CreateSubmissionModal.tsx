/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/button-has-type */
/* eslint-disable no-use-before-define */
import { Dialog, Transition } from '@headlessui/react';
import { Fragment, FC, FormEvent, createRef } from 'react';
import { useDropzone } from 'react-dropzone';
import { usePostSubmission } from '../../../hooks/useStudent';

type Props = {
  actionSave: (event: FormEvent<HTMLFormElement>) => void;
  modalAction: () => void;
  isOpen: boolean;
  title?: string;
  assignmentID: number;
};

const CreateSubmissionModal: FC<Props> = ({
  isOpen,
  actionSave,
  modalAction,
  title,
  assignmentID,
}) => {
  const { getRootProps, getInputProps, acceptedFiles } = useDropzone();
  const { postSubmission } = usePostSubmission(assignmentID);

  const dropzoneRef: any = createRef();

  console.log(actionSave);

  const openDialog = () => {
    // Note that the ref is set async,
    // so it might be null at some point
    if (dropzoneRef.current) {
      dropzoneRef.current.open();
    }
  };

  const files = acceptedFiles.map((file: any) => (
    <li key={file.path}>
      {file.path} - {file.size} bytes
    </li>
  ));

  return (
    <Transition appear show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={modalAction}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0">
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>

        <div className="fixed inset-0 overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95">
              <Dialog.Panel className="w-full max-w-2xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                <div className="felx flex-row justify-between items-center">
                  <button
                    type="button"
                    onClick={modalAction}
                    className="btn btn-sm btn-circle absolute right-2 top-2">
                    ✕
                  </button>
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900">
                    {title}
                  </Dialog.Title>
                </div>
                <label htmlFor="desc-textarea" className="font-medium">
                  Material File
                </label>

                <div
                  {...getRootProps({
                    className:
                      'mt-4 flex justify-center items-center p-20 flex-col space-y-5 w-full border-dashed border-2 border-indigo-300 rounded-lg',
                  })}>
                  <input type="file" {...getInputProps()} />
                  <p>Drag and drop your file here or</p>
                  <button
                    onClick={openDialog}
                    className="btn btn-ghost max-w-xs justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Choose a file
                  </button>
                  <ul>{files}</ul>
                </div>
                {acceptedFiles.length > 0 ? (
                  <button
                    type="button"
                    onClick={() => postSubmission(acceptedFiles[0])}
                    className="btn btn-ghost w-full mt-5 transition-all justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                    Upload Submission
                  </button>
                ) : null}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default CreateSubmissionModal;
