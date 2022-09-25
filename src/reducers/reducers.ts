import {
  ClassesType,
  CreateUserType,
  DeleteSuccessType,
  LoginType,
} from '../types/context-type';
import {
  ActionMap,
  ClassesPayload,
  CreateUserPayload,
  DeleteSuccessPayload,
  LoginPayload,
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

export type ClassesAction =
  ActionMap<ClassesPayload>[keyof ActionMap<ClassesPayload>];

export const classesReducer = (state: ClassesType[], action: ClassesAction) => {
  switch (action.type) {
    case 'CLASSES':
      return [...action.payload];

    default:
      return state;
  }
};

export type DeleteSuccessAction =
  ActionMap<DeleteSuccessPayload>[keyof ActionMap<DeleteSuccessPayload>];

export const deleteSuccessReducer = (
  state: DeleteSuccessType,
  action: DeleteSuccessAction
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
  action: CreateUserAction
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
