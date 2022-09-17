import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../component/header/Header';
import Table from '../../component/users/Table';

const Users = () => {
  const navigate = useNavigate();

  return (
    <div className=" px-6 py-14">
      <Header>Users</Header>
      <div className="flex flex-row justify-between mb-4">
        <input
          type="text"
          placeholder="Search..."
          className="input input-bordered w-full max-w-xs"
        />
        <button onClick={() => navigate('new')} className="btn">
          Create User
        </button>
      </div>
      <Table view={() => navigate('user')} edit={() => navigate('edit')} />
    </div>
  );
};

export default Users;
