/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC } from 'react';
import { HiBookOpen } from 'react-icons/hi';
import { MdAssignment } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useFetch } from '../../../hooks/useFetch';
import { StudentContentDetail } from '../../../types/student-type';
import Loading2ND from '../../loading/Loading2nd';

type Props = {
  classID: number;
  contentID: number;
};

const ContentDetail: FC<Props> = ({ classID, contentID }) => {
  const { isLoading, data } = useFetch(
    `/api/student/my-classes/${classID}/contents/${contentID}`,
  );

  const contentData: StudentContentDetail = data;

  return (
    <div className="collapse-content text-lg font-medium mt-2">
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
                contentData.materials?.map((item: any) => (
                  <div key={item.id} className="flex flex-row justify-between">
                    <a target="_blank" href={item.file} rel="noreferrer">
                      {item.title}
                    </a>
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
              {isLoading ? (
                <div className="flex flex-row items-center justify-center">
                  <Loading2ND />
                </div>
              ) : (
                contentData.forums?.map((item: any) => (
                  <div key={item.id} className="flex flex-row justify-between">
                    <Link
                      to={`contents/${contentID}/forums/${item.id}`}
                      state={{
                        classID,
                        forum: item,
                      }}>
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
          {isLoading ? (
            <div className="flex flex-row items-center justify-center">
              <Loading2ND />
            </div>
          ) : (
            contentData.assignment?.map((item: any) => (
              <div
                key={item.id}
                className="flex justify-between items-center mx-4">
                <Link to={`submissions/${item.id}`}>{item.title}</Link>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};
export default ContentDetail;
