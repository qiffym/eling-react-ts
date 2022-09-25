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

export type ClassesType = {
  rombel_name: string;
  id: number;
  name: string;
  description: string;
  teacher_avatar: string;
  teacher_id?: number;
  teacher_name?: string;
};

export type DeleteSuccessType = {
  success: boolean;
};

export type InitialStateType = {
  login: LoginType;
  classes: ClassesType[];
  deleteSuccess: DeleteSuccessType;
};
