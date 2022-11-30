export interface GradedType {
  success: boolean;
  message: string;
  data: [
    {
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
    },
  ];
}
