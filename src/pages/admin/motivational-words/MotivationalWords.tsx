import React, { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import MotivationalWordsTable from '../../../component/admin/motivational-words/MotivationalWordsTable';
import Header from '../../../component/header/Header';
import Loading from '../../../component/loading/Loading';
import { useFetch } from '../../../hooks/useFetch';

const MotivationalWords = () => {
  const { isLoading, data } = useFetch(
    '/api/admin/resources/motivational-words',
  );
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  const searchUser = (value: string) => {
    setSearchData(
      data.filter((item: any) => {
        return (
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.body.toLowerCase().includes(value.toLowerCase()) ||
          item.from.toLowerCase().includes(value.toLowerCase())
        );
      }),
    );
  };

  useEffect(() => {
    setSearchData(data);
  }, [data]);

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
            Add Motivational
          </button>
        </div>
        {isLoading ? (
          <Loading />
        ) : (
          <MotivationalWordsTable motivationalData={searchData} />
        )}
      </div>
    </>
  );
};

export default MotivationalWords;
