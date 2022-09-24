import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useMemo,
  useReducer,
} from 'react';
import {
  ClassesAction,
  classesReducer,
  LoginAction,
  loginReducer,
  NgetesAction,
  ngetesReducer,
} from '../reducers/reducers';
import { InitialStateType } from '../types/context-type';

type Props = {
  children: ReactNode;
};

const contextInitialState: InitialStateType = {
  login: {
    user: {
      id: 0,
      name: '',
      username: '',
      email: '',
      role: '',
      avatar: '',
    },
    token: '',
  },
  ngetes: {
    hasil: '',
  },
  classes: [],
};

export const MyContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<LoginAction | ClassesAction | NgetesAction>;
}>({
  state: contextInitialState,
  dispatch: () => {},
});

const mainReducer = (
  { login, classes, ngetes }: InitialStateType,
  action: any
) => ({
  login: loginReducer(login, action),
  classes: classesReducer(classes, action),
  ngetes: ngetesReducer(ngetes, action),
});

const ContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, contextInitialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default ContextProvider;
