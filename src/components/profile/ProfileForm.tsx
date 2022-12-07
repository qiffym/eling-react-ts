import React, {
  ChangeEvent,
  createRef,
  FC,
  LegacyRef,
  useContext,
  useEffect,
  useReducer,
} from 'react';
import { FaBirthdayCake, FaEnvelope, FaUser } from 'react-icons/fa';
import { MyContext } from '../../context/context';
import { editProfileReducer } from '../../reducers/reducers';
import { Types } from '../../types/reducer-type';
import { UserType } from '../../types/user-type';

type Props = {
  profileData: UserType;
  disable: boolean;
  updateProfile: Function;
  isSubmit: boolean;
  setSubmit: Function;
};

const ProfileForm: FC<Props> = ({
  profileData,
  disable,
  updateProfile,
  isSubmit,
  setSubmit,
}) => {
  const user = JSON.parse(localStorage.getItem('user') || '');
  const submitButton: LegacyRef<HTMLButtonElement> | undefined = createRef();
  const { dispatch } = useContext(MyContext);

  function convertToRoleNumber(role: string) {
    switch (role) {
      case 'teacher':
        return 2;
      case 'student':
        return 3;
      default:
        return 1;
    }
  }

  const [input, setInput] = useReducer(editProfileReducer, {
    role: convertToRoleNumber(profileData.role),
    name: profileData.name,
    username: profileData.username,
    email: profileData.email,
    gender: profileData.gender,
    religion: profileData.religion,
    birthday: profileData.birthday,
    address: profileData.address,
    telpon: profileData.telpon,
    nik: profileData.teacher?.nik,
    nip: profileData.teacher?.nip,
    nis: profileData.student?.nis,
    nisn: profileData.student?.nisn,
    rombel: profileData.student?.rombel_id,
  });

  function nullGender(gender: string) {
    switch (gender) {
      case null:
        return '-';
      case 'L':
        return 'L';
      case 'P':
        return 'P';
      default:
        return '-';
    }
  }

  function checkNull(check?: string) {
    if (check === null) {
      return '';
    }
    return check;
  }

  function roleInput(role: string) {
    switch (role) {
      case 'teacher':
        return (
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
                  maxLength={18}
                  className="input input-bordered w-full"
                  defaultValue={checkNull(profileData.teacher?.nip)}
                  disabled={disable}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInput({
                      type: Types.EditProfileNIP,
                      payload: {
                        nip: e.currentTarget.value,
                      },
                    })
                  }
                />
              </label>
            </div>
            <label className="label">
              <span className="label-text-alt italic">* 18 digit angka</span>
            </label>

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
                  maxLength={16}
                  className="input input-bordered w-full"
                  defaultValue={checkNull(profileData.teacher?.nik)}
                  disabled={disable}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInput({
                      type: Types.EditProfileNIK,
                      payload: {
                        nik: e.currentTarget.value,
                      },
                    })
                  }
                />
              </label>
            </div>
            <label className="label">
              <span className="label-text-alt italic">* 16 digit angka</span>
            </label>
          </div>
        );
      case 'student':
        return (
          <div id="specific-student">
            {/* Rombel Class */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Rombel Kelas</span>
              </label>
              <select
                className="select select-bordered"
                name="rombel"
                onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                  setInput({
                    type: Types.EditProfileRombel,
                    payload: {
                      rombel: Number(e.currentTarget.value),
                    },
                  })
                }
                defaultValue={profileData.student?.rombel_id}
                disabled={disable}>
                <option selected value="DEFAULT" disabled>
                  -- Pilih Rombel --
                </option>
                <option value={1}>X TKJ 1</option>
                <option value={2}>X TKJ 2</option>
                <option value={3}>XI TKJ 1</option>
                <option value={4}>XI TKJ 2</option>
                <option value={5}>XII TKJ 1</option>
                <option value={6}>XII TKJ 2</option>
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
                  maxLength={8}
                  className="input input-bordered w-full"
                  defaultValue={profileData.student?.nis}
                  disabled={disable}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInput({
                      type: Types.EditProfileNIS,
                      payload: {
                        nis: e.currentTarget.value,
                      },
                    })
                  }
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
                  maxLength={10}
                  className="input input-bordered w-full"
                  defaultValue={profileData.student?.nisn}
                  disabled={disable}
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInput({
                      type: Types.EditProfileNISN,
                      payload: {
                        nisn: e.currentTarget.value,
                      },
                    })
                  }
                />
              </label>
            </div>
            <label className="label">
              <span className="label-text-alt italic">* 10 digit angka</span>
            </label>
          </div>
        );

      default:
        return '';
    }
  }

  useEffect(() => {
    if (isSubmit) {
      submitButton.current?.click();
      setSubmit(false);
      dispatch({
        type: Types.UpdateSuccess,
        payload: {
          success: false,
        },
      });
    }
  }, [isSubmit]);

  return (
    <form
      onSubmit={(e) =>
        updateProfile(e, {
          role: input.role,
          name: input.name,
          username: input.username,
          email: input.email,
          gender: input.gender,
          religion: input.religion,
          birthday: input.birthday,
          address: input.address,
          telpon: input.telpon,
          nik: input?.nik,
          nip: input?.nip,
          nis: input?.nis,
          nisn: input?.nisn,
          rombel: input?.rombel,
        })
      }>
      <div className="xl:flex justify-start items-start xl:space-x-10">
        {/* Informasi Umum */}
        <div className="w-full xl:w-5/12">
          {/* Nama Lengkap */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">*Nama Lengkap</span>
            </label>
            <input
              type="text"
              name="name"
              maxLength={100}
              required
              placeholder="nama"
              className="input input-bordered input-sm w-full"
              defaultValue={profileData.name}
              disabled={disable}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                setInput({
                  type: Types.EditProfileName,
                  payload: {
                    name: e.currentTarget.value,
                  },
                })
              }
            />
          </div>
          {/* Jenis Kelamin */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">*Jenis Kelamin</span>
            </label>
            <select
              className="select select-bordered select-sm"
              name="gender"
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setInput({
                  type: Types.EditProfileGender,
                  payload: {
                    gender: e.currentTarget.value,
                  },
                })
              }
              defaultValue={nullGender(profileData.gender)}
              disabled={disable}>
              <option value="DEFAULT" disabled>
                -- Pilih Gender --
              </option>
              <option value="L">Laki-laki</option>
              <option value="P">Perempuan</option>
            </select>
          </div>
          {/* Username */}
          <div className="form-control">
            <label className="label">
              <span className="label-text">*Username</span>
            </label>
            <label className="input-group">
              <span>
                <FaUser />
              </span>
              <input
                type="text"
                name="username"
                required
                className="input input-bordered input-sm w-full"
                defaultValue={profileData.username}
                disabled={disable}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInput({
                    type: Types.EditProfileUsername,
                    payload: {
                      username: e.currentTarget.value,
                    },
                  })
                }
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
                type="email"
                name="email"
                placeholder="ryojino@example.com"
                className="input input-bordered input-sm w-full"
                defaultValue={checkNull(profileData.email)}
                disabled={disable}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInput({
                    type: Types.EditProfileEmail,
                    payload: {
                      email: e.currentTarget.value,
                    },
                  })
                }
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
                min="1960-1-31"
                max="2021-12-31"
                className="input input-bordered input-sm w-full"
                defaultValue={checkNull(profileData.birthday)}
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  setInput({
                    type: Types.EditProfileBirthday,
                    payload: {
                      birthday: e.currentTarget.value,
                    },
                  })
                }
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
              defaultValue={profileData?.religion}
              onChange={(e: ChangeEvent<HTMLSelectElement>) =>
                setInput({
                  type: Types.EditProfileReligion,
                  payload: {
                    religion: e.currentTarget.value,
                  },
                })
              }
              disabled={disable}>
              <option selected value="DEFAULT" disabled>
                -- Pilih Agama --
              </option>
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
              onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                setInput({
                  type: Types.EditProfileAddress,
                  payload: {
                    address: e.currentTarget.value,
                  },
                })
              }
            />
          </div>
        </div>

        {/* Informasi Specific */}
        <div className="w-full xl:w-4/12">
          {/* IF Teacher */}
          {roleInput(user.user.role)}
          {/* IF Student */}
        </div>
      </div>

      <button ref={submitButton} type="submit" className="hidden">
        Save hidden
      </button>

      {/* Update Button */}
    </form>
  );
};

export default ProfileForm;
