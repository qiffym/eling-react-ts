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

export type TheT = {
  hasil: string;
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

export type InitialStateType = {
  login: LoginType;
  ngetes: TheT;
  classes: ClassesType[];
};
