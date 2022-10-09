export type ClassesType = {
  rombel_name: string;
  id: number;
  name: string;
  description: string;
  teacher_avatar: string;
  teacher_id?: number;
  teacher_name?: string;
};

export type ClassesDetailType = {
  created_at?: string;
  department?: string;
  description?: string;
  id?: number;
  name?: string;
  rombel_name?: string;
  students?: {
    data: [];
    total: number;
  };
  teacher?: {
    avatar: string;
    id: number;
    name: string;
    nik: string;
    nip: string;
  };
};
