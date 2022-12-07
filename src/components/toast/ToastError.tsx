import React, { FC } from 'react';

type Props = {
  desc: string;
};

const ToastError: FC<Props> = ({ desc }) => (
  <div className="alert alert-error shadow-lg fixed bottom-20 md:bottom-10 w-11/12 md:w-[80%]">
    <div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="stroke-current flex-shrink-0 h-6 w-6"
        fill="none"
        viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span className="text-sm md:text-md">{desc}</span>
    </div>
  </div>
);

export default ToastError;
