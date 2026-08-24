import type { KpiData } from "../../types/kpi";

const students = [
  { grade: "F", value: 43, color: "#DC2626" },
  { grade: "D", value: 65, color: "#D97706" },
  { grade: "C", value: 78, color: "#2563EB" },
  { grade: "B", value: 94, color: "#2563EB" },
  { grade: "A", value: 56, color: "#16A34A" },
];

const TARGET_AVERAGE = 75; 
const totalStudents = students.length;
const classAvgNum = totalStudents > 0 
  ? Math.round(students.reduce((sum, s) => sum + s.value, 0) / totalStudents) 
  : 0;

const passRateNum = totalStudents > 0 
  ? Math.round((students.filter((s) => s.value >= 60).length / totalStudents) * 100) 
  : 0;

const targetGapNum = classAvgNum - TARGET_AVERAGE;

const subjectPerformanceKpi: KpiData = {
  subject: {
    id: "advanced-calculus",
    label: "Advanced Calculus",
  },
  students,
  metrics: [
    { label: "Class Average", value: `${classAvgNum}`, tone: "neutral" },
    { label: "Pass Rate", value: `${passRateNum}%`, tone: "neutral" },
    { label: "Target Gap", value: `${targetGapNum >= 0 ? '+' : ''}${targetGapNum}`, tone: "success" },
  ],
  target: {
    value: TARGET_AVERAGE,
  },
};

export default subjectPerformanceKpi;
