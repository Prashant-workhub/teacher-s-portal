import { Bell, MoonStar, Search, SunMedium, useTheme } from "../imports";

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const brandBg = "bg-[var(--app-brand)]";
  const brandText = "text-[var(--app-brand)]";
  const shellBg = "bg-[var(--app-surface)]";
  const shellBorder = "border-[var(--app-border)]";
  const textMain = "text-[var(--app-text)]";
  const textMuted = "text-[var(--app-muted)]";
  const panelBg = "bg-[var(--app-surface-alt)]";

  return (
    <header
      className={[
        "sticky top-0 z-30 border-b px-4 py-2.5 backdrop-blur-xl transition-colors",
        shellBorder,
        shellBg,
        textMain,
      ].join(" ")}
      style={{
        backgroundColor: "var(--app-surface)",
      }}
    >
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-3">
          <div className="rounded-md px-3 py-2 text-3xl font-semibold tracking-[0.12em] text-white">
            NOTEIT
          </div>
          <div className="hidden min-w-0 flex-col leading-tight md:flex">
            <span className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--app-muted)]">
              Faculty portal
            </span>
            <span className="text-sm font-medium text-[var(--app-text)]">
              Teacher workspace
            </span>
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
              brandText,
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

          <div className={`${brandBg} h-10 w-10 rounded-xl p-0.5`}>
            <div className="grid h-full w-full place-items-center rounded-[10px] bg-white text-sm font-semibold text-[var(--app-brand-strong)]">
              A
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
