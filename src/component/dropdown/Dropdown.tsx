import { Menu, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { HiDotsVertical, HiPencilAlt, HiTrash } from 'react-icons/hi';

type Props = {
  onEdit: () => void;
  onDelete: () => void;
};

export default function DropdownOptions({ onEdit, onDelete }: Props) {
  return (
    <div className="text-right overflow-visible z-50">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="btn btn-ghost inline-flex w-full justify-center rounded-md  px-4 py-2 text-sm font-medium text-black hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            <HiDotsVertical />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95">
          <Menu.Items className="absolute right-0 mt-2 w-40 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={onEdit}
                    className={`${
                      active ? 'bg-primary text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {active ? <HiPencilAlt /> : <HiPencilAlt />}
                    Edit
                  </button>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type="button"
                    onClick={onDelete}
                    className={`${
                      active ? 'bg-error text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}>
                    {active ? <HiTrash /> : <HiTrash />}
                    Delete
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
