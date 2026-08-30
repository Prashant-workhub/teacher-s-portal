import {
  ArrowRightFromLine,
  BadgeInfo,
  BookOpen,
  BookText,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  NavLink,
  Sparkles,
  useTheme,
} from "../imports";

type SidebarProps = {
  collapsed: boolean;
  mobileOpen?: boolean;
  onClose?: () => void;
  onToggleCollapse: () => void;
};

const workspaceItems = [
  { label: "Dashboard", to: "/overview", icon: LayoutDashboard },
  { label: "My Courses", to: "/my-courses", icon: BookOpen },
  { label: "Student Doubts", to: "/student-doubts", icon: BadgeInfo },
  { label: "Assessment", to: "/assessment", icon: GraduationCap },
  { label: "Teaching Analytics", to: "/teaching-analytics", icon: Sparkles },
  { label: "Announcements", to: "/announcements", icon: BookText },
];

const Sidebar = ({
  collapsed,
  mobileOpen = false,
  onClose,
  onToggleCollapse,
}: SidebarProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const shellClasses =
    "border-[var(--app-border)] bg-[var(--app-surface)] text-[var(--app-text)]";
  const divider = "border-[var(--app-border)]";
  const mutedText = "text-[var(--app-muted)]";
  const brandBg = "bg-[var(--app-brand)]";
  const brandBorder = "border-[var(--app-brand)]";
  const brandText = "text-[var(--app-brand)]";
  const activeText = "text-white";
  const inactiveClasses =
    isDark ?
      "border-transparent bg-transparent text-[var(--app-text)] hover:border-[var(--app-border)] hover:bg-[var(--app-surface-alt)]"
      : "border-transparent bg-transparent text-[var(--app-text)] hover:border-[var(--app-border)] hover:bg-[var(--app-surface-alt)]";

  return (
    <aside
      className={[
        "fixed inset-y-[65px] left-0 z-40 flex h-[calc(100vh-65px)] shrink-0 -translate-x-full flex-col border-r transition-transform duration-300 md:sticky md:inset-auto md:left-auto md:top-[65px] md:h-[calc(100vh-65px)] md:translate-x-0 md:flex",
        mobileOpen ? "translate-x-0" : "-translate-x-full",
        collapsed ? "w-[90px] md:w-20" : "w-80px md:w-[250px]",
        shellClasses,
      ].join(" ")}
      data-mobile-open={mobileOpen}
    >
      <div
        className={`flex items-start justify-between gap-3 border-b px-4 py-4 ${divider}`}
      >
        <div className='flex min-w-0 items-center gap-3'>
          <div
            className={`${brandBg} grid h-10 w-10 shrink-0 place-items-center rounded-xl text-white`}
          >
            <div className='grid h-7 w-7 place-items-center rounded-lg bg-white text-[var(--app-brand-strong)]'>
              <BookText size={16} />
            </div>
          </div>
          {!collapsed ?
            <div className='min-w-0'>
              <div className='flex items-center gap-2'>
                <h1 className='text-base font-semibold tracking-[0.08em]'>
                  NOTEIT
                </h1>
                <span
                  className={`${brandBg} rounded-md px-2 py-0.5 text-[10px] font-semibold text-white`}
                >
                  v2.0
                </span>
              </div>
              <p
                className={`mt-1 text-[11px] font-medium tracking-[0.12em] ${mutedText}`}
              >
                Teacher Portal
              </p>
            </div>
            : null}
        </div>

        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={[
            "grid h-9 w-9 place-items-center rounded-lg border transition hover:scale-[1.02]",
            divider,
            "bg-[var(--app-surface-alt)] text-[var(--app-text)]",
          ].join(" ")}
          onClick={onToggleCollapse}
          type='button'
        >
          {collapsed ?
            <ChevronRight size={18} />
            : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className='flex-1 scroll-container scrollbar-thin scrollbar-thumb-[var(--app-border)] scrollbar-track-[var(--app-surface)] overflow-y-auto px-4 py-5'>
        <div className='space-y-7'>
          <section>
            {!collapsed ?
              <h3
                className={[
                  mutedText,
                  "mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]",
                ].join(" ")}
              >
                Main Workspace
              </h3>
              : null}

            <nav className='space-y-2.5'>
              {workspaceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      [
                        "group flex items-center gap-3 rounded-lg border px-3.5 py-3 transition-all",
                        isActive ?
                          `${brandBorder} ${brandBg} ${activeText}`
                          : inactiveClasses,
                      ].join(" ")
                    }
                    onClick={onClose}
                    to={item.to}
                  >
                    {({ isActive }) => (
                      <>
                        <Icon
                          className={isActive ? "text-white" : brandText}
                          size={18}
                        />
                        {!collapsed ?
                          <span className='text-sm font-medium'>
                            {item.label}
                          </span>
                          : null}
                      </>
                    )}
                  </NavLink>
                );
              })}
            </nav>
          </section>
        </div>
      </div>

      <div className={`mt-auto border-t p-4 ${divider}`}>
        <div className='flex items-center gap-3'>
          <div
            className={`${brandBg} grid h-10 w-10 place-items-center rounded-xl text-sm font-semibold text-white`}
          >
            A
          </div>

          {!collapsed ?
            <>
              <div className='min-w-0'>
                <p className='text-sm font-medium'>Academic Scholar</p>
                <p className={[mutedText, "mt-1 text-xs"].join(" ")}>
                  Teacher profile
                </p>
              </div>
              <button
                aria-label='Sign out'
                className={[
                  "ml-auto grid h-9 w-9 place-items-center rounded-lg border transition hover:scale-[1.02]",
                  divider,
                  "bg-[var(--app-surface-alt)] text-[var(--app-text)]",
                ].join(" ")}
                type='button'
              >
                <ArrowRightFromLine size={18} />
              </button>
            </>
            : null}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
