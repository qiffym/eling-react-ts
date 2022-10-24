import {
  AddAssignmentSuccessType,
  AddAssignmentType,
  AddContentSuccessType,
  AddContentType,
  AddForumSuccessType,
  AddForumType,
  AddMaterialSuccessType,
  AddMaterialType,
  ClassListType,
  CreateClassSuccessType,
  CreateClassType,
  CreateUserType,
  DeleteSuccessType,
  LoginType,
  UpdateUserType,
} from '../types/context-type';
import {
  ActionMap,
  AddAssignmentPayload,
  AddAssignmentSuccessPayload,
  AddContentPayload,
  AddContentSuccessPayload,
  AddForumPayload,
  AddForumSuccessPayload,
  AddMaterialPayload,
  AddMaterialSuccessPayload,
  ClassPayload,
  CreateClassPayload,
  CreateClassSuccessPayload,
  CreateUserPayload,
  DeleteSuccessPayload,
  LoginPayload,
  UpdateUserPayload,
} from '../types/reducer-type';

export type LoginAction =
  ActionMap<LoginPayload>[keyof ActionMap<LoginPayload>];

export const loginReducer = (state: LoginType, action: LoginAction) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        ...state,
        user: action.payload.user,
        token: action.payload.token,
      };

    default:
      return state;
  }
};

export type ClassListAction =
  ActionMap<ClassPayload>[keyof ActionMap<ClassPayload>];

export const classReducer = (state: ClassListType, action: ClassListAction) => {
  switch (action.type) {
    case 'CLASSES':
      return {
        ...state,
        classList: action.payload.classList,
      };

    default:
      return state;
  }
};

export type DeleteSuccessAction =
  ActionMap<DeleteSuccessPayload>[keyof ActionMap<DeleteSuccessPayload>];

export const deleteSuccessReducer = (
  state: DeleteSuccessType,
  action: DeleteSuccessAction,
) => {
  switch (action.type) {
    case 'SUCCESS':
      return {
        ...state,
        success: action.payload.success,
      };

    default:
      return state;
  }
};

export type CreateClassSuccessAction =
  ActionMap<CreateClassSuccessPayload>[keyof ActionMap<CreateClassSuccessPayload>];

export const createClassSuccessReducer = (
  state: CreateClassSuccessType,
  action: CreateClassSuccessAction,
) => {
  switch (action.type) {
    case 'CLASS_SUCCESS':
      return {
        ...state,
        success: action.payload.success,
      };

    default:
      return state;
  }
};

export type AddContentSuccessAction =
  ActionMap<AddContentSuccessPayload>[keyof ActionMap<AddContentSuccessPayload>];

export const addContentSuccessReducer = (
  state: AddContentSuccessType,
  action: AddContentSuccessAction,
) => {
  switch (action.type) {
    case 'CONTENT_SUCCESS':
      return {
        ...state,
        success: action.payload.success,
      };

    default:
      return state;
  }
};

export type AddMaterialSuccessAction =
  ActionMap<AddMaterialSuccessPayload>[keyof ActionMap<AddMaterialSuccessPayload>];

export const addMaterialSuccessReducer = (
  state: AddMaterialSuccessType,
  action: AddMaterialSuccessAction,
) => {
  switch (action.type) {
    case 'MATERIAL_SUCCESS':
      return {
        ...state,
        success: action.payload.success,
      };

    default:
      return state;
  }
};

export type AddForumSuccessAction =
  ActionMap<AddForumSuccessPayload>[keyof ActionMap<AddForumSuccessPayload>];

export const addForumSuccessReducer = (
  state: AddForumSuccessType,
  action: AddForumSuccessAction,
) => {
  switch (action.type) {
    case 'FORUM_SUCCESS':
      return {
        ...state,
        success: action.payload.success,
      };

    default:
      return state;
  }
};

export type AddAssignmentSuccessAction =
  ActionMap<AddAssignmentSuccessPayload>[keyof ActionMap<AddAssignmentSuccessPayload>];

export const addAssignmentSuccessReducer = (
  state: AddAssignmentSuccessType,
  action: AddAssignmentSuccessAction,
) => {
  switch (action.type) {
    case 'ASSIGNMENT_SUCCESS':
      return {
        ...state,
        success: action.payload.success,
      };

    default:
      return state;
  }
};

export type CreateUserAction =
  ActionMap<CreateUserPayload>[keyof ActionMap<CreateUserPayload>];

export const createUserReducer = (
  state: CreateUserType,
  action: CreateUserAction,
) => {
  switch (action.type) {
    case 'ROLE':
      return {
        ...state,
        role: action.payload.role,
      };
    case 'GENDER':
      return {
        ...state,
        gender: action.payload.gender,
      };
    case 'NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    case 'USERNAME':
      return {
        ...state,
        username: action.payload.username,
      };
    case 'EMAIL':
      return {
        ...state,
        email: action.payload.email,
      };
    case 'PASSWORD':
      return {
        ...state,
        password: action.payload.password,
      };
    case 'CONFIRM_PASSWORD':
      return {
        ...state,
        confirm_password: action.payload.confirm_password,
      };
    default:
      return state;
  }
};

export type UpdateUserAction =
  ActionMap<UpdateUserPayload>[keyof ActionMap<UpdateUserPayload>];

export const updateUserReducer = (
  state: UpdateUserType,
  action: UpdateUserAction,
) => {
  switch (action.type) {
    case 'UPDATE_NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    case 'UPDATE_USERNAME':
      return {
        ...state,
        username: action.payload.username,
      };
    case 'UPDATE_EMAIL':
      return {
        ...state,
        email: action.payload.email,
      };

    case 'UPDATE_GENDER':
      return {
        ...state,
        gender: action.payload.gender,
      };
    case 'UPDATE_RELIGION':
      return {
        ...state,
        religion: action.payload.religion,
      };
    case 'UPDATE_BIRTHDAY':
      return {
        ...state,
        birthday: action.payload.birthday,
      };
    case 'UPDATE_ADDRESS':
      return {
        ...state,
        address: action.payload.address,
      };

    case 'UPDATE_STATUS':
      return {
        ...state,
        status: action.payload.status,
      };
    case 'UPDATE_TELPON':
      return {
        ...state,
        telpon: action.payload.telpon,
      };
    case 'UPDATE_CONFIRM_PASSWORD':
      return {
        ...state,
        confirm_password: action.payload?.confirm_password,
      };

    default:
      return state;
  }
};

export type CreateClassAction =
  ActionMap<CreateClassPayload>[keyof ActionMap<CreateClassPayload>];

export const createClassReducer = (
  state: CreateClassType,
  action: CreateClassAction,
) => {
  switch (action.type) {
    case 'CLASS_NAME':
      return {
        ...state,
        name: action.payload.name,
      };
    case 'CLASS_DESCRIPTION':
      return {
        ...state,
        description: action.payload.description,
      };
    case 'ROMBEL_CLASS_ID':
      return {
        ...state,
        rombel_class_id: action.payload.rombel_class_id,
      };
    default:
      return state;
  }
};

export type AddContentAction =
  ActionMap<AddContentPayload>[keyof ActionMap<AddContentPayload>];

export const addContentReducer = (
  state: AddContentType,
  action: AddContentAction,
) => {
  switch (action.type) {
    case 'CONTENT_TITLE':
      return {
        ...state,
        title: action.payload.title,
      };

    case 'CONTENT_DESC':
      return {
        ...state,
        description: action.payload.description,
      };

    default:
      return state;
  }
};

export type AddMaterialAction =
  ActionMap<AddMaterialPayload>[keyof ActionMap<AddMaterialPayload>];

export const addMaterialReducer = (
  state: AddMaterialType,
  action: AddMaterialAction,
) => {
  switch (action.type) {
    case 'MATERIAL_TITLE':
      return {
        ...state,
        title: action.payload.title,
      };

    case 'MATERIAL_FILE':
      return {
        ...state,
        file: action.payload.file,
      };

    default:
      return state;
  }
};

export type AddForumAction =
  ActionMap<AddForumPayload>[keyof ActionMap<AddForumPayload>];

export const addForumReducer = (
  state: AddForumType,
  action: AddForumAction,
) => {
  switch (action.type) {
    case 'FORUM_TOPIC':
      return {
        ...state,
        topic: action.payload.topic,
      };

    case 'FORUM_DESC':
      return {
        ...state,
        description: action.payload.description,
      };

    default:
      return state;
  }
};

export type AddAssignmentAction =
  ActionMap<AddAssignmentPayload>[keyof ActionMap<AddAssignmentPayload>];

export const addAssignmentReducer = (
  state: AddAssignmentType,
  action: AddAssignmentAction,
) => {
  switch (action.type) {
    case 'ASSIGNMENT_TITLE':
      return {
        ...state,
        title: action.payload.title,
      };

    case 'ASSIGNMENT_DESC':
      return {
        ...state,
        description: action.payload.description,
      };

    case 'ASSIGNMENT_DEADLINE':
      return {
        ...state,
        deadline: action.payload.deadline,
      };

    default:
      return state;
  }
};
