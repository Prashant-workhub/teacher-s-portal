import Header from "../header/Header";
import Sidebar from "../sidebar/Sidebar";
import { Outlet } from "react-router-dom";
import { useState } from "react";
import { useTheme } from "../theme/ThemeProvider";

const Layout = () => {
  const { theme } = useTheme();
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
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
      <Header />
      <div className="flex min-h-[calc(100vh-65px)] flex-col md:flex-row">
        <Sidebar
          collapsed={sidebarCollapsed}
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
