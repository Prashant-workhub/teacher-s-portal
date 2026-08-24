import { Bell, ChevronRight, MoonStar, Search, SunMedium } from "lucide-react";
import { useLocation } from "react-router-dom";
import { useTheme } from "../theme/ThemeProvider";

const routeTitles: Record<string, string> = {
  "/": "Overview",
  "/overview": "Overview",
  "/my-courses": "My Courses",
  "/course-progress": "Course Progress",
  "/student-doubts": "Student Doubts",
  "/quiz-performance": "Quiz & Performance",
  "/learning-analytics": "Learning Analytics",
  "/lecture-insights": "Lecture Insights",
  "/announcements-resources": "Announcements / Resources",
  "/profile-settings": "Profile & Settings",
};

const Header = () => {
  const { pathname } = useLocation();
  const { theme, toggleTheme } = useTheme();
  const currentTitle = routeTitles[pathname] ?? "Overview";
  const isDark = theme === "dark";
  const shellBg = isDark ? "bg-[#0F172A]" : "bg-[#FFFFFF]";
  const shellBorder = "border-[#64748B]";
  const textMain = isDark ? "text-[#F8FAFC]" : "text-[#0F172A]";
  const textMuted = "text-[#64748B]";
  const panelBg = isDark ? "bg-[#0F172A]" : "bg-[#F8FAFC]";

  return (
    <header
      className={[
        "sticky top-0 z-30 border-b px-4 py-2.5 backdrop-blur-xl transition-colors",
        shellBorder,
        shellBg,
        textMain,
      ].join(" ")}
      style={{ backgroundColor: isDark ? "#0F172A" : "#FFFFFF" }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-2">
          <div className="rounded-md bg-[#2563EB] px-3 py-2 text-xs font-semibold tracking-[0.12em] text-[#FFFFFF]">
            NOTEIT
          </div>
          <ChevronRight className={textMuted} size={16} />
          <div className="rounded-md bg-[#2563EB] px-3 py-2 text-sm font-medium text-[#FFFFFF]">
            {currentTitle}
          </div>
        </div>

        <div className="mx-auto hidden w-full max-w-xl md:block">
          <label
            className={[
              "flex items-center gap-3 rounded-full border px-4 py-2",
              shellBorder,
              panelBg,
              textMuted,
            ].join(" ")}
          >
            <Search size={18} />
            <input
              className="w-full bg-transparent text-sm outline-none placeholder:text-inherit"
              placeholder="Search notes, summaries, transcripts..."
              type="search"
            />
            <kbd
              className={[
                "rounded-md max-h-9 border px-2 py-1 text-[10px] font-medium",
                shellBorder,
                panelBg,
                textMuted,
              ].join(" ")}
            >
              ⌘ K
            </kbd>
          </label>
        </div>

        <div className="ml-auto flex items-center gap-2">
          <button
            aria-label="Toggle theme"
            className={[
              "grid h-10 w-10 place-items-center rounded-xl border transition hover:scale-[1.02]",
              shellBorder,
              panelBg,
              "text-[#2563EB]",
            ].join(" ")}
            onClick={toggleTheme}
            type="button"
          >
            {theme === "dark" ? <SunMedium size={18} /> : <MoonStar size={18} />}
          </button>

          <button
            aria-label="Notifications"
            className={[
              "relative grid h-10 w-10 place-items-center rounded-xl border transition hover:scale-[1.02]",
              shellBorder,
              panelBg,
              textMain,
            ].join(" ")}
            type="button"
          >
            <Bell size={18} />
            <span className="absolute right-2 top-2 h-2.5 w-2.5 rounded-full bg-[#DC2626]" />
          </button>

          <div className="h-10 w-10 rounded-xl bg-[#2563EB] p-0.5">
            <div className="grid h-full w-full place-items-center rounded-[10px] bg-[#0F172A] text-sm font-semibold text-[#FFFFFF]">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
