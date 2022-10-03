export type LoginType = {
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

export type CreateUserType = {
  role: number;
  name: string;
  username: string;
  email: string;
  gender: string;
  password: string;
  confirm_password: string;
};

export type UpdateUserType = {
  name: string;
  username: string;
  email: string;
  gender: string;
  religion: string;
  birthday: string;
  telpon: string;
  status: number;
  address: string;
  password?: string;
  confirm_password?: string;
};

export type ClassListType = {
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
        },
      ]
    | undefined;
};

export type DeleteSuccessType = {
  success: boolean;
};

export type InitialStateType = {
  login: LoginType;
  classes: ClassListType;
  deleteSuccess: DeleteSuccessType;
};
