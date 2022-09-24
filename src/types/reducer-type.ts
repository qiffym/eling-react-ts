export type ActionMap<M extends { [index: string]: any }> = {
  [Key in keyof M]: M[Key] extends undefined
    ? {
        type: Key;
      }
    : {
        type: Key;
        payload: M[Key];
      };
};

export enum Types {
  Login = 'LOGIN',
  Ngetes = 'NGETES',
  Classes = 'CLASSES',
}

export type LoginPayload = {
  [Types.Login]: {
    user: {
      id: number;
      name: string;
      username: string;
      email: string;
      role: string;
      avatar: string;
    };
    token: string;
  };
};

export type NgetesPayload = {
  [Types.Ngetes]: {
    hasil: string;
  };
};

export type ClassesPayload = {
  [Types.Classes]: {
    rombel_name: string;
    id: number;
    name: string;
    description: string;
    teacher_avatar: string;
    teacher_id?: number;
    teacher_name?: string;
  }[];
};
