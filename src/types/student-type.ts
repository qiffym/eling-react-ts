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
