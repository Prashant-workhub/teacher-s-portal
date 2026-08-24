import { useTheme } from "../components/theme/ThemeProvider";

type KpiStudent = {
  grade: string;
  value: number;
  barHeight: number;
  barColor: string;
  lineColor: string;
};

type KpiMetric = {
  label: string;
  value: string;
  tone: "neutral" | "success";
};

type KpiData = {
  subject: string;
  students: KpiStudent[];
  metrics: KpiMetric[];
  target: {
    value: number;
  };
};

const KpiCard = ({ data }: { data: KpiData }) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const shellClass = isDark
    ? "border-[#64748B] bg-[#0F172A] text-[#F8FAFC]"
    : "border-[#64748B] bg-[#FFFFFF] text-[#0F172A]";
  const mutedText = "text-[#64748B]";
  const mainText = isDark ? "text-[#F8FAFC]" : "text-[#0F172A]";
  const lineY = 96;
  const targetY = 70;
  const chartBottom = 180;
  const chartHeight = chartBottom - 28;
  const maxValue = 36;
  const positions = [60, 145, 230, 315, 400];

  return (
    <div className={`h-full w-full min-w-0 max-h-80 overflow-hidden rounded-2xl border p-5 ${shellClass}`}>
      <div className="mb-4 flex h-10 items-center justify-between gap-3">
        <h5 className="min-w-0 truncate text-base font-semibold leading-none">{data.subject}</h5>
        <a href="#" className="font-medium text-[#2563EB] hover:underline">
          View all
        </a>
      </div>

      <div className="relative">
        <svg
          aria-label={`${data.subject} KPI chart`}
          className="h-[230px] w-full"
          viewBox="0 0 440 230"
          role="img"
        >
          <line x1="40" x2="418" y1="28" y2="28" stroke="#64748B" strokeDasharray="5 5" strokeOpacity="0.35" />
          <line x1="40" x2="418" y1="70" y2="70" stroke="#64748B" strokeDasharray="5 5" strokeOpacity="0.35" />
          <line x1="40" x2="418" y1="112" y2="112" stroke="#64748B" strokeDasharray="5 5" strokeOpacity="0.35" />
          <line x1="40" x2="418" y1="154" y2="154" stroke="#64748B" strokeDasharray="5 5" strokeOpacity="0.35" />
          <line x1="40" x2="418" y1="196" y2="196" stroke="#64748B" strokeDasharray="5 5" strokeOpacity="0.35" />

          <line x1="40" x2="400" y1={lineY} y2={lineY} stroke="#2563EB" strokeWidth="2" />
          <line x1="40" x2="400" y1={targetY} y2={targetY} stroke="#16A34A" strokeWidth="2" />
          <line x1="40" x2="400" y1="128" y2="128" stroke="#DC2626" strokeWidth="2" strokeDasharray="4 4" />

          {data.students.map((student, index) => {
            const x = positions[index];
            const chartValue = student.barHeight ?? (student.value / maxValue) * chartHeight;
            const barTop = chartBottom - chartValue;
            const isBlue = student.barColor === "#2563EB";

            return (
              <g key={student.grade}>
                <rect
                  x={x - 24}
                  y={barTop}
                  rx="8"
                  ry="8"
                  width="48"
                  height={chartValue}
                  fill={student.barColor}
                  fillOpacity={isBlue ? "0.28" : "0.22"}
                />
                <line
                  x1={x}
                  x2={x}
                  y1={barTop}
                  y2={chartBottom}
                  stroke={student.lineColor}
                  strokeWidth="2.5"
                />
                <circle cx={x} cy={barTop} r="5" fill={student.lineColor} />
                <text
                  x={x}
                  y="216"
                  textAnchor="middle"
                  fill={isDark ? "#F8FAFC" : "#0F172A"}
                  fontSize="13"
                  fontWeight="600"
                >
                  {student.grade}
                </text>
              </g>
            );
          })}

          <text x="16" y="200" fill="#64748B" fontSize="11" fontWeight="500">
            0
          </text>
          <text x="10" y="158" fill="#64748B" fontSize="11" fontWeight="500">
            9
          </text>
          <text x="4" y="116" fill="#64748B" fontSize="11" fontWeight="500">
            17
          </text>
          <text x="4" y="74" fill="#64748B" fontSize="11" fontWeight="500">
            26
          </text>
          <text x="4" y="32" fill="#64748B" fontSize="11" fontWeight="500">
            34
          </text>

          <rect x="396" y={lineY - 12} rx="4" ry="4" width="38" height="24" fill="#DC2626" />
          <text x="415" y={lineY + 5} textAnchor="middle" fill="#FFFFFF" fontSize="12" fontWeight="700">
            {data.target.value}
          </text>
        </svg>
      </div>

      <div className="mt-1 grid grid-cols-3 gap-2 border-t border-[#64748B] pt-4">
        {data.metrics.map((metric) => (
          <div key={metric.label} className="min-w-0 text-center">
            <p className={`text-[11px] leading-4 ${mutedText}`}>{metric.label}</p>
            <p
              className={[
                "mt-1 text-sm font-semibold",
                metric.tone === "success" ? "text-[#16A34A]" : mainText,
              ].join(" ")}
            >
              {metric.value}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default KpiCard;
