/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { StudentClasses } from '../../types/student-type';

type ListClass = {
  classes: StudentClasses[] | undefined;
};

const CardClass: FC<ListClass> = ({ classes }) => {
  const navigate = useNavigate();
  return (
    <section>
      {/* Card Class */}
      <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-2 sm:place-items-stretch sm:gap-5 lg:grid-cols-3 2xl:grid-cols-3">
        {classes
          ?.sort((rombA, rombB) =>
            rombA.rombel_class.localeCompare(rombB.rombel_class),
          )
          .map((item) => (
            <div
              key={item.id}
              className="card overflow-visible static w-full md:w-[17rem] bg-base-100 drop-shadow-sm sm:drop-shadow-xl">
              <div className="card-body py-5 overflow-visible">
                <div>
                  <h2 className="font-bold text-xl">{item.rombel_class}</h2>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/my-classes/${item.id}`, {
                      state: item,
                    })
                  }
                  className="text-left card-title cursor-pointer">
                  {item.name}
                </button>
                <p className="font-medium text-sm opacity-90">
                  <span>Senin</span> | <span>07.30 - 09.00 WIB</span>
                </p>
                {/* <p>{item.description}</p> */}
                <hr className="" />
                <div className="flex flex-col">
                  <div className="card-actions flex flex-row justify-between items-center">
                    <div className="flex items-center space-x-2">
                      <div className="avatar">
                        <div className="mask mask-circle w-7 h-7">
                          <img
                            className="w-10 rounded-full"
                            src={item.teacher.avatar}
                            alt="teacher"
                          />
                        </div>
                      </div>
                      <p className="font-semibold text-sm">
                        {item.teacher.name}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/my-classes/${item.id}`, {
                          state: item,
                        })
                      }
                      className="btn btn-primary btn-sm">
                      View
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default CardClass;
