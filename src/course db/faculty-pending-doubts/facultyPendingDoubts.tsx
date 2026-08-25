import type { FacultyPendingDoubtsData } from "../../components/imports";

const facultyPendingDoubts: FacultyPendingDoubtsData = {
  subject: {
    id: "faculty-pending-doubts",
    label: "Pending Doubts",
  },
  queue: {
    openQuestionsCount: 3,
    overdueQuestionsCount: 1,
    solvedThisWeekCount: 14,
    responseTargetHours: 72,
  },
};

export default facultyPendingDoubts;
