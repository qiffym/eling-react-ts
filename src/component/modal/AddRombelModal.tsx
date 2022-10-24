import React, { FC } from 'react';

type Props = {
  // actionSave: () => void;
  modalAction: () => void;
};

const AddRombelModal: FC<Props> = ({ modalAction }) => (
  // const { isLoading, createClass } = useCreateClass();
  // const [isDisable, setDisable] = useState(false);
  // const [state, dispatch] = useReducer(createClassReducer, {
  //   department_id: '',
  //   name: '',
  //   grade: '',
  // });

  // useEffect(() => {
  //   if (state.name === '') {
  //     setDisable(true);
  //   } else {
  //     setDisable(false);
  //   }
  // }, [state]);
  <>
    <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
      <div className="modal-box w-[30%] max-w-5xl">
        <div className="felx flex-row justify-between items-center">
          <button
            type="button"
            className="btn btn-sm btn-circle absolute right-2 top-2"
            onClick={modalAction}>
            ✕
          </button>
          <h3 className="text-lg font-bold">Tambah Rombel</h3>
        </div>
        <form className="mt-4 flex flex-col space-y-5 w-full">
          <div className="flex flex-col space-y-1">
            {/* Department */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Jurusan</span>
              </label>
              <select className="select select-bordered" disabled>
                <option disabled>-- Pilih Jurusan --</option>
                <option selected value={1}>
                  Teknik Komputer dan Jaringan
                </option>
                <option>Star Wars</option>
              </select>
            </div>
            {/* Nama Rombel */}
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Nama Rombel</span>
              </label>
              <input
                type="text"
                placeholder="X TKJ 1"
                className="input input-bordered w-full"
              />
            </div>
            {/* Grade */}
            <div className="form-control w-full max-w-xs">
              <label className="label">
                <span className="label-text">Grade</span>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  -- Pilih Grade --
                </option>
                <option value={10}>10</option>
                <option value={11}>11</option>
                <option value={12}>12</option>
              </select>
            </div>
          </div>
          <button type="submit" className="btn btn-primary px-12 text-white">
            Save
          </button>
        </form>
      </div>
    </div>
    <div className="opacity-25 fixed inset-0 z-40 bg-black" />
  </>
);
export default AddRombelModal;
