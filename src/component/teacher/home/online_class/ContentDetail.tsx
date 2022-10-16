import React, { FC } from 'react';
import { HiPlusCircle, HiTrash, HiPencilAlt, HiBookOpen } from 'react-icons/hi';
import { MdAssignment, MdForum } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../../hooks/useFetch';
import { ContentDetailType } from '../../../../types/class-type';

type Props = {
  classId: number;
  contentId?: number;
};

const ContentDetail: FC<Props> = ({ classId, contentId }) => {
  const { data } = useFetch(
    `/api/teacher/online-classes/${classId}/contents/${contentId}`,
  );

  const contentData: ContentDetailType = data;

  return (
    <div className="collapse-content text-lg font-medium mt-2">
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

      <div className="flex flex-col space-y-3">
        {/* content materi */}
        <div id="material">
          <label
            htmlFor="material"
            className="text-sm text-slate-500 font-bold uppercase -mb-3 flex-none">
            <div className="flex flex-row items-center">
              <HiBookOpen className="mr-1" /> Material
            </div>
          </label>
          <div className="flex justify-between items-center mx-4">
            <div className="flex flex-col w-full">
              {contentData.materials?.map(item => (
                <div key={item.id} className="flex flex-row justify-between">
                  <a target="_blank" href={item.file} rel="noreferrer">
                    {item.title}
                  </a>
                  <div className="editable space-x-1">
                    <div className="tooltip" data-tip="edit materi">
                      <button
                        name="edit-materi"
                        className="btn btn-xs btn-warning btn-square">
                        <HiPencilAlt />
                      </button>
                    </div>
                    <div className="tooltip" data-tip="delete materi">
                      <button
                        name="delete-materi"
                        className="btn btn-xs btn-error btn-square">
                        <HiTrash />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* content forum */}
        <div id="forum">
          <label
            htmlFor="material"
            className="text-sm text-slate-500 font-bold uppercase -mb-3 flex-none">
            <div className="flex flex-row items-center">
              <HiBookOpen className="mr-1" /> Forum Diskusi
            </div>
          </label>
          <div className="flex justify-between items-center mx-4">
            <div className="flex flex-col w-full">
              <div className="flex flex-row justify-between">
                {/* <a href="#!">Forum 1</a> */}
                <Link to={`forums/${contentId}`}>Forum 1</Link>
                {/* TODO: Buat btn disini hanya pada role guru*/}
                <div className="editable space-x-1">
                  <div className="tooltip" data-tip="edit forum">
                    <button
                      name="edit-forum"
                      className="btn btn-xs btn-warning btn-square">
                      <HiPencilAlt />
                    </button>
                  </div>
                  <div className="tooltip" data-tip="delete forum">
                    <button
                      name="delete-forum"
                      className="btn btn-xs btn-error btn-square">
                      <HiTrash />
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between">
                <a href="#!">Forum 2</a>
                {/* TODO: Buat btn disini hanya pada role guru*/}
                <div className="editable space-x-1">
                  <div className="tooltip" data-tip="edit forum">
                    <button
                      name="edit-forum"
                      className="btn btn-xs btn-warning btn-square">
                      <HiPencilAlt />
                    </button>
                  </div>
                  <div className="tooltip" data-tip="delete forum">
                    <button
                      name="delete-forum"
                      className="btn btn-xs btn-error btn-square">
                      <HiTrash />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* content assignment */}
        <div id="tugas">
          <label
            htmlFor="tugas"
            className="text-sm text-slate-500 font-bold uppercase -mb-3 flex-none">
            <div className="flex flex-row items-center">
              <MdAssignment className="mr-1" /> Tugas
            </div>
          </label>
          <div className="flex justify-between items-center mx-4">
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
  );
};

export default ContentDetail;
