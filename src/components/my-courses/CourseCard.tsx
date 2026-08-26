import { ArrowRight, BookOpen, Clock3, MessageSquareText, Users } from "lucide-react";
import { NavLink } from "react-router-dom";
import type { CourseCardData, CourseViewMode } from "../../Database/coursesmain";

type CourseCardProps = {
  course: CourseCardData;
  viewMode?: CourseViewMode;
};

const statusStyles: Record<CourseCardData["status"], string> = {
  "On Track": "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  "Needs Attention": "border-amber-400/20 bg-amber-400/10 text-amber-300",
  "Action Required": "border-rose-400/20 bg-rose-400/10 text-rose-300",
};

const progressStyles: Record<CourseCardData["status"], string> = {
  "On Track": "bg-emerald-400",
  "Needs Attention": "bg-amber-400",
  "Action Required": "bg-rose-500",
};

const CourseCard = ({ course, viewMode = "grid" }: CourseCardProps) => {
  const isList = viewMode === "list";

  return (
    <article
      className={[
        "rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-5 shadow-[0_18px_42px_rgba(0,0,0,0.18)] transition duration-200 hover:-translate-y-0.5 hover:border-[var(--app-brand)]/35",
        isList ? "md:flex md:items-start md:gap-6" : "flex h-full flex-col",
      ].join(" ")}
    >
      <div className={isList ? "min-w-0 flex-1" : "min-w-0"}>
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="truncate text-lg font-semibold text-[var(--app-text)]">{course.title}</h3>
            <p className="mt-1 text-sm text-[var(--app-muted)]">
              {course.code} <span className="px-1.5">•</span> {course.semester}
            </p>
          </div>

          <span className={`shrink-0 rounded-full border px-3 py-1 text-xs font-medium ${statusStyles[course.status]}`}>
            {course.status}
          </span>
        </div>

        <div className="mt-6">
          <div className="mb-3 flex items-center justify-between gap-3">
            <span className="text-sm font-medium text-[var(--app-muted)]">Course Completion</span>
            <span className="text-lg font-semibold text-[var(--app-text)]">{course.completionPercentage}%</span>
          </div>
          <div className="h-3 overflow-hidden rounded-full bg-[var(--app-surface-alt)]">
            <div
              className={`h-full rounded-full transition-all duration-300 ${progressStyles[course.status]}`}
              style={{ width: `${course.completionPercentage}%` }}
            />
          </div>
        </div>

        <div
          className={[
            "mt-6 grid gap-3 border-t border-[var(--app-border)]/70 pt-5",
            isList ? "sm:grid-cols-4 md:grid-cols-4" : "sm:grid-cols-2 lg:grid-cols-4",
          ].join(" ")}
        >
          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm text-[var(--app-muted)]">
              <Users size={15} />
              Students
            </div>
            <p className="mt-1 text-base font-semibold text-[var(--app-text)]">{course.students}</p>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm text-[var(--app-muted)]">
              <BookOpen size={15} />
              Lectures
            </div>
            <p className="mt-1 text-base font-semibold text-[var(--app-text)]">
              {course.lecturesCompleted}/{course.lecturesTotal}
            </p>
          </div>

          <div className="min-w-0 flex flex-col">
            <div className="flex items-center gap-2 text-sm text-[var(--app-muted)]">
              <Clock3 size={15} />
              Avg Quiz Score
            </div>
            <p className="mt-1 ml-5 text-base font-semibold text-[var(--app-text)]">{course.avgQuizScore}%</p>
          </div>

          <div className="min-w-0">
            <div className="flex items-center gap-2 text-sm text-[var(--app-muted)]">
              <MessageSquareText size={15} />
              Doubts
            </div>
            <p className="mt-1 ml-5 text-base font-semibold text-[var(--app-text)]">{course.doubts}</p>
          </div>
        </div>

        <div className="mt-6 flex items-center justify-between gap-3 border-t border-[var(--app-border)]/70 pt-4 text-sm">
          <p className="text-[var(--app-muted)]">
            Last activity <span className="px-2">•</span> {course.lastActivity}
          </p>
          <NavLink to={"/course-progress"} className="inline-flex items-center gap-1 font-medium text-[var(--app-brand)] hover:underline">
            View Analytics
            <ArrowRight size={16} />
          </NavLink>
        </div>
      </div>
    </article>
  );
};

export default CourseCard;
