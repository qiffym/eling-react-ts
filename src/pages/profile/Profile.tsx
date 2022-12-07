import React, { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import { FaCamera, FaPencilAlt } from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import Loading2ND from '../../components/loading/Loading2nd';
import ChangePasswordModal from '../../components/profile/ChangePasswordModal';
import ProfileForm from '../../components/profile/ProfileForm';
import Toast from '../../components/toast/Toast';
import ToastError from '../../components/toast/ToastError';
import { useFetch } from '../../hooks/useFetch';
import useLogout from '../../hooks/useLogout';
import useUpdateProfile from '../../hooks/useUpdateProfile';
import { UserType } from '../../types/user-type';

const Profile = () => {
  const { isLoading, data } = useFetch('/api/me');
  const [disable, setDisable] = useState(true);
  const [isSubmit, setSubmit] = useState(false);
  const [openChangePasswordModal, setOpenChangePasswordModal] = useState(false);

  const profileData: UserType = data;
  const { toast, errorToast, message, updateProfile } = useUpdateProfile(
    profileData.id,
  );
  const authLogout = useLogout();

  return (
    <>
      <section
        id="me"
        className="container mx-auto drop-shadow-lg w-11/12 p-10 rounded-box bg-white mt-5 md:mt-20 mb-20 md:mb-0">
        {isLoading ? (
          <Loading2ND />
        ) : (
          <>
            {/* Header Profile */}
            <div className="flex flex-col lg:flex-row justify-between items-center lg:items-end space-y-5 lg:space-y-0">
              {/* Header Info */}
              <div className="flex flex-col lg:flex-row items-center space-y-2 lg:space-x-5 lg:space-y-0">
                <div className="flex items-end">
                  <div className="avatar">
                    <div className="w-40 lg:w-44 rounded-full ring ring-slate-400 ring-offset-base-100 ring-offset-1">
                      <img src={profileData.avatar} alt="foto_profile" />
                    </div>
                  </div>
                  <div className="-ml-12 z-10 bottom-3">
                    <button type="button" className="btn btn-circle text-2xl">
                      <FaCamera />
                    </button>
                  </div>
                </div>
                <div className="flex flex-col space-y text-center lg:text-start">
                  <h1 className="text-2xl md:text-4xl font-bold">
                    {profileData.name}
                  </h1>
                  <h3 className="text-xl md:text-2xl text-slate-500 font-medium">
                    {profileData.role}
                  </h3>
                </div>
              </div>

              {/* Editable */}
              <div className="space-x-2 text-center space-y-2">
                <button
                  type="button"
                  onClick={() => {
                    setOpenChangePasswordModal(true);
                  }}
                  className="btn btn-sm md:btn-md btn-yellow-500 normal-case">
                  <MdPassword className="mr-2" />
                  Ganti Password
                </button>
                {disable ? (
                  <button
                    type="button"
                    onClick={() => {
                      setDisable(!disable);
                    }}
                    className="btn btn-sm md:btn-md btn-yellow-500 normal-case">
                    <FaPencilAlt className="mr-2" />
                    Edit Profile
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={() => {
                      setSubmit(true);
                      setDisable(!disable);
                    }}
                    className="btn btn-sm btn-primary md:btn-md btn-yellow-500 normal-case">
                    <FaPencilAlt className="mr-2" />
                    Simpan Perubahan
                  </button>
                )}
              </div>
            </div>
            <hr className="my-4" />

            <ProfileForm
              profileData={profileData}
              disable={disable}
              updateProfile={updateProfile}
              isSubmit={isSubmit}
              setSubmit={setSubmit}
            />

            {/* Logout */}
            <div className="mb-20 mt-5 md:mb-0 flex justify-start md:hidden">
              <button
                type="button"
                onClick={() => {
                  authLogout();
                  localStorage.clear();
                  window.location.reload();
                }}
                className="btn btn-error text-white">
                <BiLogOut className="text-lg mr-1" />
                Keluar
              </button>
            </div>
          </>
        )}
      </section>

      {/* Toast Message */}
      {toast ? (
        <div className="px-5 z-50 mb-24">
          <Toast desc={`${message}`} />
        </div>
      ) : null}
      {errorToast ? (
        <div className="px-5 z-50 mb-24">
          <ToastError desc={`${message} please try again!`} />
        </div>
      ) : null}

      {/* Modal Change Password */}
      {openChangePasswordModal ? (
        <ChangePasswordModal
          actionSave={() => {
            // setOpenChangePasswordModal(false);
            // dispatch({
            //   type: Types.AddAssignmentSuccess,
            //   payload: {
            //     success: false,
            //   },
            // });
          }}
          modalAction={() => setOpenChangePasswordModal(false)}
        />
      ) : null}
    </>
  );
};
export default Profile;
