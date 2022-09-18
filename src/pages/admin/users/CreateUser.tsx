import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../component/header/Header';

const CreateUser = () => {
  const navigate = useNavigate();

  return (
    <div className=" px-6 py-14">
      <Header>Create User</Header>
      <form className="flex flex-col space-y-3 bg-white p-4 py-8 rounded-lg">
        <label className="text-sm font-semibold text-slate-400">Role</label>
        <select className="select select-bordered w-full max-w-2xl bg-gray-50">
          <option disabled selected>
            -- Select Role --
          </option>
          <option>Admin</option>
          <option>Guru</option>
          <option>Siswa</option>
        </select>
        <label className="text-sm font-semibold text-slate-400">Name</label>
        <input
          type="text"
          className="input input-bordered w-full max-w-2xl bg-gray-50"
        />
        <label className="text-sm font-semibold text-slate-400">Username</label>
        <input
          type="text"
          className="input input-bordered w-full bg-gray-50 max-w-2xl"
        />
        <label className="text-sm font-semibold text-slate-400">Email</label>
        <input
          type="text"
          className="input input-bordered w-full bg-gray-50 max-w-2xl"
        />
        <label className="text-sm font-semibold text-slate-400">Password</label>
        <input
          type="text"
          className="input input-bordered w-full bg-gray-50 max-w-2xl"
        />
        <label className="text-sm font-semibold text-slate-400">
          Password Confirmation
        </label>
        <input
          type="text"
          className="input input-bordered w-full bg-gray-50 max-w-2xl"
        />
      </form>
      <div className="my-8 flex flex-row justify-end space-x-4">
        <button onClick={() => navigate(-1)} className="btn btn-ghost px-12">
          Cancel
        </button>
        <button
          onClick={() => console.log('new')}
          className="btn btn-primary px-12 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateUser;
