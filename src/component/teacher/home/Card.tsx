import React from 'react';
import { FC } from 'react';
import { Classes } from '../../../types/class-type';

type ListClass = {
  classes: Classes[];
};

const CardClass: FC<ListClass> = ({ classes }) => {
  return (
    <div className="grid grid-cols-3">
      {classes.map((item) => (
        <div key={item.id} className="card w-80 bg-base-100 shadow-xl">
          <div className="card-body">
            <p className="font-semibold">{item.rombel_name}</p>
            <h2 className="card-title">{item.name}</h2>
            <p>{item.description}</p>
            <div className="card-actions flex flex-row justify-between items-center">
              <div className="flex flex-row items-center space-x-2">
                <img
                  className="w-10 rounded-full"
                  src={item.teacher_avatar}
                  alt="teacher"
                />
                <p className="font-semibold">{item.teacher_name}</p>
              </div>
              <button className="btn btn-ghost px-4">View</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardClass;
