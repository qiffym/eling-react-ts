import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../../../component/layout/Footer';
import Loading from '../../../component/loading/Loading';
import { AboutClass } from '../../../component/teacher/home/online_class/AboutClass';
import { ClassContent } from '../../../component/teacher/home/online_class/ClassContent';
import { useFetch } from '../../../hooks/useFetch';
import { ClassesDetailType, ClassesType } from '../../../types/class-type';

const ClassDetail = () => {
  const [tab, setTab] = useState(0);
  const { id } = useLocation().state as ClassesType;
  const { isLoading, data } = useFetch(`/api/teacher/online-classes/${id}`);
  const navigate = useNavigate();
  const classData: ClassesDetailType = data;

  return (
    <>
      <Helmet>
        <title>{classData.name}</title>
      </Helmet>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="pt-20">
          {/* Section Title Class */}
          <section id="title-class" className="mb-5">
            <div className="container mx-auto bg-slate-200 w-11/12 px-5 py-3 border-4 border-slate-200 rounded-box">
              <button onClick={() => navigate('/')} className="mb-3">
                <BsFillArrowLeftCircleFill className="text-4xl" />
              </button>
              <h3 className="text-xl font-bold">{classData.rombel_name}</h3>
              <h2 className="text-2xl font-bold mb-2">{classData?.name}</h2>
              <div className="flex items-center space-x-2">
                <div>
                  <h5 className="font-bold">Pengajar: </h5>
                </div>
                <div className="avatar">
                  <div className="mask mask-circle w-8 h-8">
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
              <div className="flex items-center space-x-2 mb-2">
                <div>
                  <button
                    onClick={() => setTab(0)}
                    className={`${
                      tab === 0
                        ? 'btn btn-sm btn-primary'
                        : 'btn btn-sm btn-ghost'
                    }`}>
                    Konten Pembelajaran
                  </button>
                </div>
                <span>|</span>
                <div>
                  <button
                    onClick={() => setTab(1)}
                    className={`${
                      tab === 1
                        ? 'btn btn-sm btn-primary'
                        : 'btn btn-sm btn-ghost'
                    }`}>
                    Tentang
                  </button>
                </div>
              </div>
              <hr className="bg-gray-400 mb-3 h-[0.1rem]" />
              {/* <div className="border-t w-full border-black inline-block mb-3"></div> */}
            </div>
          </section>

          {/* Konten Pembelajaran */}
          {tab === 0 ? <ClassContent /> : <AboutClass />}

          {/* Tentang */}

          <Footer />
        </div>
      )}
    </>
  );
};

export default ClassDetail;
