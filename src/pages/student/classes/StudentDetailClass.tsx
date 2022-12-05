import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { HiChevronLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import AppBarClass from '../../../components/layout/AppBarClass';
import Loading from '../../../components/loading/Loading';
import AboutClass from '../../../components/student/my-class/AboutClass';
import { ClassContent } from '../../../components/student/my-class/ClassContent';
import { useFetch } from '../../../hooks/useFetch';
import { ClassesDetailType, ClassesType } from '../../../types/class-type';

const StudentDetailClass = () => {
  const [tab, setTab] = useState(0);
  const { id } = useLocation().state as ClassesType;
  const { isLoading, data } = useFetch(`/api/student/my-classes/${id}`);
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

              <h2 className="text-4xl md:text-6xl w-max  px-3 rounded-md font-bold mb-2 ">
                {classData?.name}
              </h2>
              <div className="flex items-center space-x-3 px-3">
                <div className="avatar">
                  <div className="w-7 md:w-8 rounded-full ring ring-slate-100">
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
            <ClassContent classId={id} />
          ) : (
            <AboutClass
              about={classData.description}
              student={classData.students?.data}
              total={classData.students?.total}
            />
          )}
        </div>
      )}
    </>
  );
};

export default StudentDetailClass;
