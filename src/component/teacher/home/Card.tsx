/* eslint-disable jsx-a11y/no-noninteractive-tabindex */
import React, { FC, useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { HiDotsVertical } from 'react-icons/hi';
import { MyContext } from '../../../context/context';
import { useDeleteClass } from '../../../hooks/useDeleteClasses';
import { ClassesType } from '../../../types/class-type';
import { Types } from '../../../types/reducer-type';
import DropdownOptions from '../../dropdown/Dropdown';
import EditClassModal from '../../modal/EditClassModal';

type ListClass = {
  classes: ClassesType[] | undefined;
};

const CardClass: FC<ListClass> = ({ classes }) => {
  const navigate = useNavigate();
  const [openModal, setOpenModal] = useState(false);
  const [classData, setClassData] = useState({
    id: 0,
    rombel_id: 0,
    name: '',
    desc: '',
  });
  const deleteClass = useDeleteClass('/api/teacher/online-classes/');
  const { dispatch } = useContext(MyContext);

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
                  <DropdownOptions
                    typeBtn="btn"
                    icon={<HiDotsVertical />}
                    onEdit={() => {
                      setOpenModal(true);
                      setClassData({
                        id: item.id,
                        rombel_id: item.rombel_id,
                        name: item.name,
                        desc: item.description,
                      });
                    }}
                    onDelete={() => {
                      deleteClass(item.id);
                      dispatch({
                        type: Types.DeleteClassSuccess,
                        payload: {
                          success: false,
                        },
                      });
                    }}
                  />
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

      {openModal ? (
        <EditClassModal
          classesRombelID={classData.rombel_id}
          classesID={classData.id}
          classesName={classData.name}
          classesDesc={classData.desc}
          actionSave={() => {
            dispatch({
              type: Types.UpdateSuccess,
              payload: {
                success: false,
              },
            });
            setOpenModal(false);
          }}
          modalAction={() => setOpenModal(false)}
        />
      ) : null}
    </>
  );
};

export default CardClass;
