export type ClassesType = {
  rombel_name: string;
  id: number;
  name: string;
  rombel_id: number;
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

export type ForumDetailType = {
  comments: ForumCommentType[];
  content_id?: number;
  content_of: string;
  description: string;
  id: number;
  topic: string;
  author_role: string;
  avatar: string;
};

export type ForumCommentType = {
  id: number;
  avatar: string;
  author: string;
  author_role: string;
  comment: string;
  edited: boolean;
  created_at: string;
  sub_comments: ForumSubCommentType[];
};

export type ForumSubCommentType = {
  author: string;
  author_role: string;
  avatar: string;
  comment: string;
  created_at: string;
  edited: boolean;
  id: number;
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

export type AssignmentDetailType = {
  created_at: string;
  deadline: string;
  deadline_parse: string;
  description: string;
  id: number;
  submission: {
    assignment: {
      file: string;
      score: any;
      status: string;
      submitted_at: string;
    };
    avatar: string;
    email: string;
    id: number;
    join_at: string;
    name: string;
    nis: string;
    nisn: string;
    username: string;
  }[];
  title: string;
};

export interface GradingAssignmentType {
  user_id: string;
  student_id: number;
  name: string;
  avatar: string;
  nis: string;
  nisn: string;
  submission: {
    assignment_id: string;
    file: string;
    submitted_at: string;
    score: number;
  };
}
