import {
  ArrowRightFromLine,
  BadgeInfo,
  BellRing,
  BookOpen,
  BookText,
  ChevronLeft,
  ChevronRight,
  GraduationCap,
  LayoutDashboard,
  Mic,
  PanelTopOpen,
  Settings,
  Sparkles,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";

type SidebarProps = {
  collapsed: boolean;
  onToggleCollapse: () => void;
};

const workspaceItems = [
  { label: "Dashboard", to: "/overview", icon: LayoutDashboard },
  { label: "My Courses", to: "/my-courses", icon: BookOpen },
  { label: "Course Progress", to: "/course-progress", icon: PanelTopOpen },
  { label: "Student Doubts", to: "/student-doubts", icon: BadgeInfo },
  { label: "Quiz Mode", to: "/quiz-performance", icon: GraduationCap },
  { label: "Learning Analytics", to: "/learning-analytics", icon: Sparkles },
  { label: "Lecture Insights", to: "/lecture-insights", icon: Mic },
  { label: "Announcements / Resources", to: "/announcements-resources", icon: BookText },
];

const controlItems = [
  { label: "Activity Center", to: "/overview", icon: BellRing, badge: "LIVE" },
  { label: "Profile & Settings", to: "/profile-settings", icon: Settings },
];

const Sidebar = ({ collapsed, onToggleCollapse }: SidebarProps) => {
  const { theme } = useTheme();
  const isDark = theme === "dark";

  const shellClasses = isDark
    ? "border-[#64748B] bg-[#0F172A] text-[#F8FAFC]"
    : "border-[#64748B] bg-[#FFFFFF] text-[#0F172A]";
  const divider = "border-[#64748B]";
  const mutedText = "text-[#64748B]";

  return (
    <aside
      className={[
        "sticky top-[65px] hidden h-[calc(100vh-65px)] shrink-0 border-r md:flex md:flex-col",
        collapsed ? "md:w-20" : "md:w-[250px]",
        shellClasses,
      ].join(" ")}
    >
      <div className={`flex items-start justify-between gap-3 border-b px-4 py-4 ${divider}`}>
        <div className="flex min-w-0 items-center gap-3">
          <div className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-[#2563EB] text-[#FFFFFF]">
            <div className="grid h-7 w-7 place-items-center rounded-lg bg-[#0F172A] text-[#FFFFFF]">
              <BookText size={16} />
            </div>
          </div>
          {!collapsed ? (
            <div className="min-w-0">
              <div className="flex items-center gap-2">
                <h1 className="text-base font-semibold tracking-[0.08em]">NOTEIT</h1>
                <span className="rounded-md bg-[#2563EB] px-2 py-0.5 text-[10px] font-semibold text-[#FFFFFF]">
                  v2.0
                </span>
              </div>
              <p className={`mt-1 text-[11px] font-medium tracking-[0.12em] ${mutedText}`}>
                Teacher Portal
              </p>
            </div>
          ) : null}
        </div>

        <button
          aria-label={collapsed ? "Expand sidebar" : "Collapse sidebar"}
          className={[
            "grid h-9 w-9 place-items-center rounded-lg border transition hover:scale-[1.02]",
            divider,
            isDark ? "bg-[#0F172A] text-[#F8FAFC]" : "bg-[#FFFFFF] text-[#0F172A]",
          ].join(" ")}
          onClick={onToggleCollapse}
          type="button"
        >
          {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto px-4 py-5">
        <div className="space-y-7">
          <section>
            {!collapsed ? (
              <h3 className={[mutedText, "mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]"].join(" ")}>
                Main Workspace
              </h3>
            ) : null}

            <nav className="space-y-2.5">
              {workspaceItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      [
                        "group flex items-center gap-3 rounded-lg border px-3.5 py-3 transition-all",
                        isActive
                          ? "border-[#2563EB] bg-[#2563EB] text-[#FFFFFF]"
                          : isDark
                            ? "border-transparent bg-transparent text-[#F8FAFC] hover:border-[#64748B] hover:bg-[#0F172A]"
                            : "border-transparent bg-transparent text-[#0F172A] hover:border-[#64748B] hover:bg-[#F8FAFC]",
                      ].join(" ")
                    }
                    to={item.to}
                  >
                    <Icon
                      className={isDark ? "text-[#F8FAFC]" : "text-[#0F172A]"}
                      size={17}
                    />
                    {!collapsed ? <span className="text-sm font-medium">{item.label}</span> : null}
                  </NavLink>
                );
              })}
            </nav>
          </section>

          <section>
            {!collapsed ? (
              <h3 className={[mutedText, "mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]"].join(" ")}>
                System & Control
              </h3>
            ) : null}

            <nav className="space-y-2.5">
              {controlItems.map((item) => {
                const Icon = item.icon;

                return (
                  <NavLink
                    key={item.to}
                    className={({ isActive }) =>
                      [
                        "group flex items-center gap-3 rounded-lg border px-3.5 py-3 transition-all",
                        isActive
                          ? "border-[#2563EB] bg-[#2563EB] text-[#FFFFFF]"
                          : isDark
                            ? "border-transparent bg-transparent text-[#F8FAFC] hover:border-[#64748B] hover:bg-[#0F172A]"
                            : "border-transparent bg-transparent text-[#0F172A] hover:border-[#64748B] hover:bg-[#F8FAFC]",
                      ].join(" ")
                    }
                    to={item.to}
                  >
                    <span className="relative">
                      <Icon
                        className={isDark ? "text-[#F8FAFC]" : "text-[#0F172A]"}
                        size={17}
                      />
                      {item.label === "Activity Center" ? (
                        <span className="absolute -right-1 -top-1 h-2.5 w-2.5 rounded-full bg-[#D97706]" />
                      ) : null}
                    </span>
                    {!collapsed ? (
                      <span className="flex min-w-0 items-center gap-2">
                        <span className="text-sm font-medium">{item.label}</span>
                        {item.badge ? (
                          <span className="rounded-md border border-[#64748B] px-2 py-0.5 text-[10px] font-medium text-inherit">
                            {item.badge}
                          </span>
                        ) : null}
                      </span>
                    ) : null}
                  </NavLink>
                );
              })}
            </nav>
          </section>

          {!collapsed ? (
            <section>
              <div
                className={[
                  "rounded-2xl border p-3.5",
                  isDark ? "border-[#64748B] bg-[#0F172A]" : "border-[#64748B] bg-[#F8FAFC]",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <h4 className="text-sm font-semibold">BYOK Member</h4>
                    <p className={[mutedText, "mt-2 text-xs leading-5"].join(" ")}>
                      Bring Your Own Key mode for advanced workflows.
                    </p>
                  </div>
                  <span className="rounded-md bg-[#DC2626] px-2 py-0.5 text-[10px] font-semibold text-[#FFFFFF]">
                    Free
                  </span>
                </div>

                <button
                  className="mt-3 flex w-full items-center justify-center gap-2 rounded-xl border border-[#64748B] bg-[#0F172A] px-4 py-2.5 text-sm font-medium text-[#FFFFFF] transition hover:opacity-95"
                  type="button"
                >
                  Unleash Pro Tiers <ArrowRightFromLine size={16} />
                </button>
              </div>
            </section>
          ) : null}
        </div>
      </div>

      <div className={`mt-auto border-t p-4 ${divider}`}>
        <div className="flex items-center gap-3">
          <div className="grid h-10 w-10 place-items-center rounded-xl bg-[#2563EB] text-sm font-semibold text-[#FFFFFF]">
            A
          </div>
          {!collapsed ? (
            <div className="min-w-0">
              <p className="text-sm font-medium">Academic Scholar</p>
              <p className={[mutedText, "mt-1 text-xs"].join(" ")}>Teacher profile</p>
            </div>
          ) : null}
          <button
            aria-label="Sign out"
            className={[
              "ml-auto grid h-9 w-9 place-items-center rounded-lg border transition hover:scale-[1.02]",
              divider,
              isDark ? "bg-[#0F172A] text-[#F8FAFC]" : "bg-[#FFFFFF] text-[#0F172A]",
            ].join(" ")}
            type="button"
          >
            <ArrowRightFromLine size={18} />
          </button>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
