/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC } from 'react';
import { useFetch } from '../../../hooks/useFetch';
import { ContentType } from '../../../types/class-type';
import Loading from '../../loading/Loading';

import ContentDetail from './ContentDetail';

type Props = {
  classId: number;
};

export const ClassContent: FC<Props> = ({ classId }) => {
  const { isLoading, data } = useFetch(
    `/api/student/my-classes/${classId}/contents`,
  );
  const contentList: ContentType[] = data;

  return (
    <>
      {/* Section Content Class */}
      <section id="content-class">
        <div className="container mx-auto w-11/12">
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
                className="hover:btn-ghost overflow-visible transition-all collapse collapse-arrow rounded-box shadow-md mb-4 border-l-4 border-l-primary bg-white p-1">
                <input type="checkbox" />
                {/* Title Collapse */}
                <div className="collapse-title text-xl font-medium">
                  <h5 className="text-sm text-slate-600">
                    {`Pembelajaran ${index + 1}`}
                  </h5>
                  <div className="flex flex-row w-full justify-between items-center cursor-pointer">
                    <h2 className="font-bold">{item.title}</h2>
                  </div>
                  <p className="text-xs font-semibold text-slate-600">
                    Dibuat {item.created_at ?? ''}
                  </p>
                </div>

                {/* Content Collapse */}
                <ContentDetail classID={classId} contentID={item.id!} />
              </div>
            ))
          )}
        </div>
      </section>
    </>
  );
};
