import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/header/Header';

const EditUser = () => {
  const navigate = useNavigate();

  return (
    <div className=" px-6 py-14">
      <Header>Edit User</Header>
      <form className="flex flex-col bg-white p-4 py-8 rounded-lg">
        <div className="flex flex-col space-y-3 mb-6">
          <label className="text-sm font-semibold text-slate-400">Name</label>
          <input
            type="text"
            className="input input-bordered w-full max-w-2xl bg-gray-50"
          />
          <label className="text-sm font-semibold text-slate-400">
            Username
          </label>
          <input
            type="text"
            className="input input-bordered w-full bg-gray-50 max-w-2xl"
          />
          <label className="text-sm font-semibold text-slate-400">Email</label>
          <input
            type="text"
            className="input input-bordered w-full bg-gray-50 max-w-2xl mb-10"
          />
        </div>
        <label className="text-sm font-semibold text-slate-400 mb-3">
          Reset Password
        </label>
        <div className="flex flex-col border rounded-lg p-4 space-y-3">
          <label className="text-sm font-semibold text-slate-400">
            Password
          </label>
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
        </div>
      </form>
      <div className="my-8 flex flex-row justify-end space-x-4">
        <button onClick={() => navigate(-1)} className="btn btn-ghost px-12">
          Cancel
        </button>
        <button
          onClick={() => console.log('new')}
          className="btn btn-accent px-12 text-white"
        >
          Save
        </button>
      </div>
    </div>
  );
};

export default EditUser;
