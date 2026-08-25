import type { ElementType } from "react";

type CourseStatCardProps = {
  title: string;
  value: string;
  subtitle: string;
  icon: ElementType;
  iconClassName?: string;
  valueClassName?: string;
  subtitleClassName?: string;
};

const CourseStatCard = ({
  title,
  value,
  subtitle,
  icon: Icon,
  iconClassName = "border-cyan-400/20 bg-cyan-400/10 text-cyan-300",
  valueClassName = "text-[var(--app-text)]",
  subtitleClassName = "text-[var(--app-muted)]",
}: CourseStatCardProps) => {
  return (
    <article className="flex h-full min-h-[118px] items-center gap-4 rounded-2xl border border-[var(--app-border)]/70 bg-[var(--app-surface)]/95 p-4 shadow-[0_14px_40px_rgba(0,0,0,0.14)] transition-transform duration-200 hover:-translate-y-0.5 hover:border-[var(--app-brand)]/35">
      <div className={`grid h-12 w-12 place-items-center shrink-0 rounded-2xl border ${iconClassName}`}>
        <Icon size={22} />
      </div>

      <div className="min-w-0">
        <p className="text-sm font-medium text-[var(--app-muted)]">{title}</p>
        <p className={`mt-1 text-[2rem] font-semibold leading-none tracking-tight ${valueClassName}`}>
          {value}
        </p>
        <p className={`mt-2 text-sm ${subtitleClassName}`}>{subtitle}</p>
      </div>
    </article>
  );
};

export default CourseStatCard;