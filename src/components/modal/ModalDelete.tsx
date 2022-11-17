import { Dialog, Transition } from '@headlessui/react';
import { Fragment, FC } from 'react';

type Props = {
  isOpen: boolean;
  data?: string;
  actionDelete?: () => void;
  modalAction: () => void;
};

const ModalDelete: FC<Props> = ({
  isOpen,
  data,
  actionDelete,
  modalAction,
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
            <Dialog.Panel className="w-full max-w-lg transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
              <div className="felx flex-row justify-between items-center mb-8">
                <button
                  type="button"
                  onClick={modalAction}
                  className="btn btn-sm btn-circle absolute right-2 top-2">
                  ✕
                </button>
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900">
                  {data
                    ? `Are you sure want to delete ${data}? `
                    : 'Are you sure want to delete?'}
                </Dialog.Title>
              </div>
              <div className="flex items-center justify-end p-3 space-x-5">
                <button
                  className="btn btn-ghost"
                  type="button"
                  onClick={modalAction}>
                  Close
                </button>
                <button
                  className="btn btn-error text-white"
                  type="button"
                  onClick={actionDelete}>
                  Delete
                </button>
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </div>
    </Dialog>
  </Transition>
);
export default ModalDelete;
