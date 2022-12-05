import React, { FC, ChangeEvent, useState, useEffect } from 'react';
import useUpdatePassword from '../../hooks/useUpdatePassword';

type Props = {
  actionSave: () => void;
  modalAction: () => void;
};
const ChangePasswordModal: FC<Props> = ({ actionSave, modalAction }) => {
  const { updatePassword, message, errMessage } = useUpdatePassword();
  const [isDisable, setDisable] = useState(false);
  const [isEquals, setEqualToPassword] = useState(false);
  const [input, setInput] = useState({
    password: '',
    new_password: '',
    new_password_confirmation: '',
  });

  useEffect(() => {
    if (
      input.password === '' ||
      input.new_password === '' ||
      input.new_password_confirmation === ''
    ) {
      setDisable(true);
    } else {
      setDisable(false);
    }

    if (input.new_password_confirmation === input.new_password) {
      setEqualToPassword(true);
    } else {
      setEqualToPassword(false);
      setDisable(true);
    }
  }, [input]);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box w-[30%] max-w-5xl">
          <div className="felx flex-row justify-between items-center">
            <button
              type="button"
              className="btn btn-sm btn-circle btn-error text-white absolute right-2 top-2"
              onClick={modalAction}>
              ✕
            </button>
            <h3 className="text-lg font-bold">Form Ganti Password</h3>
          </div>
          <form
            onSubmit={(e) => {
              updatePassword(
                e,
                input.password,
                input.new_password,
                input.new_password_confirmation,
              );
              actionSave();
            }}
            className="mt-4 flex flex-col space-y-5 w-full">
            {/* Success Message */}
            <div
              className={`flex justify-center items-center ${
                message ? 'block' : 'hidden'
              }`}>
              <span className="text-teal-600">{message} </span>
            </div>

            <div className="flex flex-col space-y-3">
              {/* Password */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  name="password"
                  onChange={handleChange}
                  placeholder="Old Password"
                  className={`input input-bordered w-full ${
                    errMessage ? 'input-error' : null
                  }`}
                />
                {/* Error Message */}
                <label className={`label ${errMessage ? 'block' : 'hidden'}`}>
                  <span className="text-error italic">
                    &ldquo; {errMessage} &ldquo;
                  </span>
                </label>
              </div>
              {/* New Password */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">New Password</span>
                </label>
                <input
                  type="password"
                  name="new_password"
                  minLength={5}
                  maxLength={12}
                  onChange={handleChange}
                  placeholder="New Password"
                  className="input input-bordered w-full"
                />
              </div>
              {/* New Password Confirmation */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">New Password Confirmation</span>
                </label>
                <input
                  type="password"
                  minLength={5}
                  maxLength={12}
                  name="new_password_confirmation"
                  onChange={handleChange}
                  placeholder="New Password Confirmation"
                  className={`input input-bordered w-full ${
                    isEquals ? '' : 'input-error'
                  }`}
                />
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
export default ChangePasswordModal;
