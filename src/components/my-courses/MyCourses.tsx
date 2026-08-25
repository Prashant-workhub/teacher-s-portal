import { Calendar, BarChart3, BookOpen, CheckCircle2, Inbox, Users, useState, CourseStatCard } from "../imports";

const semesterOptions = ["Jan-May 2026", "Jun-Aug 2026", "Sep-Dec 2026"];

type CourseStat = {
  title: string;
  value: string;
  subtitle: string;
  icon: typeof BookOpen;
  iconClassName?: string;
  valueClassName?: string;
  subtitleClassName?: string;
};

const courseStats: CourseStat[] = [
  {
    title: "Assigned Courses",
    value: "6",
    subtitle: "This semester",
    icon: BookOpen,
    iconClassName: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  },
  {
    title: "Total Students",
    value: "1,248",
    subtitle: "Across all courses",
    icon: Users,
    iconClassName: "border-sky-400/20 bg-sky-400/10 text-sky-300",
  },
  {
    title: "Avg Course Completion",
    value: "68%",
    subtitle: "↑ 6% vs last month",
    icon: CheckCircle2,
    iconClassName: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    valueClassName: "text-[var(--app-text)]",
    subtitleClassName: "text-emerald-300",
  },
  {
    title: "Avg Quiz Score",
    value: "74%",
    subtitle: "↑ 5% vs last month",
    icon: BarChart3,
    iconClassName: "border-indigo-400/20 bg-indigo-400/10 text-indigo-300",
    valueClassName: "text-[var(--app-text)]",
    subtitleClassName: "text-emerald-300",
  },
  {
    title: "Pending Doubts",
    value: "12",
    subtitle: "3 overdue",
    icon: Inbox,
    iconClassName: "border-rose-400/20 bg-rose-400/10 text-rose-300",
    valueClassName: "text-[var(--app-text)]",
    subtitleClassName: "text-rose-400",
  },
] as const;

const MyCourses = () => {
  const [selectedSemester, setSelectedSemester] = useState(semesterOptions[0]);

  return (
    <section className="space-y-5">
      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
        <div className="space-y-1">
          <h1 className="text-2xl font-semibold text-[var(--app-text)]">My Courses</h1>
          <p className="text-sm text-[var(--app-muted)]">
            Snapshot of your teaching load, student reach, and course activity.
          </p>
        </div>

        <label className="flex items-center gap-2 rounded-xl border border-[var(--app-border)] bg-[var(--app-surface)] px-3.5 py-2.5 text-sm text-[var(--app-muted)]">
          <Calendar size={16} />
          <select
            aria-label="Select semester"
            className="bg-transparent text-[var(--app-text)] outline-none"
            value={selectedSemester}
            onChange={(event) => setSelectedSemester(event.target.value)}
          >
            {semesterOptions.map((semester) => (
              <option key={semester} value={semester}>
                {semester}
              </option>
            ))}
          </select>
        </label>
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-5">
        {courseStats.map((stat) => (
          <CourseStatCard
            key={stat.title}
            icon={stat.icon}
            iconClassName={stat.iconClassName}
            subtitle={stat.subtitle}
            subtitleClassName={stat.subtitleClassName}
            title={stat.title}
            value={stat.value}
            valueClassName={stat.valueClassName}
          />
        ))}
      </div>
    </section>
  );
};

export default MyCourses;
