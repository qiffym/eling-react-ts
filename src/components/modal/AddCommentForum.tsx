import { Dialog, Transition } from '@headlessui/react';
import { Fragment, FC, ChangeEvent, FormEvent } from 'react';

import LoadingButton from '../loading/LoadingButton';

type Props = {
  actionSave: (event: FormEvent<HTMLFormElement>) => void;
  modalAction: () => void;
  onChange: Function;
  isOpen: boolean;
  isLoading: boolean;
  title: string;
};

const AddCommentForum: FC<Props> = ({
  isOpen,
  actionSave,
  modalAction,
  onChange,
  isLoading,
  title,
}) => (
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
              <form
                onSubmit={actionSave}
                className="mt-4 flex flex-col space-y-5 w-full">
                <textarea
                  name="comment"
                  className="textarea textarea-bordered w-full h-52 resize-none"
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    onChange(e.target.value)
                  }
                />

                <button
                  type="submit"
                  className="btn btn-ghost inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2">
                  {isLoading ? <LoadingButton /> : 'Send'}
                </button>
              </form>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);
export default AddCommentForum;
