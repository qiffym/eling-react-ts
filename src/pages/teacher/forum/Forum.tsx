import React from 'react';
import { FaComment } from 'react-icons/fa';
import ryujin from '../../../assets/ryujin1.jpg';
import ryujin2 from '../../../assets/ryujin2.jpg';

const Forum = () => (
  <>
    <section id="header" className="mt-20">
      <div className="container ml-16 w-9/12 rounded-box">
        <h1 className="text-3xl font-bold">Forum Diskusi</h1>
        <hr className="mb-4 border-t-2" />
      </div>
    </section>
    {/* Threat Section */}
    <section id="threat" className="mb-5">
      <div className="container ml-16 p-4 w-9/12 bg-white drop-shadow rounded-box">
        <div className="flex items-start space-x-4">
          <div className="avatar">
            <div className="w-16 mask mask-squircle">
              <img src={ryujin2} alt="avatar" />
            </div>
          </div>
          <div className="grow">
            {/* Nama dan Waktu dibuat */}
            <div className="flex justify-between items-start">
              <div className="mb-2">
                <p className="font-bold">Ryujin </p>
                <div className="flex items-center space-x-1 font-semibold text-2xs">
                  <span className="text-teal-700">Guru</span>
                  <span>|</span>
                  <span className="text-slate-700">
                    Diposting 3 menit yang lalu
                  </span>
                </div>
              </div>
              <div className="flex font-medium items-center space-x-1 mr-5">
                <FaComment /> <span className="text-sm">2</span>
              </div>
            </div>
            {/* Topik dan Deskripsi */}
            <div>
              <div className="container mx-auto p-4 mb-2 bg-slate-200 rounded-box font-medium text-black text-lg">
                <p>Ini adalah topik diskusinya</p>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ullam neque cum earum velit corporis tempore quo excepturi
                veritatis laborum? Consequuntur, earum officia fugit magnam
                asperiores impedit, fugiat rem suscipit consectetur nemo illum
                nostrum quis nobis debitis vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Comment Section */}
    <section id="comment" className="mb-5">
      <div className="container ml-16 p-4 w-9/12 bg-white drop-shadow rounded-box">
        <div className="flex items-start space-x-4">
          <div className="avatar">
            <div className="w-16 mask mask-squircle">
              <img src={ryujin} alt="avatar" />
            </div>
          </div>
          <div className="grow">
            {/* Nama dan Waktu dibuat */}
            <div className="mb-2">
              <p className="font-bold">Tao Tsuchiya </p>
              <div className="flex items-center space-x-1 font-semibold text-2xs">
                <span className="text-teal-700">Siswa</span>
                <span>|</span>
                <span className="text-slate-700">
                  Diposting 5 menit yang lalu
                </span>
              </div>
            </div>
            {/* Comment */}
            <div className="mb-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ullam neque cum earum velit corporis tempore quo excepturi
                veritatis laborum? Consequuntur, earum officia fugit magnam
                asperiores impedit, fugiat rem suscipit consectetur nemo illum
                nostrum quis nobis debitis vel.
              </p>
            </div>
            {/* Button Reply */}
            <button
              type="button"
              className="btn btn-sm btn-outline normal-case">
              Reply
            </button>
          </div>
        </div>
      </div>
    </section>

    {/* Sub-Comment */}
    <section id="comment" className="mb-5">
      <div className="container ml-28 p-4 w-[72%] bg-white drop-shadow rounded-box">
        <div className="flex items-start space-x-4">
          <div className="avatar">
            <div className="w-16 mask mask-squircle">
              <img src={ryujin2} alt="avatar" />
            </div>
          </div>
          <div className="grow">
            {/* Nama dan Waktu dibuat */}
            <div className="mb-2">
              <p className="font-bold">Bang Askar </p>
              <div className="flex items-center space-x-1 font-semibold text-2xs">
                <span className="text-teal-700">Siswa</span>
                <span>|</span>
                <span className="text-slate-700">
                  Diposting 7 menit yang lalu
                </span>
              </div>
            </div>
            {/* Comment */}
            <div className="mb-2">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
                ullam neque cum earum velit corporis tempore quo excepturi
                veritatis laborum? Consequuntur, earum officia fugit magnam
                asperiores impedit, fugiat rem suscipit consectetur nemo illum
                nostrum quis nobis debitis vel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Reply Section */}
    <section>
      <div className="container ml-16 w-9/12 drop-shadow rounded-box text-left">
        <button
          type="button"
          className="rounded-box border border-[#3d4451] border-dashed w-full py-5 px-8 hover:bg-[#3d4451] hover:border-white hover:text-white active:scale-[0.95]">
          <div className="flex justify-start items-center space-x-4">
            <div className="avatar">
              <div className="w-10 mask mask-squircle">
                <img src={ryujin} alt="avatar" />
              </div>
            </div>
            <p>Write your reply.</p>
          </div>
        </button>
      </div>
    </section>
  </>
);

export default Forum;
