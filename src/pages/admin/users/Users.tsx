import React, { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import { HiPlusCircle } from 'react-icons/hi';
import Header from '../../../components/header/Header';
import Loading from '../../../components/loading/Loading';
import Table from '../../../components/admin/users/Table';
import { useFetch } from '../../../hooks/useFetch';

const Users = () => {
  const { isLoading, data } = useFetch('/api/admin/resources/users');
  const [searchData, setSearchData] = useState([]);
  // const [currentPage, setCurrentPage] = useState(1);
  // const [postPerPage] = useState(3);

  const navigate = useNavigate();

  const searchUser = (value: string) => {
    setSearchData(
      data.filter(
        (item: any) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.username.toLowerCase().includes(value.toLowerCase()) ||
          item.email.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  // const indexOfLastPost = currentPage * postPerPage;
  // const indexOfFirstPost = indexOfLastPost - postPerPage;
  // const currentPosts = searchData.slice(indexOfFirstPost, indexOfLastPost);

  // const pagination = (pageNumber: any) => setCurrentPage(pageNumber);

  return (
    <>
      <Helmet>
        <title>Users</title>
      </Helmet>
      <div className="px-6 py-14">
        <Header>Users</Header>
        <div className="flex flex-row justify-between mb-4">
          <input
            type="text"
            placeholder="Search..."
            className="input input-bordered w-full max-w-xs"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              searchUser(e.target.value)
            }
          />
          <button
            type="button"
            onClick={() => navigate('new')}
            className="btn btn-primary">
            <HiPlusCircle className="mr-1 text-lg" />
            Add User
          </button>
        </div>
        {isLoading ? <Loading /> : <Table userData={searchData} />}
      </div>
    </>
  );
};

export default Users;
