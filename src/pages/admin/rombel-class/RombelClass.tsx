import React, { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { useNavigate } from 'react-router-dom';
import RombelTable from '../../../component/admin/rombel/RombelTable';

import Header from '../../../component/header/Header';
import Footer from '../../../component/layout/Footer';
import Loading from '../../../component/loading/Loading';
import { useFetch } from '../../../hooks/useFetch';

const RombelClass = () => {
  const { isLoading, data } = useFetch('/api/admin/resources/rombel-classes');
  const [searchData, setSearchData] = useState([]);
  const navigate = useNavigate();

  const searchUser = (value: string) => {
    setSearchData(
      data.filter((item: any) => {
        return (
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.grade.includes(value)
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
        <title>Kelola Rombel</title>
      </Helmet>
      <div className="px-6 py-14">
        <Header>Rombel Classes</Header>
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
            Add Rombel
          </button>
        </div>
        {isLoading ? <Loading /> : <RombelTable rombelData={searchData} />}
      </div>
    </>
  );
};

export default RombelClass;
