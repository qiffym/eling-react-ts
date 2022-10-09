import React from 'react';
import { Helmet } from 'react-helmet';
import { BsFillArrowLeftCircleFill } from 'react-icons/bs';
import { HiPlusCircle } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import ryujin from '../../../assets/ryujin1.jpg';

const ClassDetail = () => {
  const navigate = useNavigate();
  return (
    <>
      <Helmet>
        <title>(Nama Kelas)</title>
      </Helmet>

      <div className="pt-20">
        {/* Section Title Class */}
        <section id="title-class" className="mb-5">
          <div className="container mx-auto bg-slate-200 w-11/12 px-5 py-3 border-4 border-slate-200 rounded-box">
            <button onClick={() => navigate(-1)} className="mb-3">
              <BsFillArrowLeftCircleFill className="text-4xl" />
            </button>
            <h3 className="text-xl font-bold">X TKJ 1</h3>
            <h2 className="text-2xl font-bold mb-2">
              Komputer dan Jaringan Dasar
            </h2>
            <div className="flex items-center space-x-3">
              <div>
                <h5 className="font-bold">oleh</h5>
              </div>
              <div className="avatar">
                <div className="mask mask-circle w-8 h-8">
                  <img src={ryujin} alt="Avatar Tailwind CSS Component" />
                </div>
              </div>
              <div>
                <div className="font-bold">Nama guru</div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigasi Content */}
        <section id="content-navigation">
          <div className="container mx-auto w-11/12">
            <div className="flex items-center space-x-2">
              <div>
                <button className="btn btn-sm btn-ghost">
                  Konten Pembelajaran
                </button>
              </div>
              <span>|</span>
              <div>
                <button className="btn btn-sm btn-ghost">Tentang</button>
              </div>
            </div>
            {/* <hr className="bg-black" /> */}
            <div className="border-t w-full border-black inline-block mb-3"></div>
          </div>
        </section>

        {/* Section Content Class */}
        <section id="content-class">
          <div className="container mx-auto w-11/12">
            {/* TODO: Buat btn create ini hanya pada role guru*/}
            <button className="btn btn-md normal-case px-3 mb-4">
              <HiPlusCircle className="text-3xl mr-1" />
              <span className="text-md">Tambah konten</span>
            </button>

            {/* Collapse Content #1 */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-4 border-slate-200 rounded-box bg-slate-200 mb-4">
              <input type="checkbox" />
              {/* Title Collapse */}
              <div className="collapse-title text-xl font-medium">
                <h3>Pembelajaran 1</h3>
                <h2 className="font-bold">
                  Menerapkan K3LH di Lingkungan Kerja
                </h2>
              </div>

              {/* Content Collapse */}
              <div className="collapse-content text-lg font-medium mt-3">
                {/* TODO: Buat btn create ini hanya pada role guru*/}
                <button className="btn btn-sm normal-case px-3 mb-4">
                  <HiPlusCircle className="text-xl mr-1" />
                  <span className="text-xs">Sub konten</span>
                </button>

                <div className="flex flex-col ml-5 space-y-2">
                  <div id="material">
                    <a href="#!">Ebook</a>
                  </div>
                  <div id="forum">
                    <a href="#!">Forum Diskusi</a>
                  </div>
                  <div id="assignment">
                    <a href="#!">Tugas 1</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapse Content #2 */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-4 border-slate-200 rounded-box bg-slate-200 mb-4">
              <input type="checkbox" />
              {/* Title Collapse */}
              <div className="collapse-title text-xl font-medium">
                <h3>Pembelajaran 2</h3>
                <h2 className="font-bold">Pengenalan Jaringan Komputer</h2>
              </div>

              {/* Content Collapse */}
              <div className="collapse-content text-lg font-medium mt-3">
                {/* TODO: Buat btn create ini hanya pada role guru*/}
                <button className="btn btn-sm normal-case px-3 mb-4">
                  <HiPlusCircle className="text-xl mr-1" />
                  <span className="text-xs">Sub konten</span>
                </button>

                <div className="flex flex-col ml-5 space-y-2">
                  <div id="material">
                    <a href="#!">Ebook</a>
                  </div>
                  <div id="forum">
                    <a href="#!">Forum Diskusi</a>
                  </div>
                  <div id="assignment">
                    <a href="#!">Tugas 2</a>
                  </div>
                </div>
              </div>
            </div>

            {/* Collapse Content #3 */}
            <div
              tabIndex={0}
              className="collapse collapse-arrow border-4 border-slate-200 rounded-box bg-slate-200 mb-4">
              <input type="checkbox" />
              {/* Title Collapse */}
              <div className="collapse-title text-xl font-medium">
                <h3>Pembelajaran 3</h3>
                <h2 className="font-bold">Jaringan LAN (Local Area Network)</h2>
              </div>

              {/* Content Collapse */}
              <div className="collapse-content text-lg font-medium mt-3">
                {/* TODO: Buat btn create ini hanya pada role guru*/}
                <button className="btn btn-sm normal-case px-3 mb-4">
                  <HiPlusCircle className="text-xl mr-1" />
                  <span className="text-xs">Sub konten</span>
                </button>

                <div className="flex flex-col ml-5 space-y-2">
                  <div id="material">
                    <a href="#!">Ebook</a>
                  </div>
                  <div id="forum">
                    <a href="#!">Forum Diskusi</a>
                  </div>
                  <div id="assignment">
                    <a href="#!">Tugas 2</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default ClassDetail;
