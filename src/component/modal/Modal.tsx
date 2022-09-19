import React from 'react';

const Modal = () => {
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">Create Class</h3>
          <form className="flex flex-col mt-2 space-y-3">
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full "
            />
            <input
              type="text"
              placeholder="Type here"
              className="input input-bordered w-full"
            />

            <button
              onClick={(e) => {
                e.preventDefault();
              }}
              className="btn btn-primary"
              type="submit"
            >
              Save
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Modal;
