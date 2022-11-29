export interface AdminRombelDetailType {
  id: number;
  department_id: string;
  department_name: string;
  name: string;
  grade: string;
  total_student: number;
  students: [
    {
      id: number;
      user_id: string;
      name: string;
      nis: string;
      nisn: string;
      rombel_id: string;
      rombel_name: string;
    },
  ];
}
