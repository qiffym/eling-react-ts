import React, { ChangeEvent, FC, useState, useEffect, FormEvent } from 'react';
import { useAdminAddMotivationalWord } from '../../hooks/useAdmin';

type Props = {
  actionSave: () => void;
  modalAction: () => void;
};

const AddMotivationalModal: FC<Props> = ({ actionSave, modalAction }) => {
  const addAdminMotivationalWord = useAdminAddMotivationalWord();
  const [isDisable, setDisable] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState(false);
  const [input, setInput] = useState({
    title: '',
    body: '',
    from: '',
    active: 1,
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement> | ChangeEvent<HTMLTextAreaElement>,
  ) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  const submitAdd = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (input.title) {
      setMessage('Tidak boleh menggunakan angka atau spesial karakter');
      setError(true);
    } else {
      addAdminMotivationalWord(
        input.title,
        input.body,
        input.from,
        input.active,
      );
      actionSave();
    }
  };

  useEffect(() => {
    if (input.title === '' || input.body === '' || input.from === '') {
      setDisable(true);
      setError(false);
      setMessage('');
    } else {
      setDisable(false);
    }
  }, [input]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box w-[40%] max-w-5xl">
          <div className="felx flex-row justify-between items-center">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-error text-white absolute right-2 top-2"
              onClick={modalAction}>
              ✕
            </button>
            <h3 className="text-lg font-bold">Tambah Kata Motivasi</h3>
          </div>
          <form
            onSubmit={submitAdd}
            className="mt-4 flex flex-col space-y-5 w-full">
            <div className="flex flex-col space-y-3">
              {/* Title */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Title</span>
                </label>
                <input
                  type="text"
                  name="title"
                  onChange={handleChange}
                  placeholder="Kata Motivasi"
                  className={`input input-bordered w-full ${
                    error ? 'border-red-500' : ''
                  }`}
                />
                <p className=" text-red-500">{message}</p>
              </div>
              {/* Body */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Body</span>
                </label>
                <textarea
                  name="body"
                  onChange={handleChange}
                  className="textarea textarea-bordered h-24"
                  placeholder="Apa katanya?"
                />
              </div>
              {/* From */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">From</span>
                </label>
                <input
                  type="text"
                  name="from"
                  onChange={handleChange}
                  placeholder="Moh. Hatta"
                  className="input input-bordered w-full"
                />
              </div>
              {/* Active */}
              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Active / Deactive</span>
                  <input
                    name="active"
                    onChange={handleChange}
                    type="checkbox"
                    value={1}
                    checked
                    className="toggle toggle-primary"
                  />
                </label>
              </div>
            </div>
            <hr />
            <button
              disabled={isDisable}
              type="submit"
              className="btn btn-primary px-12 text-white">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};
export default AddMotivationalModal;
