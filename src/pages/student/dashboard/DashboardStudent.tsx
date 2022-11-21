/* eslint-disable no-nested-ternary */
import React, { useState, useEffect, ChangeEvent } from 'react';
import { Helmet } from 'react-helmet';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import Loading from '../../../components/loading/Loading';
import Header from '../../../components/header/Header';
import CardClass from '../../../components/student/CardClass';
import { useFetch } from '../../../hooks/useFetch';
import { StudentClasses } from '../../../types/student-type';

const DashboardStudent = () => {
  const { isLoading, data } = useFetch('/api/student/my-classes');
  const [searchData, setSearchData] = useState<StudentClasses[] | undefined>();
  const classList: StudentClasses[] = data;

  const searchClass = (value: string) => {
    setSearchData(
      classList?.filter((item: any) =>
        item.name.toLowerCase().includes(value.toLowerCase()),
      ),
    );
  };

  useEffect(() => {
    setSearchData(classList);
  }, [classList]);

  return (
    <>
      <Helmet>
        <title>Dashboard</title>
      </Helmet>
      <div className="container mx-auto">
        <Header>Dashboard Siswa</Header>
      </div>
      <section
        id="random-motivation"
        className="block container mx-auto rounded-t-box bg-white shadow-sm">
        <div className="flex w-full justify-center items-center sm:space-x-10 md:space-x-10 py-10 px-3">
          <FaQuoteLeft className="hidden md:block text-5xl" />
          <div>
            <div className="flex flex-col items-center text-center">
              <h3 className="title text-2xl font-medium">Quote</h3>
              <blockquote className="mb-3">
                <p>
                  Hanya pendidikan yang bisa menyelamatkan masa depan, tanpa
                  pendidikan Indonesia tak mungkin bertahan
                </p>
              </blockquote>
              <figcaption className="font-medium italic">
                —Najwa Shihab
              </figcaption>
            </div>
          </div>
          <FaQuoteRight className="hidden md:block text-5xl" />
        </div>
      </section>

      {/* Wave */}
      <div className="container mx-auto h-16 shadow-2xl">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            // fill="#273036"
            fill="#fff"
            fillOpacity="1"
            d="M0,160L40,170.7C80,181,160,203,240,181.3C320,160,400,96,480,90.7C560,85,640,139,720,138.7C800,139,880,85,960,74.7C1040,64,1120,96,1200,128C1280,160,1360,192,1400,208L1440,224L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"
          />
        </svg>
      </div>

      <section id="content" className="container mx-auto">
        <div className="flex flex-col space-y-5 lg:flex-row lg:items-start lg:space-x-3 lg:space-y-0">
          {/* My Class */}
          <div className="md:grow">
            <div className="flex flex-col space-y-3 px-3 py-3 sm:py-0 sm:space-y-0 sm:px-3 sm:flex-row sm:justify-between sm:items-center">
              <div>
                <h2 className="hidden sm:block text-2xl font-medium">
                  My Class
                </h2>
              </div>
              <div className="form-control">
                <div className="input-group sm:px-0">
                  <input
                    type="search"
                    placeholder="Search…"
                    className="input input-bordered w-full sm:w-72"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      searchClass(e.target.value)
                    }
                  />
                  <button type="button" className="btn btn-square">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-6 w-6"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <hr className="border-t border-gray-300 my-4" />

            {isLoading ? (
              <Loading />
            ) : searchData?.length ? (
              <CardClass classes={searchData} />
            ) : (
              <div>
                <p className="text-lg">
                  Silahkan lengkapi profile kamu untuk dapat mengikuti kelas
                </p>
              </div>
            )}
          </div>

          {/* Tugas Mendatang */}
          <div className="p-3 rounded-box w-full lg:w-[20%] bg-white drop-shadow">
            <div className="flex flex-col items-center space-y-2">
              <div className="text-2xl font-medium">
                <h3>Mendatang</h3>
              </div>
              <div className="p-3 border rounded-box bg-slate-100 w-[95%]">
                <p>Komputer dan Jaringan Dasar</p>
                <p>Tugas 1</p>
                <p className="font-bold">Tenggat:</p>
                <p>Rabu, 5 Maret</p>
                <p>Pukul 23.59 WIB</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default DashboardStudent;
