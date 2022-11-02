import React from 'react';
import { FaComment } from 'react-icons/fa';
import { HiPencilAlt, HiTrash, HiChevronLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import ryujin from '../../../assets/ryujin1.jpg';
import Loading2ND from '../../../component/loading/Loading2nd';
import { useFetch } from '../../../hooks/useFetch';
import { ForumDetailType, ForumType } from '../../../types/class-type';

const Forum = () => {
  const { classID, forum, teacher } = useLocation().state as any;
  const navigate = useNavigate();
  const idClass: number = classID;
  const forumData: ForumType = forum;
  const { isLoading, data } = useFetch(
    `/api/teacher/online-classes/${idClass}/contents/${forumData.content_id}/forums/${forumData.id}`,
  );
  const forumDetailData: ForumDetailType = data;

  const changeLanguage = (word: string) => {
    switch (word) {
      case 'Student':
        return 'Siswa';

      case 'Teacher':
        return 'Guru';

      default:
        return word;
    }
  };

  return (
    <>
      <section id="header" className="mt-20">
        <div className="flex flex-row items-center space-x-2 container ml-16 mb-4 w-9/12 rounded-box">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-square h-5 w-10">
            <HiChevronLeft className="text-2xl" />
          </button>
          <h1 className="text-3xl font-bold">
            Forum Diskusi {data.content_of}
          </h1>
          <hr className="mb-4 border-t-2" />
        </div>
      </section>
      {/* Threat Section */}
      {isLoading ? (
        <div className="flex h-screen">
          <div className="m-auto flex flex-col space-y-5">
            <Loading2ND />
          </div>
        </div>
      ) : (
        <>
          <section id="threat" className="mb-5">
            <div className="container ml-16 p-4 w-9/12 bg-white drop-shadow rounded-box">
              <div className="flex items-start space-x-4">
                <div className="avatar">
                  <div className="w-16 mask mask-squircle">
                    <img src={forumDetailData.avatar} alt="avatar" />
                  </div>
                </div>
                <div className="grow">
                  {/* Nama dan Waktu dibuat */}
                  <div className="flex justify-between items-start">
                    <div className="mb-2">
                      <p className="font-bold">{teacher.name}</p>
                      <div className="flex items-center space-x-1 font-semibold text-2xs">
                        <span className="text-teal-700">
                          {changeLanguage(forumDetailData.author_role)}
                        </span>
                        <span>|</span>
                        <span className="text-slate-700">
                          Diposting {forumData.created_at}
                        </span>
                      </div>
                    </div>
                    <div className="flex font-medium items-center space-x-1 mr-5">
                      <FaComment /> <span className="text-sm">2</span>
                    </div>
                  </div>
                  {/* Topik dan Deskripsi */}
                  <div>
                    <div className="container mx-auto p-4 mb-2 bg-slate-200 rounded-box font-medium text-black text-lg">
                      <p>{forumDetailData.topic}</p>
                    </div>
                    <p>{forumDetailData.description}</p>
                  </div>
                </div>
              </div>
              {/* Hanya dapat dilihat guru */}
              <div className="editable flex justify-end items-center space-x-2 mt-4">
                <div className="tooltip" data-tip="edit forum">
                  <button
                    type="button"
                    name="edit-forum"
                    className="btn btn-sm btn-warning btn-square text-lg">
                    <HiPencilAlt />
                  </button>
                </div>
                <div className="tooltip" data-tip="delete forum">
                  <button
                    type="button"
                    name="delete-forum"
                    className="btn btn-sm btn-error btn-square text-lg">
                    <HiTrash />
                  </button>
                </div>
              </div>
            </div>
          </section>
          {/* Comment Section */}
          {forumDetailData?.comments?.map((item) => (
            <>
              <section key={item.id} id="comment" className="mb-5">
                <div className="container ml-16 p-4 w-9/12 bg-white drop-shadow rounded-box">
                  <div className="flex items-start space-x-4">
                    <div className="avatar">
                      <div className="w-16 mask mask-squircle">
                        <img src={item.avatar} alt="avatar" />
                      </div>
                    </div>
                    <div className="grow">
                      {/* Nama dan Waktu dibuat */}
                      <div className="mb-2">
                        <p className="font-bold">{item.author}</p>
                        <div className="flex items-center space-x-1 font-semibold text-2xs">
                          <span className="text-teal-700">
                            {changeLanguage(item.author_role)}
                          </span>
                          <span>|</span>
                          <span className="text-slate-700">
                            Diposting {item.created_at}
                          </span>
                        </div>
                      </div>
                      {/* Comment */}
                      <div className="mb-2">
                        <p>{item.comment}</p>
                      </div>
                      {/* Button Reply */}
                      <button
                        type="button"
                        className="btn btn-sm btn-outline normal-case">
                        Reply
                      </button>
                    </div>
                  </div>
                </div>
              </section>

              {/* Sub-Comment */}
              {item.sub_comments.map((subComments) => (
                <section id="comment" className="mb-5">
                  <div className="container ml-28 p-4 w-[72%] bg-white drop-shadow rounded-box">
                    <div className="flex items-start space-x-4">
                      <div className="avatar">
                        <div className="w-16 mask mask-squircle">
                          <img src={subComments.avatar} alt="avatar" />
                        </div>
                      </div>
                      <div className="grow">
                        {/* Nama dan Waktu dibuat */}
                        <div className="mb-2">
                          <p className="font-bold">{subComments.author}</p>
                          <div className="flex items-center space-x-1 font-semibold text-2xs">
                            <span className="text-teal-700">
                              {changeLanguage(subComments.author_role)}
                            </span>
                            <span>|</span>
                            <span className="text-slate-700">
                              Diposting {subComments.created_at}
                            </span>
                          </div>
                        </div>
                        {/* Comment */}
                        <div className="mb-2">
                          <p>{subComments.comment}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </section>
              ))}
            </>
          ))}
          {/* Reply Section */}
          <section>
            <div className="container ml-16 w-9/12 drop-shadow rounded-box text-left">
              <button
                type="button"
                className="rounded-box border border-[#3d4451] border-dashed w-full py-5 px-8 hover:bg-[#3d4451] hover:border-white hover:text-white active:scale-[0.95]">
                <div className="flex justify-start items-center space-x-4">
                  <div className="avatar">
                    <div className="w-10 mask mask-squircle">
                      <img src={ryujin} alt="avatar" />
                    </div>
                  </div>
                  <p>Write your reply.</p>
                </div>
              </button>
            </div>
          </section>
        </>
      )}
    </>
  );
};

export default Forum;
