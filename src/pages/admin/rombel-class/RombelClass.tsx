import React, { ChangeEvent, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import RombelTable from '../../../component/admin/rombel/RombelTable';

import Header from '../../../component/header/Header';
import Loading from '../../../component/loading/Loading';
import AddRombelModal from '../../../component/modal/AddRombelModal';
import { useFetch } from '../../../hooks/useFetch';

const RombelClass = () => {
  const { isLoading, data } = useFetch('/api/admin/resources/rombel-classes');
  const [searchData, setSearchData] = useState([]);
  const [openModal, setOpenModal] = useState(false);

  const searchUser = (value: string) => {
    setSearchData(
      data.filter(
        (item: any) =>
          item.name.toLowerCase().includes(value.toLowerCase()) ||
          item.grade.includes(value),
      ),
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
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="btn btn-primary">
            Add Rombel
          </button>
        </div>
        {isLoading ? <Loading /> : <RombelTable rombelData={searchData} />}
        {openModal ? (
          <AddRombelModal modalAction={() => setOpenModal(false)} />
        ) : null}
      </div>
    </>
  );
};

export default RombelClass;
