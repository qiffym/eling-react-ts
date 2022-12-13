import React, { ChangeEvent, FC, useEffect, useReducer, useState } from 'react';
import { useAdminEditMotivational } from '../../hooks/useAdmin';
import { editMotivationalWordReducer } from '../../reducers/reducers';
import { MotivationalWordsType } from '../../types/motivational-type';
import { Types } from '../../types/reducer-type';

type Props = {
  actionSave: () => void;
  modalAction: () => void;
  motivationalWordData: MotivationalWordsType;
};

const EditMotivationalWord: FC<Props> = ({
  actionSave,
  modalAction,
  motivationalWordData,
}) => {
  const [isDisable, setDisable] = useState(false);
  const [input, setInput] = useReducer(editMotivationalWordReducer, {
    title: motivationalWordData.title,
    body: motivationalWordData.body,
    from: motivationalWordData.from,
    active: motivationalWordData.active,
  });

  const editAdminMotivational = useAdminEditMotivational(
    motivationalWordData.id,
  );

  useEffect(() => {
    if (input.title === '' || input.body === '' || input.from === '') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [input]);

  return (
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
            <h3 className="text-lg font-bold">Edit Rombel</h3>
          </div>
          <form
            onSubmit={(e) => {
              editAdminMotivational(
                e,
                input.title,
                input.body,
                input.from,
                input.active,
              );
              actionSave();
            }}
            className="mt-4 flex flex-col space-y-5 w-full">
            <div className="flex flex-col space-y-1">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Judul</span>
                </label>
                <input
                  name="title"
                  type="text"
                  defaultValue={input.title}
                  className="input input-bordered w-full"
                  onChange={(e: ChangeEvent<HTMLInputElement>) =>
                    setInput({
                      type: Types.EditMotivationalTitle,
                      payload: {
                        title: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Pesan</span>
                </label>
                <textarea
                  name="body"
                  placeholder="X TKJ 1"
                  defaultValue={input.body}
                  className="textarea textarea-bordered w-full resize-none"
                  rows={4}
                  onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                    setInput({
                      type: Types.EditMotivationalBody,
                      payload: {
                        body: e.target.value,
                      },
                    })
                  }
                />
              </div>

              <div className="flex flex-row items-center w-full space-x-5">
                <div className="form-control w-full">
                  <label className="label">
                    <span className="label-text">From</span>
                  </label>
                  <input
                    name="from"
                    type="text"
                    defaultValue={input.from}
                    className="input input-bordered w-full"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setInput({
                        type: Types.EditMotivationalFrom,
                        payload: {
                          from: e.target.value,
                        },
                      })
                    }
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Aktif</span>
                  </label>
                  <input
                    name="active"
                    type="checkbox"
                    checked={input.active}
                    className="toggle"
                    onChange={(e: ChangeEvent<HTMLInputElement>) =>
                      setInput({
                        type: Types.EditMotivationalActive,
                        payload: {
                          active: e.target.checked,
                        },
                      })
                    }
                  />
                </div>
              </div>
            </div>

            <button
              type="submit"
              disabled={isDisable}
              className="btn btn-primary px-12 text-white">
              Save
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};
export default EditMotivationalWord;
