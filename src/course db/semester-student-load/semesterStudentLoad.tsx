import type { SemesterStudentLoadData } from "../../types/kpi";

const semesterStudentLoad: SemesterStudentLoadData = {
  subject: {
    id: "semester-student-load",
    label: "Semester Student Load",
  },
  semesters: [
    { id: "sem-1", label: "Sem 1", studentCount: 48, color: "#0F766E" },
    { id: "sem-2", label: "Sem 2", studentCount: 54, color: "#0F766E" },
    { id: "sem-3", label: "Sem 3", studentCount: 42, color: "#D97706" },
    { id: "sem-4", label: "Sem 4", studentCount: 61, color: "#16A34A" },
  ],
};

export default semesterStudentLoad;
