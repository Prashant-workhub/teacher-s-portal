import { ArrowRight, Clock3 } from "lucide-react";
import type { RecentActivity } from "../types/kpi";

type RecentActivitiesProps = {
  data: RecentActivity[];
};

const RecentActivities = ({ data }: RecentActivitiesProps) => {
  return (
    <div className="min-w-0 overflow-auto max-h-120 rounded-2xl border border-[var(--app-border)] bg-[var(--app-surface)] p-4 text-[var(--app-text)] shadow-sm">
      <div className="mb-4 flex items-center justify-between gap-3">
        <div>
          <p className="text-[11px] font-semibold uppercase tracking-[0.2em] text-[var(--app-muted)]">
            Activity Feed
          </p>
          <h3 className="mt-1 text-lg font-semibold">Recent Activity</h3>
        </div>
        <a
          className="inline-flex items-center gap-1 text-sm font-medium text-[var(--app-brand)] hover:underline"
          href="#"
        >
          View all
          <ArrowRight size={15} />
        </a>
      </div>

      <div className="space-y-3">
        {data.length > 0 ? (
          data.map((activity) => (
            <article
              key={activity.id}
              className="rounded-xl border border-[var(--app-border)]/60 bg-[var(--app-surface-alt)] p-4 transition hover:border-[var(--app-brand)]/40"
            >
              <div className="flex items-start justify-between gap-3">
                <div className="min-w-0">
                  <h4 className="truncate text-sm font-semibold">{activity.title}</h4>
                  <p className="mt-1 text-sm leading-6 text-[var(--app-muted)]">
                    {activity.description}
                  </p>
                </div>
                <span className="rounded-full bg-[var(--app-brand)]/10 p-2 text-[var(--app-brand)]">
                  <Clock3 size={14} />
                </span>
              </div>
              <p className="mt-3 text-xs font-medium uppercase tracking-[0.18em] text-[var(--app-muted)]">
                {activity.time}
              </p>
            </article>
          ))
        ) : (
          <div className="rounded-xl border border-[var(--app-border)]/60 bg-[var(--app-surface-alt)] p-4 text-sm text-[var(--app-muted)]">
            No recent activity yet.
          </div>
        )}
      </div>
    </div>
  );
};

export default RecentActivities;
