import { Header, Outlet, Sidebar, useState, useTheme } from "../imports";

const Layout = () => {
  const { theme } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const isDark = theme === "dark";

  return (
    <div
      className={[
        "min-h-screen transition-colors",
        isDark
          ? "bg-[var(--app-bg)] text-[var(--app-text)]"
          : "bg-[var(--app-bg)] text-[var(--app-text)]",
      ].join(" ")}
    >
      <Header onMobileSidebarToggle={() => setMobileSidebarOpen((currentValue) => !currentValue)} />

      {mobileSidebarOpen ? (
        <button
          aria-label="Close mobile sidebar"
          className="fixed inset-0 z-30 bg-black/40 md:hidden"
          onClick={() => setMobileSidebarOpen(false)}
          type="button"
        />
      ) : null}

      <div className="flex min-h-[calc(100vh-65px)] flex-col md:flex-row">
        <Sidebar
          collapsed={sidebarCollapsed}
          mobileOpen={mobileSidebarOpen}
          onClose={() => setMobileSidebarOpen(false)}
          onToggleCollapse={() => {
            setSidebarCollapsed((currentValue) => !currentValue);
          }}
        />
        <main className="flex-1 p-3 md:p-4">
          <div
            className={[
              "min-h-[calc(100vh-105px)] rounded-2xl border p-4 transition-colors md:p-5",
              isDark
                ? "border-[var(--app-border)] bg-[var(--app-surface)]"
                : "border-[var(--app-border)] bg-[var(--app-surface)]",
            ].join(" ")}
          >
            <Outlet />
          </div>
        </main>
      </div>
    </div>
  );
};

export default Layout;
