import React from 'react';
import { FC } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { Classes } from '../../../types/class-type';

type ListClass = {
  classes: Classes[] | undefined;
};

const CardClass: FC<ListClass> = ({ classes }) => {
  const navigate = useNavigate();

  return (
    <>
      <section id="my-class-teacher">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-medium">My Class</h2>
          </div>
          <div>
            <input
              type="search"
              placeholder="Search"
              className="input input-bordered w-96 max-w-xs rounded-full"
            />
          </div>
        </div>
        <hr className="border-t border-black my-4" />

        {/* Card Class */}
        <div className="grid grid-cols-3 gap-5">
          {classes?.map(item => (
            <div key={item.id} className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="font-bold text-xl">{item.rombel_name}</h2>
                <h2
                  onClick={() =>
                    navigate(`/online-class/${item.id}`, { replace: true })
                  }
                  className="card-title cursor-pointer">
                  {item.name}
                </h2>
                <p className="font-medium text-sm text-slate-600">
                  <span>Senin</span> | <span>07.30 - 09.00 WIB</span>
                </p>
                {/* <p>{item.description}</p> */}
                <hr className="border-t-2" />
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
                    <p className="font-semibold text-sm">{item.teacher_name}</p>
                  </div>
                  <button
                    onClick={() =>
                      navigate(`/online-class/${item.id}`, { replace: true })
                    }
                    className="btn btn-ghost">
                    View
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default CardClass;
