import React from 'react';
import { useNavigate } from 'react-router-dom';
import Header from '../../../component/header/Header';
import Loading from '../../../component/loading/Loading';
import Table from '../../../component/users/Table';
import { useFetch } from '../../../hooks/useFetch';

const Users = () => {
  const { isLoading, data } = useFetch('/api/admin/resources/users');
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
        <button onClick={() => navigate('new')} className="btn btn-primary">
          Create User
        </button>
      </div>
      {isLoading ? <Loading /> : <Table userData={data} />}
    </div>
  );
};

export default Users;
