import React from 'react';
import { HiChevronLeft } from 'react-icons/hi';
import { useLocation, useNavigate } from 'react-router-dom';
import { MotivationalWordsType } from '../../../types/motivational-type';

type LocationParams = {
  word: MotivationalWordsType;
};

const ViewMotivationalWords = () => {
  const navigate = useNavigate();
  const { word } = useLocation().state as LocationParams;

  return (
    <section id="rombel-detail" className="py-20">
      {/* Detail Information */}
      <section>
        <div className="container mx-auto w-11/12 flex flex-row items-center mb-4 space-x-1">
          <button
            type="button"
            onClick={() => navigate(-1)}
            className="btn btn-ghost btn-square h-10 w-12">
            <HiChevronLeft className="text-2xl" />
          </button>
          <h1 className="text-3xl font-bold">Motivational Word Details</h1>
        </div>

        <div className="container mx-auto p-4 w-11/12 bg-white drop-shadow rounded-box mb-6">
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">ID</div>
            <div className="w-4/4 py-4 break-words">{word.id}</div>
          </div>
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">Active</div>
            <div className="w-4/4 py-4 break-words">
              {word.active === true ? 'True' : 'False'}
            </div>
          </div>
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">Title</div>
            <div className="w-4/4 py-4 break-words">{word.title}</div>
          </div>
          <div className="flex border-b px-6">
            <div className="w-1/5 py-4 font-bold">Body</div>
            <div className="w-4/4 py-4 break-words">{word.body}</div>
          </div>
          <div className="flex px-6">
            <div className="w-1/5 py-4 font-bold">From</div>
            <div className="w-4/4 py-4 break-words">{word.from}</div>
          </div>
          <div className="flex px-6">
            <div className="w-1/5 py-4 font-bold">Created At</div>
            <div className="w-4/4 py-4 break-words">{word.created_at}</div>
          </div>
        </div>
      </section>
    </section>
  );
};

export default ViewMotivationalWords;
