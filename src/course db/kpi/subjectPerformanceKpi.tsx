type KpiData = {
  subject: string;
  students: Array<{
    grade: string;
    value: number;
    barHeight: number;
    barColor: string;
    lineColor: string;
  }>;
  metrics: Array<{
    label: string;
    value: string;
    tone: "neutral" | "success";
  }>;
  target: {
    value: number;
  };
};

const subjectPerformanceKpi: KpiData = {
  subject: "Advanced Calculus",
  students: [
    { grade: "F", value: 3, barHeight: 28, barColor: "#DC2626", lineColor: "#DC2626" },
    { grade: "D", value: 5, barHeight: 44, barColor: "#D97706", lineColor: "#D97706" },
    { grade: "C", value: 18, barHeight: 148, barColor: "#2563EB", lineColor: "#2563EB" },
    { grade: "B", value: 34, barHeight: 178, barColor: "#2563EB", lineColor: "#2563EB" },
    { grade: "A", value: 26, barHeight: 112, barColor: "#16A34A", lineColor: "#16A34A" },
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
