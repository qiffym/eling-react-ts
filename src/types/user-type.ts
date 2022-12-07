export interface UserType {
  avatar: string;
  email: string;
  gender: string;
  id: number;
  name: string;
  role_id: number;
  role: string;
  username: string;
  verified: boolean;
  status: string;
  religion: string;
  birthday: string;
  address: string;
  telpon: string;
  teacher?: {
    id: number;
    nik: string;
    nip: string;
    user_id: number;
  };
  student?: {
    id: number;
    nis: string;
    nisn: string;
    rombel_id: number;
  };
}
