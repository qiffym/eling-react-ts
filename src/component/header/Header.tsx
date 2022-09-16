import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => {
  return <h1 className="mb-4 text-3xl font-bold">{children}</h1>;
};

export default Header;
