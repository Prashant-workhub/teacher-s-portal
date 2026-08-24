export type KpiSubject = {
  id: string;
  label: string;
};

export type KpiStudent = {
  grade: string;
  value: number;
  color: string;
};

export type KpiMetric = {
  label: string;
  value: string;
  tone: "neutral" | "success" | "danger" | "warning";
};

export type KpiData = {
  subject: KpiSubject;
  students: KpiStudent[];
  metrics: KpiMetric[];
  target: {
    value: number;
  };
};

export type FacultyPendingDoubtsSubject = {
  id: string;
  label: string;
};

export type FacultyPendingDoubtsData = {
  subject: FacultyPendingDoubtsSubject;
  queue: {
    openQuestionsCount: number;
    overdueQuestionsCount: number;
    solvedThisWeekCount: number;
    responseTargetHours: number;
  };
};

export type SemesterStudentLoadSemester = {
  id: string;
  label: string;
  studentCount: number;
  color: string;
};

export type SemesterStudentLoadData = {
  subject: KpiSubject;
  semesters: SemesterStudentLoadSemester[];
};

export type RecentActivity = {
  id: number;
  title: string;
  description: string;
  time: string;
};

export type recentActivity = RecentActivity;
