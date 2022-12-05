export interface RombelType {
  id: number;
  department_id: number;
  department_name: string;
  name: string;
  grade: number;
  created_at: string;
  total_student: number;
  students?: {
    id: number;
    user_id: number;
    name: string;
    nis: string;
    nisn: string;
  };
}
