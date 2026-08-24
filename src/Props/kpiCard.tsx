import { ChevronDown } from "lucide-react";
import { useTheme } from "../components/theme/ThemeProvider";
import type { KpiData, KpiSubject } from "../types/kpi";

type KpiCardProps = {
  data: KpiData;
  subjectOptions: KpiSubject[];
  onSubjectChange: (subjectId: string) => void;
};

const KpiCard = ({ data, subjectOptions, onSubjectChange }: KpiCardProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const shellClass = "border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)]";
  const mutedText = "text-[var(--app-muted)]";
  const mainText = "text-[var(--app-text)]";
  const labelFill = "var(--app-text)";
  const brandText = "text-[var(--app-brand)]";
  const targetStroke = "var(--app-brand-strong)";
  const gridStroke = "var(--app-border)";
  const gridOpacity = isDark ? 0.28 : 0.18;
  const metricToneClass = (label: string, value: string, tone: string) => {
    const numericValue = Number.parseFloat(value.replace(/[^0-9.-]/g, ""));

    if (label === "Target Gap") {
      if (numericValue < 0) return "text-[#DC2626]";
      if (numericValue > 0) return "text-[var(--app-brand)]";
      return brandText;
    }

    if (label === "Pass Rate") {
      if (numericValue >= 90) return "text-[var(--app-brand)]";
      if (numericValue >= 75) return brandText;
      if (numericValue >= 60) return "text-[#D97706]";
      return "text-[#DC2626]";
    }

    if (label === "Class Average") {
      return numericValue >= data.target.value ? "text-[var(--app-brand)]" : brandText;
    }

    if (tone === "success") return "text-[var(--app-brand)]";
    if (tone === "danger") return "text-[#DC2626]";
    if (tone === "warning") return "text-[#D97706]";

    return mainText;
  };

  const chartWidth = Math.max(400, data.students.length * 80 + 100);
  const chartHeight = 220;
  const chartTop = 24;
  const chartBottom = 162;
  const chartLeft = 48;
  const chartRight = 52;
  const plotWidth = chartWidth - chartLeft - chartRight;
  const plotHeight = chartBottom - chartTop;

  const maxObservedValue = Math.max(
    ...data.students.map((student) => student.value),
    data.target.value,
    1,
  );
  const axisMax = Math.ceil(maxObservedValue / 5) * 5;
  const scaleY = (value: number) =>
    chartTop + plotHeight - (value / axisMax) * plotHeight;

  const segmentWidth = plotWidth / data.students.length;
  const barWidth = Math.min(56, segmentWidth * 0.62);
  const positions = data.students.map(
    (_, index) => chartLeft + segmentWidth * index + segmentWidth / 2,
  );
  const targetY = scaleY(data.target.value);
  const badgeWidth = 42;
  const badgeX = chartWidth - chartRight + 4 - badgeWidth;
  const badgeY = Math.min(Math.max(targetY - 12, 18), chartHeight - 36);
  const tickValues = [axisMax, axisMax * 0.75, axisMax * 0.5, axisMax * 0.25, 0];

  return (
    <div className={`h-full min-h-[26rem] w-full min-w-0 overflow-hidden rounded-2xl border p-4 ${shellClass}`}>
      <div className="mb-3 flex flex-col gap-3 md:flex-row md:items-center md:justify-between">
        <div className="min-w-0">
          <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${mutedText}`}>
            Performance Tracking
          </p>
          <h5 className="mt-1 min-w-0 truncate text-base font-semibold leading-none">
            {data.subject.label}
          </h5>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <label className="relative">
            <span className="sr-only">Select KPI subject</span>
            <select
              aria-label="Select KPI subject"
              className={[
                "peer min-w-[12rem] appearance-none rounded-xl border px-3.5 py-2.5 pr-10 text-sm font-medium outline-none transition",
                "border-[var(--app-border)]/90 bg-[var(--app-surface-alt)]/95 text-[var(--app-text)] shadow-sm",
                "hover:border-[var(--app-brand)]/55 hover:bg-[var(--app-surface-alt)] focus:border-[var(--app-brand)] focus:ring-2 focus:ring-[var(--app-brand)]/20",
              ].join(" ")}
              onChange={(event) => onSubjectChange(event.target.value)}
              value={data.subject.id}
            >
              {subjectOptions.map((subject) => (
                <option
                  key={subject.id}
                  className="bg-[var(--app-surface)] text-[var(--app-text)]"
                  value={subject.id}
                >
                  {subject.label}
                </option>
              ))}
            </select>
            <ChevronDown
              aria-hidden="true"
              className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[var(--app-muted)] transition peer-hover:text-[var(--app-brand)] peer-focus:text-[var(--app-brand)]"
              size={16}
            />
          </label>

          <a
            aria-label={`View all KPI details for ${data.subject.label}`}
            href={`/course-progress?subject=${data.subject.id}`}
            className={`${brandText} font-medium hover:underline`}
          >
            View all
          </a>
        </div>
      </div>

      <p className="sr-only">
        KPI chart for {data.subject.label}. The chart shows grade distribution and
        summary metrics for {data.subject.label}.
      </p>

      <div className="relative">
        <svg
          aria-label={`${data.subject.label} KPI chart`}
          className="h-[206px] w-full"
          preserveAspectRatio="xMidYMid meet"
          role="img"
          viewBox={`0 0 ${chartWidth} ${chartHeight}`}
        >
          {tickValues.map((tickValue, index) => {
            const y = scaleY(tickValue);
            return (
              <line
                key={`${tickValue}-${index}`}
                x1={chartLeft}
                x2={chartWidth - chartRight}
                y1={y}
                y2={y}
                stroke={gridStroke}
                strokeDasharray="5 5"
                strokeOpacity={gridOpacity}
              />
            );
          })}

          <line
            x1={chartLeft}
            x2={chartWidth - chartRight}
            y1={targetY}
            y2={targetY}
            stroke={targetStroke}
            strokeWidth="2"
          />

          {data.students.map((student, index) => {
            const x = positions[index];
            const barHeight = (student.value / axisMax) * plotHeight;
            const barTop = chartBottom - barHeight;
            const tooltipLabel = `${student.grade} — ${student.value} students`;

            return (
              <g
                key={`${data.subject.id}-${student.grade}`}
                aria-label={tooltipLabel}
                tabIndex={0}
              >
                <title>{tooltipLabel}</title>
                <desc>{`Grade ${student.grade} has ${student.value} students.`}</desc>
                <rect
                  x={x - barWidth / 2}
                  y={barTop}
                  rx="8"
                  ry="8"
                  width={barWidth}
                  height={barHeight}
                  fill={student.color}
                  fillOpacity={isDark ? 0.24 : 0.18}
                />
                <line
                  x1={x}
                  x2={x}
                  y1={barTop}
                  y2={chartBottom}
                  stroke={student.color}
                  strokeWidth="2.5"
                />
                <circle cx={x} cy={barTop} r="5" fill={student.color} />
                <text
                  x={x}
                  y={chartHeight - 16}
                  fill={labelFill}
                  fontSize="12"
                  fontWeight="700"
                  textAnchor="middle"
                >
                  {student.grade}
                </text>
              </g>
            );
          })}

          {tickValues.map((tickValue, index) => {
            const y = scaleY(tickValue);
            return (
              <text
                key={`tick-${tickValue}-${index}`}
                x="14"
                y={y + 4}
                fill={gridStroke}
                fontSize="11"
                fontWeight="500"
              >
                {Math.round(tickValue)}
              </text>
            );
          })}

          <rect x={badgeX} y={badgeY} rx="4" ry="4" width={badgeWidth} height="24" fill="var(--app-brand-strong)" />
          <text x={badgeX + badgeWidth / 2} y={badgeY + 16} fill="#FFFFFF" fontSize="12" fontWeight="700" textAnchor="middle">
            {data.target.value}
          </text>
        </svg>
      </div>

      <div className="mt-3 rounded-2xl border border-[var(--app-border)]/45 bg-[var(--app-surface-alt)]/65 p-3">
        <p className={`text-[11px] font-semibold uppercase tracking-[0.2em] ${mutedText}`}>
          Performance KPI
        </p>
        <h6 className="mt-1 text-sm font-semibold text-[var(--app-text)]">
          Class average, pass rate, and target gap
        </h6>
      </div>

      <div className="mt-1 grid grid-cols-3 gap-2 border-t border-[var(--app-border)] pt-3">
        {data.metrics.map((metric) => (
          <div key={metric.label} className="min-w-0 text-center">
            <p className={`text-[11px] leading-4 ${mutedText}`}>{metric.label}</p>
            <p
              className={[
                "mt-1 text-sm font-semibold",
                metricToneClass(metric.label, metric.value, metric.tone),
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
