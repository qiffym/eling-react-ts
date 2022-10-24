import React, { ChangeEvent, FC, useEffect, useReducer, useState } from 'react';
import { useAddForum } from '../../hooks/useClasses';
import { addForumReducer } from '../../reducers/reducers';
import { Types } from '../../types/reducer-type';
import LoadingButton from '../loading/LoadingButton';

type Props = {
  actionSave: () => void;
  modalAction: () => void;
  idClasses: number;
  idContent: number;
};

const AddForumModal: FC<Props> = ({
  actionSave,
  modalAction,
  idClasses,
  idContent,
}) => {
  const { isLoading, addForum } = useAddForum();
  const [isDisable, setDisable] = useState(false);
  const [state, dispatch] = useReducer(addForumReducer, {
    topic: '',
    description: '',
  });

  useEffect(() => {
    if (state.topic === '') {
      setDisable(true);
    } else {
      setDisable(false);
    }
  }, [state]);

  return (
    <>
      <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none transition-all ease-in-out">
        <div className="modal-box w-[40%] max-w-5xl">
          <div className="felx flex-row justify-between items-center">
            <button
              type="button"
              onClick={modalAction}
              className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </button>
            <h3 className="text-lg font-bold">Buat Forum</h3>
          </div>
          <form
            className="mt-4 flex flex-col space-y-5 w-full"
            onSubmit={e => {
              addForum(e, idClasses, idContent, {
                topic: state.topic,
                description: state.description,
              });
              actionSave();
            }}>
            <div className="flex flex-col space-y-1">
              <label htmlFor="class-textinput" className="font-medium">
                Topik
              </label>
              <input
                type="text"
                placeholder="Bab 1"
                name="class-textinput"
                className="input input-bordered w-full "
                onChange={(e: ChangeEvent<HTMLInputElement>) =>
                  dispatch({
                    type: Types.ForumTopic,
                    payload: {
                      topic: e.target.value,
                    },
                  })
                }
              />
            </div>
            <div className="flex flex-col space-y-1">
              <label htmlFor="desc-textarea" className="font-medium">
                Description
              </label>
              <textarea
                name="desc-textarea"
                className="textarea textarea-bordered w-full resize-none"
                onChange={(e: ChangeEvent<HTMLTextAreaElement>) =>
                  dispatch({
                    type: Types.ForumDesc,
                    payload: {
                      description: e.target.value,
                    },
                  })
                }
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary px-12 text-white"
              disabled={isDisable}>
              {isLoading ? <LoadingButton /> : 'Save'}
            </button>
          </form>
        </div>
      </div>
      <div className="opacity-25 fixed inset-0 z-40 bg-black" />
    </>
  );
};

export default AddForumModal;
