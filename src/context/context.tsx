import React, {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  useMemo,
  useReducer,
} from 'react';
import {
  AddAssignmentSuccessAction,
  addAssignmentSuccessReducer,
  AddContentSuccessAction,
  addContentSuccessReducer,
  AddForumSuccessAction,
  addForumSuccessReducer,
  AddMaterialSuccessAction,
  addMaterialSuccessReducer,
  ClassListAction,
  classReducer,
  CreateClassSuccessAction,
  createClassSuccessReducer,
  DeleteClassSuccessAction,
  deleteClassSuccessReducer,
  DeleteContentSuccessAction,
  DeleteContentSuccessReducer,
  DeleteMaterialSuccessAction,
  deleteMaterialSuccessReducer,
  DeleteSuccessAction,
  deleteSuccessReducer,
  LoginAction,
  loginReducer,
  UpdateSuccessAction,
  updateSuccessReducer,
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
  createClassSuccess: {
    success: false,
  },
  addContentSuccess: {
    success: false,
  },
  addMaterialSuccess: {
    success: false,
  },
  addForumSuccess: {
    success: false,
  },
  addAssignmentSuccess: {
    success: false,
  },
  deleteSuccess: {
    success: false,
  },
  deleteMaterialSuccess: {
    success: false,
  },
  deleteClassSuccess: {
    success: false,
  },
  deleteContentSuccess: {
    success: false,
  },
  updateSuccess: {
    success: false,
  },
};

export const MyContext = createContext<{
  state: InitialStateType;
  dispatch: Dispatch<
    | LoginAction
    | ClassListAction
    | DeleteSuccessAction
    | DeleteMaterialSuccessAction
    | DeleteClassSuccessAction
    | DeleteContentSuccessAction
    | CreateClassSuccessAction
    | AddContentSuccessAction
    | AddMaterialSuccessAction
    | AddForumSuccessAction
    | AddAssignmentSuccessAction
    | UpdateSuccessAction
  >;
}>({
  state: contextInitialState,
  dispatch: () => {},
});

const mainReducer = (
  {
    login,
    classes,
    deleteSuccess,
    deleteMaterialSuccess,
    deleteClassSuccess,
    deleteContentSuccess,
    createClassSuccess,
    addContentSuccess,
    addMaterialSuccess,
    addForumSuccess,
    addAssignmentSuccess,
    updateSuccess,
  }: InitialStateType,
  action: any,
) => ({
  login: loginReducer(login, action),
  classes: classReducer(classes, action),
  createClassSuccess: createClassSuccessReducer(createClassSuccess, action),
  deleteSuccess: deleteSuccessReducer(deleteSuccess, action),
  deleteMaterialSuccess: deleteMaterialSuccessReducer(
    deleteMaterialSuccess,
    action,
  ),
  deleteClassSuccess: deleteClassSuccessReducer(deleteClassSuccess, action),
  deleteContentSuccess: DeleteContentSuccessReducer(
    deleteContentSuccess,
    action,
  ),
  addContentSuccess: addContentSuccessReducer(addContentSuccess, action),
  addMaterialSuccess: addMaterialSuccessReducer(addMaterialSuccess, action),
  addForumSuccess: addForumSuccessReducer(addForumSuccess, action),
  addAssignmentSuccess: addAssignmentSuccessReducer(
    addAssignmentSuccess,
    action,
  ),
  updateSuccess: updateSuccessReducer(updateSuccess, action),
});

const ContextProvider: FC<Props> = ({ children }) => {
  const [state, dispatch] = useReducer(mainReducer, contextInitialState);

  const value = useMemo(() => ({ state, dispatch }), [state, dispatch]);

  return <MyContext.Provider value={value}>{children}</MyContext.Provider>;
};

export default ContextProvider;
