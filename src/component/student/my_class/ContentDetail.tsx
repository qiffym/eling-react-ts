/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC, useContext, useState } from 'react';
import { HiBookOpen } from 'react-icons/hi';
import { MdAssignment, MdForum } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { MyContext } from '../../../../context/context';
import {
  useFetchAssignment,
  useFetchForum,
  useFetchMaterial,
} from '../../../../hooks/useClasses';
import { ContentDetailType } from '../../../../types/class-type';
import { Types } from '../../../../types/reducer-type';
import Loading2ND from '../../../loading/Loading2nd';

type Props = {
  classId: number;
  contentId?: number;
  teacherName?: string;
  role?: string;
};

const ContentDetail: FC<Props> = ({
  classId,
  contentId,
  teacherName,
  role,
}) => {
  const { isLoading, data } = useFetchMaterial(classId, contentId);
  const { loadingForum, forumData } = useFetchForum(classId, contentId);
  const { loadingAssignment, assignmentData } = useFetchAssignment(
    classId,
    contentId,
  );

  const contentData: ContentDetailType = data;
  const forumList: ContentDetailType = forumData;
  const assignmentList: ContentDetailType = assignmentData;

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
                contentData.materials?.map((item) => (
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
              {loadingForum ? (
                <div className="flex flex-row items-center justify-center">
                  <Loading2ND />
                </div>
              ) : (
                forumList.forums?.map((item) => (
                  <div key={item.id} className="flex flex-row justify-between">
                    <Link
                      to={`contents/${contentId}/forums/${item.id}`}
                      state={{
                        classID: classId,
                        forum: item,
                        teacher: { name: teacherName, role },
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
          {loadingAssignment ? (
            <div className="flex flex-row items-center justify-center">
              <Loading2ND />
            </div>
          ) : (
            assignmentList.assignment?.map((item) => (
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
