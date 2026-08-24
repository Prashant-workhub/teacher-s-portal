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
  tone: "neutral" | "success";
};

export type KpiData = {
  subject: KpiSubject;
  students: KpiStudent[];
  metrics: KpiMetric[];
  target: {
    value: number;
  };
};
