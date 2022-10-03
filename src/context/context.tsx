import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useMemo,
  useReducer,
} from 'react';
import {
  ClassListAction,
  classReducer,
  DeleteSuccessAction,
  deleteSuccessReducer,
  LoginAction,
  loginReducer,
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

  classes: {
    classList: [
      {
        rombel_name: '',
        id: 0,
        name: '',
        description: '',
        teacher_avatar: '',
        teacher_id: 0,
        teacher_name: '',
      },
    ],
  },
  deleteSuccess: {
    success: false,
  },
};

export const MyContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<LoginAction | ClassListAction | DeleteSuccessAction>;
}>({
  state: contextInitialState,
  dispatch: () => {},
});

const mainReducer = (
  { login, classes, deleteSuccess }: InitialStateType,
  action: any
) => ({
  login: loginReducer(login, action),
  classes: classReducer(classes, action),
  deleteSuccess: deleteSuccessReducer(deleteSuccess, action),
});

const ContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, contextInitialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default ContextProvider;
