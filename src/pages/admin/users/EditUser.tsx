import React, {
  ChangeEvent,
  useReducer,
  MouseEvent,
  useEffect,
  useState,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Header from '../../../components/header/Header';
import LoadingButton from '../../../components/loading/LoadingButton';
import Toast from '../../../components/toast/Toast';
import ToastError from '../../../components/toast/ToastError';
import useUpdateUser from '../../../hooks/useUpdateUser';
import { updateUserReducer } from '../../../reducers/reducers';
import { Types } from '../../../types/reducer-type';
import { UserType } from '../../../types/user-type';

type LocationParams = {
  user: UserType;
};

const EditUser = () => {
  const navigate = useNavigate();
  const { isLoading, updateUser, toast, errorToast, message } = useUpdateUser();
  const [isDisable, setDisable] = useState(false);
  const { user } = useLocation().state as LocationParams;
  const [state, dispatch] = useReducer(updateUserReducer, {
    name: user.name,
    username: user.username,
    email: user.email,
    gender: user.gender,
    religion: user.religion,
    birthday: user.birthday,
    status: 1,
    address: user.address,
    telpon: user.telpon,
    password: '',
    confirm_password: '',
  });

  const cancelAction = (e: MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    if (isLoading) {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [isLoading]);

  return (
    <div className=" px-6 py-14">
      {toast ? (
        <div className="px-5">
          <Toast desc={`${message}`} />
        </div>
      ) : null}
      {errorToast ? (
        <div className="px-5">
          <ToastError desc={`${message} please try again!`} />
        </div>
      ) : null}

      <Header>Edit User: {user.name}</Header>
      <form
        onSubmit={(e) => {
          updateUser(e, user.id, {
            name: state.name,
            username: state.username,
            email: state.email,
            gender: state.gender,
            religion: state.religion,
            birthday: state.birthday,
            status: state.status,
            address: state.address,
            telpon: state.telpon,
            password: state.password,
            confirm_password: state.confirm_password,
          });
        }}>
        <div className="flex flex-col space-y-3 bg-white p-4 py-8 rounded-lg">
          <div className="flex flex-col space-y-3 mb-6">
            {/* Name */}
            <label className="text-sm font-semibold text-slate-400">
              *Name
            </label>
            <input
              type="text"
              defaultValue={user.name}
              required
              className="input input-bordered w-full max-w-2xl bg-gray-50"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: Types.UpdateName,
                  payload: {
                    name: e.target.value,
                  },
                })
              }
            />

            {/* Gender */}
            <label className="text-sm font-semibold text-slate-400">
              *Gender
            </label>
            <div className="flex flex-row space-x-20">
              <div className="flex flex-row space-x-2">
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary"
                  value="L"
                  defaultChecked={user.gender === 'L'}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch({
                      type: Types.UpdateGender,
                      payload: {
                        gender: e.target.value,
                      },
                    })
                  }
                />
                <p>Laki laki</p>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="radio"
                  name="radio-2"
                  className="radio radio-primary"
                  value="P"
                  defaultChecked={user.gender === 'P'}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch({
                      type: Types.UpdateGender,
                      payload: {
                        gender: e.target.value,
                      },
                    })
                  }
                />
                <p>Perempuan</p>
              </div>
            </div>

            {/* Username */}
            <label className="text-sm font-semibold text-slate-400">
              *Username
            </label>
            <input
              type="text"
              minLength={3}
              maxLength={50}
              required
              defaultValue={user.username}
              className="input input-bordered w-full bg-gray-50 max-w-2xl"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: Types.UpdateUsername,
                  payload: {
                    username: e.target.value,
                  },
                })
              }
            />

            {/* Email */}
            <label className="text-sm font-semibold text-slate-400">
              Email
            </label>
            <input
              type="email"
              defaultValue={user.email}
              className="input input-bordered w-full bg-gray-50 max-w-2xl mb-10"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: Types.UpdateEmail,
                  payload: {
                    email: e.target.value,
                  },
                })
              }
            />

            {/* Address */}
            <label className="text-sm font-semibold text-slate-400">
              Address
            </label>
            <textarea
              className="textarea textarea-bordered w-2/3 resize-none"
              defaultValue={user.address}
              placeholder="JL. Soekarno-Hatta, No.3"
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                dispatch({
                  type: Types.UpdateAddress,
                  payload: {
                    address: e.target.value,
                  },
                })
              }
            />

            {/* Religion */}
            <label className="text-sm font-semibold text-slate-400">
              Religion
            </label>
            <select
              defaultValue={user.religion === null ? 'DEFAULT' : user.religion}
              onChange={(e: ChangeEvent<HTMLSelectElement>) => {
                dispatch({
                  type: Types.UpdateReligion,
                  payload: {
                    religion: e.target.value,
                  },
                });
              }}
              className="select select-bordered w-full max-w-2xl bg-gray-50">
              <option value="DEFAULT" disabled>
                -- Select Religion --
              </option>
              <option value="Islam">Islam</option>
              <option value="Kristen">Kristen</option>
              <option value="Katolik">Katolik</option>
              <option value="Hindu">Hindu</option>
              <option value="Buddha">Buddha</option>
              <option value="Konghucu">Konghucu</option>
            </select>

            {/* Birthday */}
            <label className="text-sm font-semibold text-slate-400">
              Birthday
            </label>
            <input
              type="date"
              defaultValue={user.birthday}
              max="2021-12-31"
              className="input input-bordered w-full bg-gray-50 max-w-2xl mb-10"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: Types.UpdateBirthday,
                  payload: {
                    birthday: e.target.value,
                  },
                })
              }
            />

            {/* Telpon */}
            <label className="text-sm font-semibold text-slate-400">
              Telpon
            </label>
            <input
              type="tel"
              defaultValue={user.telpon}
              pattern="[0-9]{4}-[0-9]{4}-[0-9]{4}"
              maxLength={14}
              placeholder="08xx-xxxx-xxxx"
              autoCorrect="on"
              className="input input-bordered w-full bg-gray-50 max-w-2xl mb-10"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: Types.UpdateTelpon,
                  payload: {
                    telpon: e.target.value,
                  },
                })
              }
            />
            <small>* Telpon Format: 0812-4567-7890</small>

            {/* Status */}
            {/* <label className="text-sm font-semibold text-slate-400">
              Status
            </label>
            <div className="flex flex-row space-x-20">
              <div className="flex flex-row space-x-2">
                <input
                  type="radio"
                  name="radio-status"
                  className="radio radio-primary"
                  value={1}
                  defaultChecked={user.status === 'Active'}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch({
                      type: Types.UpdateStatus,
                      payload: {
                        status: Number(e.target.value),
                      },
                    })
                  }
                />
                <p>Active</p>
              </div>
              <div className="flex flex-row space-x-2">
                <input
                  type="radio"
                  name="radio-status"
                  className="radio radio-primary"
                  value={0}
                  defaultChecked={user.status === 'Deactive'}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    dispatch({
                      type: Types.UpdateStatus,
                      payload: {
                        status: Number(e.target.value),
                      },
                    })
                  }
                />
                <p>Inactive</p>
              </div>
            </div> */}
          </div>

          {/* <label className="text-sm font-semibold text-slate-400 mb-3">
            Reset Password
          </label>
          <div className="flex flex-col border rounded-lg p-4 space-y-3">
            <label className="text-sm font-semibold text-slate-400">
              New Password
            </label>
            <input
              type="password"
              autoComplete="on"
              name="password"
              className="input input-bordered w-full bg-gray-50 max-w-2xl"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: Types.UpdatePassword,
                  payload: {
                    password: e.target.value,
                  },
                })
              }
            />
            <label className="text-sm font-semibold text-slate-400">
              New Password Confirmation
            </label>
            <input
              type="password"
              autoComplete="on"
              name="confirm_password"
              className="input input-bordered w-full bg-gray-50 max-w-2xl"
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                dispatch({
                  type: Types.UpdateConfirmPassword,
                  payload: {
                    confirm_password: e.target.value,
                  },
                })
              }
            />
          </div> */}
        </div>
        <div className="my-8 flex flex-row justify-end space-x-4">
          <button
            type="button"
            onClick={cancelAction}
            className="btn btn-ghost px-12">
            Cancel
          </button>
          <button
            type="submit"
            className="btn btn-primary px-12 text-white"
            disabled={isDisable}>
            {isLoading ? <LoadingButton /> : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditUser;
