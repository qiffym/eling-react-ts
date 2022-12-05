import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '../../../components/header/Header';
import Stat from '../../../components/home/Stat';
import Loading2ND from '../../../components/loading/Loading2nd';
import { useFetch } from '../../../hooks/useFetch';

const DashboardAdmin = () => {
  const { isLoading, data } = useFetch('/api/admin/dashboard/users');

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <Header>Dashboard</Header>
      {isLoading ? <Loading2ND /> : <Stat statData={data} />}
    </>
  );
};

export default DashboardAdmin;
