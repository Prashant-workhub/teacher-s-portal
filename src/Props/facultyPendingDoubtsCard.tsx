import { AlertCircle, CheckCircle2, Clock, Inbox } from "lucide-react";
import type { FacultyPendingDoubtsData } from "../types/kpi";

const FacultyPendingDoubtsCard = ({ data }: { data: FacultyPendingDoubtsData }) => {
  const shellClass = "border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)]";
  const mutedText = "text-[var(--app-muted)]";
  const brandText = "text-[var(--app-brand)]";
  const insetShell = "border-[var(--app-border)]/40 bg-[var(--app-surface-alt)]";
  const overdueCount = data.queue.overdueQuestionsCount;
  const openCount = data.queue.openQuestionsCount;
  const statusTone = overdueCount > 0 ? "danger" : "success";
  const progressPercent =
    openCount > 0 ? Math.min((overdueCount / openCount) * 100, 100) : 0;

  const statusClass =
    statusTone === "danger"
      ? "bg-[#DC2626]/10 text-[#DC2626] border-[#DC2626]/30"
      : "bg-[var(--app-brand)]/10 text-[var(--app-brand)] border-[var(--app-brand)]/30";

  return (
    <div className={`h-full w-full min-w-0 rounded-2xl border p-5 ${shellClass}`}>
      <div className="flex h-full flex-col">
        <div className="flex items-start justify-between gap-3">
          <div className="flex min-w-0 items-center gap-2.5">
            <div
              className={[
                "rounded-xl border p-2",
                overdueCount > 0
                  ? "border-[#DC2626]/30 bg-[#DC2626]/10 text-[#DC2626]"
                  : "border-[var(--app-brand)]/30 bg-[var(--app-brand)]/10 text-[var(--app-brand)]",
              ].join(" ")}
            >
              <Inbox className="h-5 w-5" />
            </div>
            <div className="min-w-0">
              <h5 className="truncate text-base font-semibold leading-none">
                {data.subject.label}
              </h5>
              <p className={`mt-1 text-xs ${mutedText}`}>
                Ongoing student questions
              </p>
            </div>
          </div>

          <span
            className={[
              "inline-flex items-center gap-1 rounded-full border px-2.5 py-0.5 text-xs font-medium",
              statusClass,
            ].join(" ")}
          >
            {overdueCount > 0 ? "Action Needed" : "Stable"}
          </span>
        </div>

        <div className="mt-4 flex items-end gap-2">
          <span className="text-4xl font-semibold tracking-tight">
            {openCount}
          </span>
          <span className={`pb-1 text-xs ${mutedText}`}>questions open</span>
        </div>

        <div className="mt-4">
          <div className="flex items-center justify-between gap-3 text-xs">
            <span className={`flex items-center gap-1.5 ${mutedText}`}>
              <Clock className="h-3.5 w-3.5" />
              Response Target: {data.queue.responseTargetHours} Hours
            </span>
            <span className="font-medium text-[#DC2626]">
              {overdueCount} overdue
            </span>
          </div>

          <div
            aria-label={`${overdueCount} overdue out of ${openCount} open questions`}
            className="mt-2 h-2 w-full rounded-full bg-[var(--app-surface-alt)]"
            role="progressbar"
            aria-valuemin={0}
            aria-valuemax={openCount}
            aria-valuenow={overdueCount}
            title={`${overdueCount} overdue out of ${openCount} open questions`}
          >
            <div
              className="h-2 rounded-full bg-[#DC2626] transition-all duration-500"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>

        <div className="mt-4 flex items-center gap-1.5 border-t border-[var(--app-border)] pt-3 text-xs">
          <AlertCircle className={`h-4 w-4 ${mutedText}`} />
          <span className={mutedText}>
            You answered{" "}
            <strong className="text-[var(--app-text)]">
              {data.queue.solvedThisWeekCount} doubts
            </strong>{" "}
            over the last 7 days.
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-3 border-t border-[var(--app-border)] pt-4">
          <div className={`rounded-xl border p-3 ${insetShell}`}>
            <div className="flex items-center gap-2 text-xs font-medium text-[var(--app-muted)]">
              <CheckCircle2 className="h-4 w-4 text-[var(--app-brand)]" />
              Resolved
            </div>
            <p className="mt-2 text-lg font-semibold text-[var(--app-brand)]">
              {data.queue.solvedThisWeekCount}
            </p>
          </div>

          <div className={`rounded-xl border p-3 ${insetShell}`}>
            <div className="flex items-center gap-2 text-xs font-medium text-[var(--app-muted)]">
              <Clock className={`h-4 w-4 ${brandText}`} />
              Max Response Time
            </div>
            <p className={`mt-2 text-lg font-semibold ${brandText}`}>
              {data.queue.responseTargetHours}h
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FacultyPendingDoubtsCard;
