import {
  ClassListType,
  CreateUserType,
  DeleteSuccessType,
  LoginType,
  UpdateUserType,
} from '../types/context-type';
import {
  ActionMap,
  ClassPayload,
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
