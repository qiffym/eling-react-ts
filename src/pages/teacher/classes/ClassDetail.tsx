import React, { useContext, useState } from 'react';
import { Helmet } from 'react-helmet';
import { HiChevronLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBarClass from '../../../component/layout/AppBarClass';
import Loading from '../../../component/loading/Loading';
import EditClassModal from '../../../component/modal/EditClassModal';
import AboutClass from '../../../component/teacher/home/online_class/AboutClass';
import { ClassContent } from '../../../component/teacher/home/online_class/ClassContent';
import { MyContext } from '../../../context/context';
import { useFetch } from '../../../hooks/useFetch';
import { ClassesDetailType, ClassesType } from '../../../types/class-type';
import { Types } from '../../../types/reducer-type';

const ClassDetail = () => {
  const [tab, setTab] = useState(0);
  const { id } = useLocation().state as ClassesType;
  const { isLoading, data } = useFetch(`/api/teacher/online-classes/${id}`);
  const [openEditName, setOpenEditName] = useState(false);
  const { dispatch } = useContext(MyContext);
  const navigate = useNavigate();
  const classData: ClassesDetailType = data;

  return (
    <>
      <Helmet>
        <title>{classData.name}</title>
      </Helmet>
      <AppBarClass headerTitle={classData.name} />
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pt-20">
          {/* Section Title Class */}
          <section id="title-class" className="mb-5">
            <div className="container space-y-5 mx-auto bg-primary w-11/12 px-5 py-3 rounded-box">
              <div className="flex flex-row items-center space-x-2">
                <button
                  type="button"
                  onClick={() => navigate('/')}
                  className="btn btn-ghost btn-square h-8 w-12">
                  <HiChevronLeft className="text-2xl" />
                </button>
                <h3 className="text-lg font-medium">{classData.rombel_name}</h3>
              </div>

              <h2
                onClick={() => setOpenEditName(true)}
                className="text-6xl w-max btn-ghost px-3 rounded-md font-bold mb-2 cursor-pointer transition-all duration-75">
                {classData?.name}
              </h2>
              <div className="flex items-center space-x-2">
                <div className="avatar">
                  <div className="w-8 rounded-full ring ring-slate-100">
                    <img src={classData.teacher?.avatar} alt="teacher_avatar" />
                  </div>
                </div>
                <div>
                  <div className="font-bold">{classData.teacher?.name}</div>
                </div>
              </div>
            </div>
          </section>

          {/* Navigasi Content */}
          <section id="content-navigation">
            <div className="container mx-auto w-11/12">
              <div className="tabs flex justify-start">
                <button
                  type="button"
                  onClick={() => setTab(0)}
                  className={`${
                    tab === 0
                      ? 'tab tab-lifted text-lg tab-active text-teal-500 font-bold'
                      : 'tab tab-lifted text-lg'
                  }`}>
                  Konten
                </button>
                <button
                  type="button"
                  onClick={() => setTab(1)}
                  className={`${
                    tab === 1
                      ? 'tab tab-lifted text-lg tab-active text-teal-500 font-bold'
                      : 'tab tab-lifted text-lg'
                  }`}>
                  Tentang
                </button>
              </div>
              <hr className="border-t border-gray-400 mb-3 mt-0" />
              {/* <div className="border-t w-full border-black inline-block mb-3"></div> */}
            </div>
          </section>

          {/* Konten */}
          {tab === 0 ? (
            <ClassContent teacherName={classData.teacher?.name} classId={id} />
          ) : (
            <AboutClass
              classesRombelID={classData.rombel_id}
              classesID={id}
              classesName={classData.name}
              classesDesc={classData.description}
              about={classData.description}
              student={classData.students?.data}
              total={classData.students?.total}
            />
          )}

          {openEditName ? (
            <EditClassModal
              focusInputName
              classesRombelID={classData.rombel_id}
              classesID={id}
              classesName={classData.name}
              classesDesc={classData.description}
              actionSave={() => {
                dispatch({
                  type: Types.UpdateSuccess,
                  payload: {
                    success: false,
                  },
                });
                setOpenEditName(false);
              }}
              modalAction={() => setOpenEditName(false)}
            />
          ) : null}
        </div>
      )}
    </>
  );
};

export default ClassDetail;
