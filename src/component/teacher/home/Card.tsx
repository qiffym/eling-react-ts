/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
import { ClassesType } from '../../../types/class-type';

type ListClass = {
  classes: ClassesType[] | undefined;
};

const CardClass: FC<ListClass> = ({ classes }) => {
  const navigate = useNavigate();

  return (
    <>
      {/* Card Class */}
      <div className="grid grid-cols-1 place-items-center gap-5 sm:grid-cols-3 sm:place-items-stretch sm:gap-5 2xl:grid-cols-4">
        {classes
          ?.sort((rombA, rombB) =>
            rombA.rombel_name.localeCompare(rombB.rombel_name),
          )
          .map((item) => (
            <div
              key={item.id}
              className="card overflow-visible static w-[21rem] bg-base-100 drop-shadow-sm sm:drop-shadow-xl">
              <div className="card-body py-5 overflow-visible">
                <div className="flex flex-row justify-between items-center">
                  <h2 className="font-bold text-xl">{item.rombel_name}</h2>
                  <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost m-1">
                      <HiDotsVertical />
                    </label>
                    <ul
                      tabIndex={0}
                      className="dropdown-content menu p-2 shadow bg-base-100 rounded-lg w-32">
                      <li>
                        <button
                          type="button"
                          className="btn btn-ghost text-xs py-0">
                          Edit
                        </button>
                      </li>
                      <li>
                        <label
                          tabIndex={0}
                          className="btn btn-ghost hover:btn-error text-xs py-0">
                          Delete
                        </label>
                      </li>
                    </ul>
                  </div>
                </div>
                <button
                  type="button"
                  onClick={() =>
                    navigate(`/online-class/${item.id}`, {
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
                            src={item.teacher_avatar}
                            alt="teacher"
                          />
                        </div>
                      </div>
                      <p className="font-semibold text-sm">
                        {item.teacher_name}
                      </p>
                    </div>
                    <button
                      type="button"
                      onClick={() =>
                        navigate(`/online-class/${item.id}`, {
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
    </>
  );
};

export default CardClass;
