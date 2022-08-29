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

export type InitialStateType = {
  login: LoginType;
};
