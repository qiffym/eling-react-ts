import React, { useState } from 'react';
import { BiLogOut } from 'react-icons/bi';
import {
  FaBirthdayCake,
  FaCamera,
  FaEnvelope,
  FaPencilAlt,
  FaUser,
} from 'react-icons/fa';
import { MdPassword } from 'react-icons/md';
import { useFetch } from '../../hooks/useFetch';
import { UserType } from '../../types/user-type';

const Profile = () => {
  const { data } = useFetch('/api/me');
  const [disable, setDisable] = useState(true);

  const profileData: UserType = data;

  function nullGender(gender: string) {
    switch (gender) {
      case null:
        return '-';
      case 'L':
        return 'Laki-Laki';
      case 'P':
        return 'Perempuan';
      default:
        return '-';
    }
  }

  function checkNull(check?: string) {
    if (check === null) {
      return '-';
    }
    return check;
  }

  return (
    <section
      id="me"
      className="container mx-auto drop-shadow-lg w-11/12 p-10 rounded-box bg-white mt-20 ">
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
            <h1 className="text-4xl font-bold">{profileData.name}</h1>
            <h3 className="text-2xl text-slate-500 font-medium">
              {profileData.role}
            </h3>
          </div>
        </div>

        {/* Editable */}
        <div className="space-x-2 text-center space-y-2">
          <button
            type="button"
            className="btn btn-sm md:btn-md btn-yellow-500 normal-case">
            <MdPassword className="mr-2" />
            Ganti Password
          </button>
          <button
            type="button"
            onClick={() => setDisable(!disable)}
            className="btn btn-sm md:btn-md btn-yellow-500 normal-case">
            <FaPencilAlt className="mr-2" />
            Edit Profile
          </button>
        </div>
      </div>
      <hr className="my-4" />

      {/* Form Edit Profile */}
      <form>
        <div className="xl:flex justify-start items-start xl:space-x-10">
          {/* Informasi Umum */}
          <div className="w-full xl:w-5/12">
            {/* Nama Lengkap */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Nama Lengkap</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="nama"
                className="input input-bordered input-sm w-full"
                defaultValue={profileData.name}
                disabled={disable}
              />
            </div>
            {/* Jenis Kelamin */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Jenis Kelamin</span>
              </label>
              <input
                type="text"
                name="gender"
                placeholder="jenis kelamin"
                className="input input-bordered input-sm w-full"
                defaultValue={nullGender(profileData.gender)}
                disabled={disable}
              />
            </div>
            {/* Username */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Username</span>
              </label>
              <label className="input-group">
                <span>
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="username"
                  placeholder="info@site.com"
                  className="input input-bordered input-sm w-full"
                  defaultValue={profileData.username}
                  disabled={disable}
                />
              </label>
            </div>
            {/* Email */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <label className="input-group">
                <span>
                  <FaEnvelope />
                </span>
                <input
                  type="text"
                  name="email"
                  placeholder="ryojino@example.com"
                  className="input input-bordered input-sm w-full"
                  defaultValue={checkNull(profileData.email)}
                  disabled={disable}
                />
              </label>
            </div>
            {/* Tanggal Lahir */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Tanggal Lahir</span>
              </label>
              <label className="input-group">
                <span>
                  <FaBirthdayCake />
                </span>
                <input
                  disabled={disable}
                  type="date"
                  name="birthday"
                  className="input input-bordered input-sm w-full"
                  defaultValue={checkNull(profileData.birthday)}
                />
              </label>
            </div>
            {/* Agama */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Agama</span>
              </label>
              <select
                className="select select-bordered select-sm"
                name="religion"
                value={checkNull(profileData.religion)}
                disabled={disable}>
                <option disabled>-- Pilih Agama --</option>
                <option value="Islam">Islam</option>
                <option value="Kristen">Kristen</option>
                <option value="Katolik">Katolik</option>
                <option value="Hindu">Hindu</option>
                <option value="Buddha">Buddha</option>
                <option value="Konghucu">Konghucu</option>
              </select>
            </div>
            {/* Alamat */}
            <div className="form-control">
              <label className="label">
                <span className="label-text">Alamat</span>
              </label>
              <textarea
                className="textarea textarea-bordered h-24"
                name="address"
                placeholder="Alamat"
                defaultValue={checkNull(profileData.address)}
                disabled={disable}
              />
            </div>
          </div>

          {/* Informasi Specific */}
          <div className="w-full xl:w-4/12">
            {/* IF Teacher */}
            <div id="specific-teacher">
              {/* NIP */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nomor Induk Pegawai</span>
                </label>
                <label className="input-group">
                  <span>NIP</span>
                  <input
                    type="text"
                    name="nip"
                    className="input input-bordered w-full"
                    defaultValue={checkNull(profileData.teacher?.nip)}
                    disabled={disable}
                  />
                </label>
              </div>

              {/* NIK */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nomor Induk Kependudukan</span>
                </label>
                <label className="input-group">
                  <span>NIK</span>
                  <input
                    type="text"
                    name="nik"
                    className="input input-bordered w-full"
                    defaultValue={checkNull(profileData.teacher?.nik)}
                    disabled={disable}
                  />
                </label>
              </div>
            </div>

            {/* IF Student */}
            <div id="specific-student">
              {/* Rombel Class */}
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Rombel Kelas</span>
                </label>
                <select
                  className="select select-bordered"
                  name="rombel"
                  disabled={disable}>
                  <option selected disabled>
                    -- Pilih Rombel --
                  </option>
                  <option value="1">X TKJ 1</option>
                  <option value="2">X TKJ 2</option>
                  <option value="3">XI TKJ 1</option>
                  <option value="4">XI TKJ 2</option>
                  <option value="5">XII TKJ 1</option>
                  <option value="6">XII TKJ 2</option>
                </select>
              </div>
              {/* NIS */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nomor Induk Siswa</span>
                </label>
                <label className="input-group">
                  <span>NIS</span>
                  <input
                    type="text"
                    name="nis"
                    className="input input-bordered w-full"
                    // defaultValue={'-'}
                    disabled={disable}
                  />
                </label>
              </div>

              {/* NISN */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Nomor Induk Siswa Nasional</span>
                </label>
                <label className="input-group">
                  <span>NISN</span>
                  <input
                    type="text"
                    name="nisn"
                    className="input input-bordered w-full"
                    // defaultValue={'-'}
                    disabled={disable}
                  />
                </label>
              </div>
            </div>
          </div>
        </div>

        {/* Update Button */}
        <div className="mt-5">
          <button
            type="submit"
            disabled={disable}
            className="btn btn-primary text-white">
            Simpan Perubahan
          </button>
        </div>
      </form>

      {/* Logout */}
      <div className="mb-20 mt-5 md:mb-0 flex justify-start md:hidden">
        <button type="button" className="btn btn-error text-white">
          <BiLogOut className="text-lg mr-1" />
          Keluar
        </button>
      </div>
    </section>
  );
};
export default Profile;
