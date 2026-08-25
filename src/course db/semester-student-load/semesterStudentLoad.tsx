import type { SemesterStudentLoadData } from "../../components/imports";

const semesterStudentLoad: SemesterStudentLoadData = {
  subject: {
    id: "semester-student-load",
    label: "Semester Student Load",
  },
  semesters: [
    { id: "sem-1", label: "Sem 1", studentCount: 48, color: "#047857" },
    { id: "sem-2", label: "Sem 2", studentCount: 54, color: "#059669" },
    { id: "sem-3", label: "Sem 3", studentCount: 42, color: "#D97706" },
    { id: "sem-4", label: "Sem 4", studentCount: 61, color: "#10B981" },
  ],
};

export default semesterStudentLoad;
