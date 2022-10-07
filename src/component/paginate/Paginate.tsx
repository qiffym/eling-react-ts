import React, { FC } from 'react';

type Props = {
  postPerPage: number;
  totalPosts: number;
  pagination: any;
};

const Paginate: FC<Props> = ({ postPerPage, totalPosts, pagination }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <div className="btn-group">
      {pageNumbers.map(item => (
        <button onClick={() => pagination(item)} key={item} className="btn">
          {item}
        </button>
      ))}
      {/* <button className="btn">1</button>
      <button className="btn btn-active">2</button>
      <button className="btn">3</button>
      <button className="btn">4</button> */}
    </div>
  );
};

export default Paginate;
