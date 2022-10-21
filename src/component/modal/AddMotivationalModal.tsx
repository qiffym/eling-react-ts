import React, { FC, useState } from 'react';

type Props = {
  actionSave: () => void;
  modalAction: () => void;
};

const AddMotivationalModal: FC<Props> = ({ actionSave, modalAction }) => {
  // const { isLoading, createClass } = useCreateClass();
  const [isDisable, setDisable] = useState(false);
  // const [state, dispatch] = useReducer(createClassReducer, {
  //   title: '',
  //   body: '',
  //   from: '',
  //   active: false,
  // });

  // useEffect(() => {
  //   if (state.name === '') {
  //     setDisable(true);
  //   } else {
  //     setDisable(false);
  //   }
  // }, [state]);
  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box w-[40%] max-w-5xl">
          <div className="felx flex-row justify-between items-center">
            <button
              className="btn btn-sm btn-circle btn-error text-white absolute right-2 top-2"
              onClick={modalAction}>
              ✕
            </button>
            <h3 className="text-lg font-bold">Tambah Kata Motivasi</h3>
          </div>
          <form className="mt-4 flex flex-col space-y-5 w-full">
            <div className="flex flex-col space-y-3">
              {/* Title */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  placeholder="Kata Motivasi"
                  className="input input-bordered w-full"
                />
              </div>
              {/* Body */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Body</span>
                </label>
                <textarea
                  className="textarea textarea-bordered h-24"
                  placeholder="Apa katanya?"></textarea>
              </div>
              {/* Grade */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">From</span>
                </label>
                <input
                  type="text"
                  placeholder="Moh. Hatta"
                  className="input input-bordered w-full"
                />
              </div>
              {/* Active */}
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Active / Deactive</span>
                  <input type="checkbox" className="toggle toggle-primary" />
                </label>
              </div>
            </div>
            <hr />
            <button className="btn btn-primary px-12 text-white">Save</button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
    </>
  );
};

export default AddMotivationalModal;
