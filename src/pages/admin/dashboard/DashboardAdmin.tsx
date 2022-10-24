import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../../component/header/Header';
import Stat from '../../../component/home/Stat';
import Loading from '../../../component/loading/Loading';
import { useFetch } from '../../../hooks/useFetch';

const DashboardAdmin = () => {
  const { isLoading, data } = useFetch('/api/admin/dashboard/users');

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Header>Dashboard</Header>
      {isLoading ? <Loading /> : <Stat statData={data} />}
    </>
  );
}

export default DashboardAdmin;
