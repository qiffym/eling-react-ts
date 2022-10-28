/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC, useContext, useState } from 'react';
import { HiPlusCircle, HiDotsHorizontal } from 'react-icons/hi';
import { MyContext } from '../../../../context/context';
import { useDeleteContent } from '../../../../hooks/useDeleteClasses';
import { useFetch } from '../../../../hooks/useFetch';
import { ContentType } from '../../../../types/class-type';
import { Types } from '../../../../types/reducer-type';
import DropdownOptions from '../../../dropdown/Dropdown';
import Loading from '../../../loading/Loading';
import AddContentModal from '../../../modal/AddContentModal';
import EditContentModal from '../../../modal/EditContentModal';
import ContentDetail from './ContentDetail';

type Props = {
  teacherName?: string;
  role?: string;
  classId: number;
};

export const ClassContent: FC<Props> = ({ teacherName, role, classId }) => {
  const { isLoading, data } = useFetch(
    `/api/teacher/online-classes/${classId}/contents`,
  );
  const { dispatch } = useContext(MyContext);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [openModalEdit, setOpenModalEdit] = useState<boolean>(false);
  const contentList: ContentType[] = data;
  const [display, setDisplay] = useState('hidden');
  const [contentData, setContentData] = useState({
    id: 0,
    title: '',
    desc: '',
  });
  const deleteContent = useDeleteContent(
    `/api/teacher/online-classes/${classId}/contents/`,
  );

  const [show, setShow] = useState(0);

  const showButton = (e: any, id: number | undefined) => {
    e.preventDefault();
    setShow(id!);
    setDisplay('block');
  };

  const hideButton = (e: any) => {
    e.preventDefault();
    setShow(0);
    setDisplay('hidden');
  };

  return (
    <>
      {/* Section Content Class */}
      <section id="content-class">
        <div className="container mx-auto w-11/12">
          {/* TODO: Buat btn create ini hanya pada role guru */}
          <button
            type="button"
            onClick={() => setOpenModal(true)}
            className="btn btn-md normal-case px-3 mb-4">
            <HiPlusCircle className="text-3xl mr-1" />
            <span className="text-md">Tambah konten</span>
          </button>

          <div id="header-content" className="mb-5">
            <h2 className="text-lg font-bold">Materi Pembelajaran</h2>
            <blockquote>
              Unduh materi, kerjakan tugas, dan ikuti forum diskusi
            </blockquote>
          </div>

          {/* Collapse Content #1 */}
          {isLoading ? (
            <Loading />
          ) : (
            contentList.map((item, index) => (
              <div
                key={item.id}
                tabIndex={0}
                onMouseEnter={(e) => showButton(e, item.id)}
                onMouseLeave={(e) => hideButton(e)}
                className="hover:btn-ghost overflow-visible transition-all collapse collapse-arrow rounded-box shadow-md mb-4 border-l-4 border-l-primary bg-white p-1">
                <input type="checkbox" />
                {/* Title Collapse */}
                <div className="collapse-title text-xl font-medium">
                  <h5 className="text-sm text-slate-600">
                    {`Pembelajaran ${index + 1}`}
                  </h5>
                  <div className="flex flex-row w-full justify-between items-center cursor-pointer">
                    <h2 className="font-bold">{item.title}</h2>
                    {show === item.id && (
                      <DropdownOptions
                        icon={<HiDotsHorizontal />}
                        display={display}
                        onEdit={() => {
                          setContentData({
                            id: item.id!,
                            title: item.title!,
                            desc: item.description!,
                          });
                          setOpenModalEdit(true);
                        }}
                        onDelete={() => {
                          deleteContent(item.id!);
                          dispatch({
                            type: Types.DeleteContentSuccess,
                            payload: {
                              success: false,
                            },
                          });
                        }}
                      />
                    )}
                  </div>
                  <p className="text-xs font-semibold text-slate-600">
                    Dibuat {item.created_at ?? ''}
                  </p>
                </div>

                {/* Content Collapse */}
                <ContentDetail
                  teacherName={teacherName}
                  role={role}
                  classId={classId}
                  contentId={item.id}
                />
              </div>
            ))
          )}
        </div>
      </section>

      {openModal ? (
        <AddContentModal
          idClasses={classId}
          actionSave={() => {
            dispatch({
              type: Types.AddContentSuccess,
              payload: {
                success: false,
              },
            });
            setOpenModal(false);
          }}
          modalAction={() => setOpenModal(false)}
        />
      ) : null}

      {openModalEdit ? (
        <EditContentModal
          idClasses={classId}
          idContent={contentData.id}
          titleContent={contentData.title}
          descContent={contentData.desc}
          actionSave={() => {
            dispatch({
              type: Types.UpdateSuccess,
              payload: {
                success: false,
              },
            });
            setOpenModalEdit(false);
          }}
          modalAction={() => setOpenModalEdit(false)}
        />
      ) : null}
    </>
  );
};
