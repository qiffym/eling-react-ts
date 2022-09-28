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
  Classes = 'CLASSES',
  DeleteSuccess = 'SUCCESS',

  Role = 'ROLE',
  Gender = 'GENDER',
  Name = 'NAME',
  Username = 'USERNAME',
  Email = 'EMAIL',
  Password = 'PASSWORD',
  ConfirmPassword = 'CONFIRM_PASSWORD',
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

export type ClassPayload = {
  [Types.Classes]: {
    classList:
      | [
          {
            rombel_name: string;
            id: number;
            name: string;
            description: string;
            teacher_avatar: string;
            teacher_id?: number;
            teacher_name?: string;
          }
        ]
      | undefined;
  };
};

export type DeleteSuccessPayload = {
  [Types.DeleteSuccess]: {
    success: boolean;
  };
};

export type CreateUserPayload = {
  [Types.Role]: {
    role: number;
  };
  [Types.Gender]: {
    gender: string;
  };
  [Types.Name]: {
    name: string;
  };
  [Types.Username]: {
    username: string;
  };
  [Types.Email]: {
    email: string;
  };
  [Types.Password]: {
    password: string;
  };
  [Types.ConfirmPassword]: {
    confirm_password: string;
  };
};
