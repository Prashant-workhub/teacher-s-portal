import type { SemesterStudentLoadData } from "../components/imports";

const SemesterStudentLoadCard = ({ data }: { data: SemesterStudentLoadData }) => {
  const shellClass = "border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)]";
  const mutedText = "text-[var(--app-muted)]";
  const mainText = "text-[var(--app-text)]";
  const brandText = "text-[var(--app-brand)]";
  const brandSecondaryText = "text-[var(--app-brand-strong)]";
  const trackClass = "bg-[var(--app-surface-alt)]";
  const footerShell = "border-[var(--app-border)]/35 bg-[var(--app-surface-alt)]";
  const titleText = "text-[var(--app-text)]";

  const totalStudents = data.semesters.reduce(
    (sum, semester) => sum + semester.studentCount,
    0,
  );
  const averageStudents = Math.round(totalStudents / data.semesters.length);
  const peakSemester = [...data.semesters].sort(
    (left, right) => right.studentCount - left.studentCount,
  )[0];
  const maxCount = Math.max(
    ...data.semesters.map((semester) => semester.studentCount),
    1,
  );

  return (
    <div className={`h-full w-full min-w-0 rounded-2xl border p-4 ${shellClass}`}>
      <div className="flex items-start justify-between gap-3">
        <div className="min-w-0">
          <h5 className={`truncate text-base font-semibold leading-none ${titleText}`}>
            Active Student
          </h5>
          <p className={`mt-1 text-xs ${mutedText}`}>
            Semester-wise active student count
          </p>
        </div>

        <a
          aria-label={`View all load details for ${data.subject.label}`}
          className={`shrink-0 font-medium ${brandText} hover:underline`}
          href={`/course-progress?subject=${data.subject.id}`}
        >
          View all
        </a>
      </div>

      <div className="mt-4 flex h-48 items-end gap-2">
        {data.semesters.map((semester) => {
          const barHeight = Math.max(
            (semester.studentCount / maxCount) * 100,
            18,
          );
          const tooltipLabel = `${semester.label} — ${semester.studentCount} students`;

          return (
            <div key={semester.id} className="flex min-w-0 flex-1 flex-col items-center gap-2">
              <span className={`text-xs font-medium ${mutedText}`}>
                {semester.studentCount}
              </span>
              <div
                aria-label={tooltipLabel}
                className={`flex h-28 w-full max-w-[3rem] items-end rounded-2xl px-1.5 pb-2 ${trackClass}`}
                role="img"
                title={tooltipLabel}
              >
                <div
                  className="w-full rounded-xl transition-opacity hover:opacity-90"
                  style={{
                    backgroundColor: semester.color,
                    height: `${barHeight}%`,
                  }}
                />
              </div>
              <span className="text-sm font-medium">{semester.label}</span>
            </div>
          );
        })}
      </div>

      <div className={`mt-4 h-15 rounded-lg grid grid-cols-3 gap-2 border-t pt-3 ${footerShell}`}>
        <div className="min-w-0 text-center">
          <p className={`text-[11px] leading-4 ${mutedText}`}>Total</p>
          <p className={`mt-1 text-sm font-semibold ${mainText}`}>{totalStudents}</p>
        </div>
        <div className="min-w-0 text-center">
          <p className={`text-[11px] leading-4 ${mutedText}`}>Average / sem</p>
          <p className={`mt-1 text-sm font-semibold ${brandText}`}>
            {averageStudents}
          </p>
        </div>
        <div className="min-w-0 text-center">
          <p className={`text-[11px] leading-4 ${mutedText}`}>Peak sem</p>
          <p className={`mt-1 text-sm font-semibold ${brandSecondaryText}`}>
            {peakSemester.label}
          </p>
        </div>
      </div>
    </div>
  );
};

export default SemesterStudentLoadCard;
