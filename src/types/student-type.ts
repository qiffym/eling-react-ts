export interface StudentMotivationalWord {
  id: number;
  title: string;
  body: string;
  from: string;
  active: boolean;
  created_at: string;
}

export interface StudentUpcomingAssignmentType {
  id: number;
  title: string;
  deadline_tanggal: string;
  deadline_jam: string;
  created_at: string;
  content: {
    id: number;
    title: string;
  };
  online_class: {
    id: number;
    name: string;
  };
}

export interface StudentClasses {
  id: number;
  name: string;
  description: string;
  created_at: string;
  updated_at: string;
  rombel_class: string;
  department: string;
  teacher: {
    id: number;
    name: string;
    avatar: string;
  };
}

export interface StudentContentDetail {
  assignment: [];
  created_at: string;
  description: string;
  forums: [];
  id: number;
  materials: [];
  online_class: string;
  online_class_id: string;
  rombel: string;
  title: string;
  updated_at: string;
}

export interface StudentForumDetail {
  id: number;
  content_id: number;
  content_of: string;
  avatar: string;
  author: string;
  author_role: string;
  topic: string;
  description: string;
  total_comment: number;
  comments: [StudentForumComment];
}

export interface StudentForumComment {
  id: number;
  avatar: string;
  author: string;
  author_role: string;
  comment: string;
  edited: boolean;
  created_at: string;
  sub_comments: [StudentForumSubComment];
}

export interface StudentForumSubComment {
  author: string;
  author_role: string;
  avatar: string;
  comment: string;
  created_at: string;
  edited: boolean;
  id: number;
}

export interface StudentSubmissionDetail {
  assignment_id: number;
  content_of: string;
  author: string;
  title: string;
  description: string;
  deadline: string;
  created_at: string;
  submission: {
    status: string;
    file: string;
    submitted_at: string;
    score: number;
  };
}
