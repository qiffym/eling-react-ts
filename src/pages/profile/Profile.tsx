import React from 'react';
import ryujin from '../../assets/ryujin2.jpg';

const Profile = () => {
  return (
    <>
      <main id="me" className="pt-20">
        <section
          id="header-profile"
          className="container mx-auto shadow-lg w-11/12 px-5 py-3 rounded-box bg-white">
          <h1 className="text-3xl font-semibold mb-4">Ryujin Otsutsuki</h1>
          <div className="flex items-start space-x-3">
            <div className="avatar">
              <div className="w-36 rounded-full ring ring-primary ring-offset-base-100 ring-offset-1">
                <img src={ryujin} alt="foto_profile" />
              </div>
            </div>
            <div className="flex flex-col space-y"></div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Profile;
