import React from 'react';
import { HiPlusCircle } from 'react-icons/hi';

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

          {/* Collapse Content #1 */}
          <div
            tabIndex={0}
            className="collapse collapse-arrow border-4 border-slate-200 rounded-box bg-slate-200 mb-4">
            <input type="checkbox" />
            {/* Title Collapse */}
            <div className="collapse-title text-xl font-medium">
              <h3>Pembelajaran 1</h3>
              <h2 className="font-bold">Menerapkan K3LH di Lingkungan Kerja</h2>
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
    </>
  );
};
