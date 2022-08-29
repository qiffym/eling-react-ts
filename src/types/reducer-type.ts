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
