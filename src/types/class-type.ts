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
  rombel_id: number;
  students?: {
    data: [
      {
        avatar: string;
        nama: string;
        nis: string;
      },
    ];
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

export type ContentType = {
  id?: number;
  title?: string;
  description?: string;
  created_at?: string;
};

export type ForumType = {
  content_id?: number;
  content_of: string;
  created_at: string;
  description: string;
  id: number;
  topic: string;
};

export type ContentDetailType = {
  id?: number;
  online_class_id?: number;
  title?: string;
  description?: string;
  created_at?: string;
  materials?: [
    {
      id: number;
      title: string;
      file: string;
    },
  ];
  forums?: [
    {
      id: number;
      content_id: number;
      content_of: string;
      topic: string;
      created_at: string;
    },
  ];
  assignment?: [
    {
      id: number;
      title: string;
      description: string;
      deadline: string;
      created_at: string;
    },
  ];
};
