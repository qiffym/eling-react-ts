import { ClassesType, LoginType, TheT } from '../types/context-type';
import {
  ActionMap,
  ClassesPayload,
  LoginPayload,
  NgetesPayload,
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

export type NgetesAction =
  ActionMap<NgetesPayload>[keyof ActionMap<NgetesPayload>];

export const ngetesReducer = (state: TheT, action: NgetesAction) => {
  switch (action.type) {
    case 'NGETES':
      return {
        ...state,
        hasil: action.payload.hasil,
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
