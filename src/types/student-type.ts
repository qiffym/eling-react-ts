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
