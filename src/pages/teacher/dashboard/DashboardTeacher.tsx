import React from 'react';
import { HiPlus } from 'react-icons/hi';

const DashboardTeacher = () => {
  return (
    <>
      <button
        onClick={() => console.log('test')}
        className="btn flex w-14 h-14 btn-primary rounded-full fixed z-10 right-5 bottom-5 items-center content-center justify-center drop-shadow-xl"
      >
        <HiPlus className="text-xl" />
      </button>

      <div className="card w-80 bg-base-100 shadow-xl">
        <figure>
          <img src="https://placeimg.com/400/225/arch" alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Teknik Jaringan Komputer</h2>
          <p>Membuat jaringan agar hatimu dan hatiku menyatu</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary px-8">View</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default DashboardTeacher;
