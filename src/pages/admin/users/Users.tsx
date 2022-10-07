import React, { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import Header from '../../../component/header/Header';
import Loading from '../../../component/loading/Loading';
import Table from '../../../component/admin/users/Table';
import { useFetch } from '../../../hooks/useFetch';
import Paginate from '../../../component/paginate/Paginate';

const Users = () => {
  const { isLoading, data } = useFetch('/api/admin/resources/users');
  const [searchData, setSearchData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postPerPage] = useState(3);

  const navigate = useNavigate();

  const searchUser = (value: string) => {
    setSearchData(
      data.filter((item: any) => {
        return item.name.toLowerCase().includes(value.toLowerCase());
      }),
    );
  };

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  const indexOfLastPost = currentPage * postPerPage;
  const indexOfFirstPost = indexOfLastPost - postPerPage;
  const currentPosts = searchData.slice(indexOfFirstPost, indexOfLastPost);

  const pagination = (pageNumber: any) => setCurrentPage(pageNumber);

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
          <button onClick={() => navigate('new')} className="btn btn-primary">
            Create User
          </button>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <Table userData={searchData} />
          </>
        )}
      </div>
    </>
  );
};

export default Users;
