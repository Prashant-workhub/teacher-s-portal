import type { KpiData } from "../../types/kpi";

const createSubjectPerformanceKpi = (
  subject: KpiData["subject"],
  students: KpiData["students"],
  targetValue: number,
): KpiData => {
  const totalStudents = students.length;
  const classAvgNum =
    totalStudents > 0
      ? Math.round(students.reduce((sum, student) => sum + student.value, 0) / totalStudents)
      : 0;
  const passRateNum =
    totalStudents > 0
      ? Math.round((students.filter((student) => student.value >= 60).length / totalStudents) * 100)
      : 0;
  const targetGapNum = classAvgNum - targetValue;

  return {
    subject,
    students,
    metrics: [
      { label: "Class Average", value: `${classAvgNum}`, tone: "neutral" },
      { label: "Pass Rate", value: `${passRateNum}%`, tone: "success" },
      {
        label: "Target Gap",
        value: `${targetGapNum >= 0 ? "+" : ""}${targetGapNum}`,
        tone: targetGapNum < 0 ? "danger" : "success",
      },
    ],
    target: {
      value: targetValue,
    },
  };
};

export const subjectPerformanceKpiOptions: KpiData[] = [
  createSubjectPerformanceKpi(
    {
      id: "advanced-calculus",
      label: "Advanced Calculus",
    },
    [
      { grade: "F", value: 43, color: "#DC2626" },
      { grade: "D", value: 65, color: "#D97706" },
      { grade: "C", value: 78, color: "#047857" },
      { grade: "B", value: 94, color: "#059669" },
      { grade: "A", value: 56, color: "#10B981" },
    ],
    75,
  ),
  createSubjectPerformanceKpi(
    {
      id: "data-structures",
      label: "Data Structures",
    },
    [
      { grade: "F", value: 51, color: "#DC2626" },
      { grade: "D", value: 63, color: "#D97706" },
      { grade: "C", value: 77, color: "#047857" },
      { grade: "B", value: 88, color: "#059669" },
      { grade: "A", value: 92, color: "#10B981" },
    ],
    78,
  ),
  createSubjectPerformanceKpi(
    {
      id: "organic-chemistry",
      label: "Organic Chemistry",
    },
    [
      { grade: "F", value: 49, color: "#DC2626" },
      { grade: "D", value: 58, color: "#D97706" },
      { grade: "C", value: 66, color: "#047857" },
      { grade: "B", value: 74, color: "#059669" },
      { grade: "A", value: 85, color: "#10B981" },
    ],
    70,
  ),
  createSubjectPerformanceKpi(
    {
      id: "educational-psychology",
      label: "Educational Psychology",
    },
    [
      { grade: "F", value: 62, color: "#D97706" },
      { grade: "D", value: 71, color: "#047857" },
      { grade: "C", value: 79, color: "#059669" },
      { grade: "B", value: 86, color: "#10B981" },
      { grade: "A", value: 93, color: "#34D399" },
    ],
    80,
  ),
];

export default subjectPerformanceKpiOptions[0];
