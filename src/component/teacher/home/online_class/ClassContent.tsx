import React from 'react';
import { HiPlusCircle, HiTrash, HiPencilAlt, HiBookOpen } from 'react-icons/hi';
import { MdAssignment, MdForum } from 'react-icons/md';

export const ClassContent = () => {
  return (
    <>
      {/* Section Content Class */}
      <section id="content-class">
        <div className="container mx-auto w-11/12">
          {/* TODO: Buat btn create ini hanya pada role guru*/}
          <button className="btn btn-md normal-case px-3 mb-4">
            <HiPlusCircle className="text-3xl mr-1" />
            <span className="text-md">Tambah konten</span>
          </button>

          <div id="header-content" className="mb-5">
            <h2 className="text-lg font-bold">Materi Pembelajaran</h2>
            <blockquote>
              Unduh materi, kerjakan tugas, dan ikuti forum diskusi
            </blockquote>
          </div>

          {/* Collapse Content #1 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow rounded-box shadow-md mb-4 border-l-4 border-l-primary">
            <input type="checkbox" />
            {/* Title Collapse */}
            <div className="collapse-title text-xl font-medium">
              <h5 className="text-sm text-slate-600">Pembelajaran 1</h5>
              <h2 className="font-bold">Menerapkan K3LH di Lingkungan Kerja</h2>
            </div>

            {/* Content Collapse */}
            <div className="collapse-content text-lg font-medium mt-3">
              {/* TODO: Buat btn create ini hanya pada role guru*/}
              <div className="dropdown dropdown-right mb-4">
                <label tabIndex={0} className="btn btn-sm normal-case px-3">
                  <HiPlusCircle className="text-xl mr-1" />
                  <span className="text-xs">Sub konten</span>
                </label>
                <ul
                  tabIndex={0}
                  className="dropdown-content menu shadow bg-base-100 rounded-box w-52 text-xs">
                  <li>
                    <a href="#!">
                      <HiBookOpen />
                      Add Material
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MdAssignment />
                      Add Assignment
                    </a>
                  </li>
                  <li>
                    <a href="#!">
                      <MdForum />
                      Add Forum
                    </a>
                  </li>
                </ul>
              </div>

              <div className="flex flex-col mx-5 space-y-2">
                {/* content materi */}
                <div
                  id="material"
                  className="flex justify-between items-center">
                  <a href="#!">Ebook</a>
                  {/* TODO: Buat btn disini hanya pada role guru*/}
                  <div className="editable space-x-1">
                    <div className="tooltip" data-tip="edit materi">
                      <button
                        name="edit-materi"
                        className="btn btn-xs btn-warning btn-square">
                        <HiPencilAlt></HiPencilAlt>
                      </button>
                    </div>
                    <div className="tooltip" data-tip="delete materi">
                      <button
                        name="delete-materi"
                        className="btn btn-xs btn-error btn-square">
                        <HiTrash></HiTrash>
                      </button>
                    </div>
                  </div>
                </div>

                {/* content forum */}
                <div id="forum" className="flex justify-between items-center">
                  <a href="#!">Forum Diskusi</a>
                  {/* TODO: Buat btn disini hanya pada role guru*/}
                  <div className="editable space-x-1">
                    <div className="tooltip" data-tip="edit forum">
                      <button
                        name="edit-forum"
                        className="btn btn-xs btn-warning btn-square">
                        <HiPencilAlt></HiPencilAlt>
                      </button>
                    </div>
                    <div className="tooltip" data-tip="delete forum">
                      <button
                        name="delete-forum"
                        className="btn btn-xs btn-error btn-square">
                        <HiTrash></HiTrash>
                      </button>
                    </div>
                  </div>
                </div>

                {/* content assignment */}
                <div
                  id="assignment"
                  className="flex justify-between items-center">
                  <a href="#!">Tugas 1</a>
                  {/* TODO: Buat btn disini hanya pada role guru*/}
                  <div className="editable space-x-1">
                    <div className="tooltip" data-tip="edit tugas">
                      <button
                        name="edit-tugas"
                        className="btn btn-xs btn-warning btn-square">
                        <HiPencilAlt></HiPencilAlt>
                      </button>
                    </div>
                    <div className="tooltip" data-tip="delete tugas">
                      <button
                        name="delete-tugas"
                        className="btn btn-xs btn-error btn-square">
                        <HiTrash></HiTrash>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Collapse Content #2 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow rounded-box shadow-md mb-4 border-l-4 border-l-primary">
            <input type="checkbox" />
            {/* Title Collapse */}
            <div className="collapse-title text-xl font-medium">
              <h5 className="text-sm text-slate-600">Pembelajaran 2</h5>
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
            className="collapse collapse-arrow rounded-box shadow-md mb-4 border-l-4 border-l-primary">
            <input type="checkbox" />
            {/* Title Collapse */}
            <div className="collapse-title text-xl font-medium">
              <h5 className="text-sm text-slate-600">Pembelajaran 3</h5>
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
    </>
  );
};
