/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC, useContext, useState } from 'react';
import { HiPlusCircle, HiTrash, HiBookOpen } from 'react-icons/hi';
import { MdAssignment, MdForum } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../../context/context';
import {
  useFetchAssignment,
  useFetchForum,
  useFetchMaterial,
} from '../../../../hooks/useClasses';
import { useDeleteMaterial } from '../../../../hooks/useDeleteClasses';
import { ContentDetailType } from '../../../../types/class-type';
import { Types } from '../../../../types/reducer-type';
import Loading2ND from '../../../loading/Loading2nd';
import AddAssignmentModal from '../../../modal/AddAssignmentModal';
import AddForumModal from '../../../modal/AddForumModal';
import AddMaterialModal from '../../../modal/AddMaterialModal';

type Props = {
  classId: number;
  contentId?: number;
};

const ContentDetail: FC<Props> = ({ classId, contentId }) => {
  const { isLoading, data } = useFetchMaterial(classId, contentId);
  const { loadingForum, forumData } = useFetchForum(classId, contentId);
  const { loadingAssignment, assignmentData } = useFetchAssignment(
    classId,
    contentId,
  );
  const deleteMaterial = useDeleteMaterial(
    `/api/teacher/online-classes/${classId}/contents/${contentId}/materials/`,
  );

  const [openModal, setOpenModal] = useState(false);
  const [openModalForum, setOpenModalForum] = useState(false);
  const [openModalAssignment, setOpenModalAssignment] = useState(false);
  const { dispatch } = useContext(MyContext);
  const contentData: ContentDetailType = data;
  const forumList: ContentDetailType = forumData;
  const assignmentList: ContentDetailType = assignmentData;

  return (
    <>
      <div className="collapse-content text-lg font-medium mt-2">
        {/* TODO: Buat btn create ini hanya pada role guru */}
        <div className="dropdown dropdown-right mb-4">
          <label tabIndex={0} className="btn btn-sm normal-case px-3">
            <HiPlusCircle className="text-xl mr-1" />
            <span className="text-xs">Sub konten</span>
          </label>
          <ul
            tabIndex={0}
            className="dropdown-content menu shadow bg-base-100 rounded-box w-52 text-xs">
            <li>
              <button type="button" onClick={() => setOpenModal(true)}>
                <HiBookOpen />
                Add Material
              </button>
            </li>
            <li>
              <button
                type="button"
                onClick={() => setOpenModalAssignment(true)}>
                <MdAssignment />
                Add Assignment
              </button>
            </li>
            <li>
              <button type="button" onClick={() => setOpenModalForum(true)}>
                <MdForum />
                Add Forum
              </button>
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
                {isLoading ? (
                  <div className="flex flex-row items-center justify-center">
                    <Loading2ND />
                  </div>
                ) : (
                  contentData.materials?.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-row justify-between">
                      <a target="_blank" href={item.file} rel="noreferrer">
                        {item.title}
                      </a>
                      <div className="editable space-x-1">
                        <div className="tooltip" data-tip="delete materi">
                          <button
                            type="button"
                            name="delete-materi"
                            className="btn btn-xs btn-error btn-square"
                            onClick={() => {
                              deleteMaterial(item.id);
                              dispatch({
                                type: Types.DeleteMaterialSuccess,
                                payload: {
                                  success: false,
                                },
                              });
                            }}>
                            <HiTrash />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))
                )}
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
                {loadingForum ? (
                  <div className="flex flex-row items-center justify-center">
                    <Loading2ND />
                  </div>
                ) : (
                  forumList.forums?.map((item) => (
                    <div
                      key={item.id}
                      className="flex flex-row justify-between">
                      <Link to={`contents/${contentId}/forums/${item.id}`}>
                        {item.topic}
                      </Link>
                      {/* TODO: Buat btn disini hanya pada role guru */}
                    </div>
                  ))
                )}
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
            {loadingAssignment ? (
              <div className="flex flex-row items-center justify-center">
                <Loading2ND />
              </div>
            ) : (
              assignmentList.assignment?.map((item) => (
                <div
                  key={item.id}
                  className="flex justify-between items-center mx-4">
                  <Link to={`contents/${contentId}/assignment/${item.id}`}>
                    {item.title}
                  </Link>
                </div>
              ))
            )}
          </div>
        </div>
      </div>

      {openModal ? (
        <AddMaterialModal
          actionSave={() => {
            dispatch({
              type: Types.AddMaterialSuccess,
              payload: {
                success: false,
              },
            });
            setOpenModal(false);
          }}
          modalAction={() => setOpenModal(false)}
          idClasses={classId}
          idContent={contentId!}
        />
      ) : null}

      {openModalAssignment ? (
        <AddAssignmentModal
          actionSave={() => {
            dispatch({
              type: Types.AddAssignmentSuccess,
              payload: {
                success: false,
              },
            });
            setOpenModalAssignment(false);
          }}
          modalAction={() => setOpenModalAssignment(false)}
          idClasses={classId}
          idContent={contentId!}
        />
      ) : null}

      {openModalForum ? (
        <AddForumModal
          actionSave={() => {
            dispatch({
              type: Types.AddForumSuccess,
              payload: {
                success: false,
              },
            });
            setOpenModalForum(false);
          }}
          modalAction={() => setOpenModalForum(false)}
          idClasses={classId}
          idContent={contentId!}
        />
      ) : null}
    </>
  );
};

export default ContentDetail;
