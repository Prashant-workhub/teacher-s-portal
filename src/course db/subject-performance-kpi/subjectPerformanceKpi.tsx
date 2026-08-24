import type { KpiData } from "../../types/kpi";

const subjectPerformanceKpi: KpiData = {
  subject: {
    id: "advanced-calculus",
    label: "Advanced Calculus",
  },
  students: [
    { grade: "F", value: 3, color: "#DC2626" },
    { grade: "D", value: 5, color: "#D97706" },
    { grade: "C", value: 18, color: "#2563EB" },
    { grade: "B", value: 34, color: "#2563EB" },
    { grade: "A", value: 26, color: "#16A34A" },
  ],
  metrics: [
    { label: "Class Average", value: "84.5%", tone: "neutral" },
    { label: "Pass Rate", value: "92.4%", tone: "neutral" },
    { label: "Target Gap", value: "+8.5%", tone: "success" },
  ],
  target: {
    value: 76,
  },
};

export default subjectPerformanceKpi;
