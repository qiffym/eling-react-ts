import React, { ChangeEvent, useContext, useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import { HiPlusCircle } from 'react-icons/hi';
// import { useNavigate } from 'react-router-dom';
import MotivationalWordsTable from '../../../components/admin/motivational-words/MotivationalWordsTable';
import Header from '../../../components/header/Header';
import Loading2ND from '../../../components/loading/Loading2nd';
import AddMotivationalModal from '../../../components/modal/AddMotivationalModal';
import { MyContext } from '../../../context/context';
import { useFetch } from '../../../hooks/useFetch';
import { Types } from '../../../types/reducer-type';

const MotivationalWords = () => {
  const { isLoading, data } = useFetch(
    '/api/admin/resources/motivational-words',
  );
  const [searchData, setSearchData] = useState([]);
  // const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const { dispatch } = useContext(MyContext);

  const searchUser = (value: string) => {
    setSearchData(
      data.filter(
        (item: any) =>
          item.title.toLowerCase().includes(value.toLowerCase()) ||
          item.body.toLowerCase().includes(value.toLowerCase()) ||
          item.from.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    setSearchData(data);
  }, [data]);

  return (
    <>
      <Helmet>
        <title>Kelola Kata Motivasi</title>
      </Helmet>
      <div className="px-6 py-14">
        <Header>Motivational Words</Header>
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
            <HiPlusCircle className="mr-1 text-lg" />
            Add Motivational
          </button>
        </div>
        {isLoading ? (
          <Loading2ND />
        ) : (
          <MotivationalWordsTable motivationalData={searchData} />
        )}
        {openModal ? (
          <AddMotivationalModal
            actionSave={() => {
              setOpenModal(false);
              dispatch({
                type: Types.AddAssignmentSuccess,
                payload: {
                  success: false,
                },
              });
            }}
            modalAction={() => setOpenModal(false)}
          />
        ) : null}
      </div>
    </>
  );
};

export default MotivationalWords;
