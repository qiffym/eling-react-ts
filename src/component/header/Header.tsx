import React, { FC, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};

const Header: FC<Props> = ({ children }) => (
  <h1 className="hidden sm:block mb-4 text-3xl font-bold">{children}</h1>
);

export default Header;
