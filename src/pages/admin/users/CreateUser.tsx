import React, {
  ChangeEvent,
  MouseEvent,
  useEffect,
  useReducer,
  useState,
} from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../component/header/Header';
import LoadingButton from '../../../component/loading/LoadingButton';
import { useCreateUser } from '../../../hooks/useCreateUser';
import { createUserReducer } from '../../../reducers/reducers';
import { Types } from '../../../types/reducer-type';

//       state.role === 0 ||
// state.gender === '' ||
// state.name === '' ||
// state.email === '' ||
// state.password === '' ||
// state.confirm_password === ''

const CreateUser = () => {
  const navigate = useNavigate();
  const [isDisable, setDisable] = useState(false);
  const [isEquals, setEqualToPassword] = useState(false);
  const [state, dispatch] = useReducer(createUserReducer, {
    role: 0,
    gender: '',
    name: '',
    username: '',
    email: '',
    password: '',
    confirm_password: '',
  });
  const { isLoading, createUser } = useCreateUser();

  const cancelAction = (e: MouseEvent) => {
    e.preventDefault();
    navigate(-1);
  };

  useEffect(() => {
    if (
      state.role === 0 ||
      state.gender === '' ||
      state.name === '' ||
      state.email === '' ||
      state.password === '' ||
      state.confirm_password === ''
    ) {
      setDisable(true);
    } else if (isLoading) {
      setDisable(true);
    } else {
      setDisable(false);
    }

    if (state.confirm_password === state.password) {
      setEqualToPassword(true);
    } else {
      setEqualToPassword(false);
      setDisable(true);
    }
  }, [state, isLoading]);

  console.log(state.confirm_password);

  console.log(isEquals);

  return (
    <div className=" px-6 py-14">
      <Header>Create User</Header>
      <form
        onSubmit={(e) => {
          createUser(e, {
            role: state.role,
            name: state.name,
            gender: state.gender,
            email: state.email,
            username: state.username,
            password: state.password,
          });
        }}
      >
        <div className="flex flex-col space-y-3 bg-white p-4 py-8 rounded-lg">
          <label className="text-sm font-semibold text-slate-400">Role</label>
          <select
            defaultValue={'DEFAULT'}
            onChange={(e: ChangeEvent<HTMLSelectElement>) =>
              dispatch({
                type: Types.Role,
                payload: {
                  role: Number(e.target.value),
                },
              })
            }
            className="select select-bordered w-full max-w-2xl bg-gray-50"
          >
            <option value="DEFAULT" disabled>
              -- Select Role --
            </option>
            <option value="1">Admin</option>
            <option value="2">Guru</option>
            <option value="3">Siswa</option>
          </select>
          <label className="text-sm font-semibold text-slate-400">Name</label>
          <input
            type="text"
            className="input input-bordered w-full max-w-2xl bg-gray-50"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: Types.Name,
                payload: {
                  name: e.target.value,
                },
              })
            }
          />
          <label className="text-sm font-semibold text-slate-400">Gender</label>
          <div className="flex flex-row space-x-20">
            <div className="flex flex-row space-x-2">
              <input
                type="radio"
                name="radio-2"
                className="radio radio-primary"
                value="L"
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    type: Types.Gender,
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
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    type: Types.Gender,
                    payload: {
                      gender: e.target.value,
                    },
                  })
                }
              />
              <p>Perempuan</p>
            </div>
          </div>
          <label className="text-sm font-semibold text-slate-400">
            Username
          </label>
          <input
            type="text"
            className="input input-bordered w-full bg-gray-50 max-w-2xl"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: Types.Username,
                payload: {
                  username: e.target.value,
                },
              })
            }
          />
          <label className="text-sm font-semibold text-slate-400">Email</label>
          <input
            type="email"
            className="input input-bordered w-full bg-gray-50 max-w-2xl"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: Types.Email,
                payload: {
                  email: e.target.value,
                },
              })
            }
          />
          <label className="text-sm font-semibold text-slate-400">
            Password
          </label>
          <input
            type="password"
            className="input input-bordered w-full bg-gray-50 max-w-2xl"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: Types.Password,
                payload: {
                  password: e.target.value,
                },
              })
            }
          />
          <label className="text-sm font-semibold text-slate-400">
            Password Confirmation
          </label>
          <input
            type="password"
            className={`input input-bordered w-full bg-gray-50 max-w-2xl ${
              isEquals ? '' : 'input-error'
            }`}
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              dispatch({
                type: Types.ConfirmPassword,
                payload: {
                  confirm_password: e.target.value,
                },
              })
            }
          />
        </div>
        <div className="my-8 flex flex-row justify-end space-x-4">
          <button onClick={cancelAction} className="btn btn-ghost px-12">
            Cancel
          </button>
          <button
            className="btn btn-primary px-12 text-white"
            disabled={isDisable}
          >
            {isLoading ? <LoadingButton /> : 'Save'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateUser;
