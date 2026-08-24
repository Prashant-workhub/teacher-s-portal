import {
  Anchor,
  ArrowLeft,
  ArrowRight,
  BarChart3,
  BookOpen,
  Compass,
  Megaphone,
  Settings2,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";

const waypoints = [
  {
    label: "Dashboard",
    description: "Return to the main portal overview.",
    to: "/overview",
    icon: Compass,
    bearing: "N",
  },
  {
    label: "My Courses",
    description: "Jump back to your teaching spaces.",
    to: "/my-courses",
    icon: BookOpen,
    bearing: "NE",
  },
  {
    label: "Course Progress",
    description: "Open progress and KPI tracking.",
    to: "/course-progress",
    icon: BarChart3,
    bearing: "E",
  },
  {
    label: "Announcements",
    description: "Check notes, resources, and updates.",
    to: "/announcements-resources",
    icon: Megaphone,
    bearing: "SE",
  },
  {
    label: "Profile & Settings",
    description: "Review preferences and account settings.",
    to: "/profile-settings",
    icon: Settings2,
    bearing: "S",
  },
];

const stars = [
  { top: "8%", left: "12%", delay: "0s" },
  { top: "18%", left: "76%", delay: "0.6s" },
  { top: "34%", left: "45%", delay: "1.1s" },
  { top: "52%", left: "88%", delay: "0.3s" },
  { top: "64%", left: "6%", delay: "1.6s" },
  { top: "78%", left: "58%", delay: "0.9s" },
  { top: "12%", left: "92%", delay: "1.9s" },
  { top: "44%", left: "22%", delay: "0.2s" },
  { top: "88%", left: "30%", delay: "1.3s" },
  { top: "26%", left: "62%", delay: "0.5s" },
];

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="voyage-page">
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,500;0,9..144,650;1,9..144,500&family=JetBrains+Mono:wght@400;500;600&display=swap');

        .voyage-page {
          --ink: #E9E4D6;
          --ink-dim: #A7ADC0;
          --navy: #12162A;
          --navy-deep: #0B0E1C;
          --panel: #1B2036;
          --parchment: #E8DFC8;
          --parchment-ink: #241D12;
          --gold: #D4A72C;
          --rust: #C1502E;

          position: relative;
          min-height: 100vh;
          padding: 32px 20px 48px;
          background:
            radial-gradient(ellipse at 20% -10%, rgba(212,167,44,0.10), transparent 40%),
            radial-gradient(ellipse at 90% 110%, rgba(193,80,46,0.10), transparent 45%),
            linear-gradient(180deg, var(--navy-deep) 0%, var(--navy) 100%);
          color: var(--ink);
          font-family: 'JetBrains Mono', monospace;
          overflow: hidden;
        }

        .voyage-star {
          position: absolute;
          width: 3px;
          height: 3px;
          border-radius: 50%;
          background: var(--ink);
          opacity: 0.25;
          animation: voyage-twinkle 3.4s ease-in-out infinite;
        }

        @keyframes voyage-twinkle {
          0%, 100% { opacity: 0.15; }
          50% { opacity: 0.75; }
        }

        .voyage-frame {
          position: relative;
          z-index: 1;
          max-width: 1180px;
          margin: 0 auto;
        }

        .voyage-topbar {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-bottom: 28px;
          border-bottom: 1px solid rgba(233,228,214,0.14);
          margin-bottom: 40px;
        }

        .voyage-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 12px;
          letter-spacing: 0.24em;
          text-transform: uppercase;
          color: var(--ink-dim);
        }

        .voyage-brand svg { color: var(--gold); }

        .voyage-back {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          background: transparent;
          border: 1px solid rgba(233,228,214,0.22);
          color: var(--ink);
          padding: 9px 16px;
          border-radius: 2px;
          font-family: inherit;
          font-size: 12px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          cursor: pointer;
          transition: border-color 0.2s ease, color 0.2s ease;
        }

        .voyage-back:hover {
          border-color: var(--gold);
          color: var(--gold);
        }

        .voyage-grid {
          display: grid;
          grid-template-columns: 1.3fr 1fr;
          gap: 28px;
        }

        @media (max-width: 900px) {
          .voyage-grid { grid-template-columns: 1fr; }
        }

        .voyage-chart {
          position: relative;
          background: var(--panel);
          border: 1px solid rgba(233,228,214,0.12);
          border-radius: 4px;
          padding: 48px 44px;
        }

        .voyage-stamp {
          position: absolute;
          top: 28px;
          right: 32px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 11px;
          letter-spacing: 0.22em;
          color: var(--rust);
          border: 1.5px solid var(--rust);
          border-radius: 999px;
          padding: 6px 14px;
          transform: rotate(6deg);
          opacity: 0.85;
        }

        .voyage-eyebrow {
          font-size: 11px;
          letter-spacing: 0.3em;
          text-transform: uppercase;
          color: var(--gold);
          margin: 0 0 18px;
        }

        .voyage-headline {
          font-family: 'Fraunces', serif;
          font-weight: 650;
          font-style: italic;
          font-size: clamp(32px, 4.4vw, 52px);
          line-height: 1.12;
          margin: 0 0 18px;
          max-width: 15ch;
          color: var(--ink);
        }

        .voyage-sub {
          font-size: 14px;
          line-height: 1.7;
          color: var(--ink-dim);
          max-width: 46ch;
          margin: 0 0 40px;
        }

        .voyage-compass {
          position: relative;
          width: 176px;
          height: 176px;
          border-radius: 50%;
          border: 1.5px dashed rgba(212,167,44,0.55);
          display: grid;
          place-items: center;
          margin-bottom: 40px;
          background: radial-gradient(circle, rgba(212,167,44,0.06), transparent 70%);
        }

        .voyage-tick {
          position: absolute;
          font-size: 10px;
          letter-spacing: 0.1em;
          color: var(--ink-dim);
        }
        .voyage-tick.n { top: -6px; left: 50%; transform: translateX(-50%); }
        .voyage-tick.e { right: -14px; top: 50%; transform: translateY(-50%); }
        .voyage-tick.s { bottom: -6px; left: 50%; transform: translateX(-50%); }
        .voyage-tick.w { left: -14px; top: 50%; transform: translateY(-50%); }

        .voyage-needle {
          width: 2px;
          height: 62px;
          background: linear-gradient(180deg, var(--rust), transparent);
          transform-origin: bottom center;
          position: absolute;
          bottom: 50%;
          animation: voyage-spin 9s linear infinite;
        }

        @keyframes voyage-spin {
          0% { transform: rotate(20deg); }
          50% { transform: rotate(155deg); }
          100% { transform: rotate(20deg); }
        }

        .voyage-readout {
          font-family: 'Fraunces', serif;
          font-size: 30px;
          font-weight: 600;
          color: var(--ink);
          z-index: 1;
        }

        .voyage-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
        }

        .voyage-btn {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          font-family: 'JetBrains Mono', monospace;
          font-size: 12px;
          letter-spacing: 0.06em;
          text-transform: uppercase;
          padding: 13px 22px;
          border-radius: 2px;
          cursor: pointer;
          border: 1px solid transparent;
          transition: transform 0.15s ease, opacity 0.15s ease;
        }

        .voyage-btn:hover { transform: translateY(-1px); }

        .voyage-btn.primary {
          background: var(--gold);
          color: var(--navy-deep);
        }
        .voyage-btn.primary:hover { opacity: 0.9; }

        .voyage-btn.ghost {
          background: transparent;
          border-color: rgba(233,228,214,0.24);
          color: var(--ink);
        }
        .voyage-btn.ghost:hover { border-color: var(--ink); }

        .voyage-log {
          background: var(--parchment);
          color: var(--parchment-ink);
          border-radius: 4px;
          padding: 32px 28px;
          height: fit-content;
          box-shadow: 0 24px 60px rgba(0,0,0,0.35);
        }

        .voyage-log-title {
          font-family: 'Fraunces', serif;
          font-style: italic;
          font-size: 20px;
          margin: 0 0 4px;
        }

        .voyage-log-sub {
          font-size: 11px;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: rgba(36,29,18,0.55);
          margin: 0 0 22px;
        }

        .voyage-entry {
          display: flex;
          align-items: flex-start;
          gap: 14px;
          padding: 14px 0;
          border-top: 1px solid rgba(36,29,18,0.14);
          text-decoration: none;
          color: inherit;
        }
        .voyage-entry:first-of-type { border-top: none; }

        .voyage-entry-icon {
          display: grid;
          place-items: center;
          width: 34px;
          height: 34px;
          border-radius: 3px;
          background: rgba(36,29,18,0.08);
          color: var(--parchment-ink);
          flex-shrink: 0;
        }

        .voyage-entry-body { flex: 1; min-width: 0; }

        .voyage-entry-top {
          display: flex;
          align-items: baseline;
          justify-content: space-between;
          gap: 10px;
        }

        .voyage-entry-label {
          font-weight: 600;
          font-size: 13.5px;
        }

        .voyage-entry-bearing {
          font-size: 10px;
          letter-spacing: 0.08em;
          color: rgba(36,29,18,0.5);
          flex-shrink: 0;
        }

        .voyage-entry-desc {
          font-size: 12px;
          line-height: 1.55;
          color: rgba(36,29,18,0.68);
          margin-top: 3px;
        }

        .voyage-entry-arrow {
          opacity: 0;
          transform: translateX(-4px);
          transition: opacity 0.15s ease, transform 0.15s ease;
        }
        .voyage-entry:hover .voyage-entry-arrow {
          opacity: 1;
          transform: translateX(0);
        }

        @media (prefers-reduced-motion: reduce) {
          .voyage-star, .voyage-needle { animation: none; }
        }
      `}</style>

      {stars.map((s, i) => (
        <span
          key={i}
          className="voyage-star"
          style={{ top: s.top, left: s.left, animationDelay: s.delay }}
        />
      ))}

      <div className="voyage-frame">
        <div className="voyage-topbar">
          <div className="voyage-brand">
            <Anchor size={15} />
            NOTEIT · Faculty Portal
          </div>
          <button className="voyage-back" onClick={() => navigate(-1)} type="button">
            <ArrowLeft size={14} />
            Back
          </button>
        </div>

        <div className="voyage-grid">
          <section className="voyage-chart">
            <span className="voyage-stamp">Uncharted</span>
            <p className="voyage-eyebrow">Log entry · Error 404</p>
            <h1 className="voyage-headline">
              You've sailed past the edge of the map.
            </h1>
            <p className="voyage-sub">
              There's no page charted at this address. The instrument below
              can't find a bearing for it either — steer back to known
              waters using the log on the right, or the route you came from.
            </p>

            <div className="voyage-compass" aria-hidden="true">
              <span className="voyage-tick n">N</span>
              <span className="voyage-tick e">E</span>
              <span className="voyage-tick s">S</span>
              <span className="voyage-tick w">W</span>
              <div className="voyage-needle" />
              <span className="voyage-readout">404</span>
            </div>

            <div className="voyage-actions">
              <button
                className="voyage-btn primary"
                onClick={() => navigate("/overview")}
                type="button"
              >
                Return to dashboard
                <ArrowRight size={14} />
              </button>
              <button
                className="voyage-btn ghost"
                onClick={() => navigate(-1)}
                type="button"
              >
                <ArrowLeft size={14} />
                Retrace my route
              </button>
            </div>
          </section>

          <aside className="voyage-log">
            <h2 className="voyage-log-title">Known waypoints</h2>
            <p className="voyage-log-sub">Charted routes back into the portal</p>

            {waypoints.map((w) => {
              const Icon = w.icon;
              return (
                <Link key={w.to} to={w.to} className="voyage-entry">
                  <span className="voyage-entry-icon">
                    <Icon size={16} />
                  </span>
                  <span className="voyage-entry-body">
                    <span className="voyage-entry-top">
                      <span className="voyage-entry-label">{w.label}</span>
                      <span className="voyage-entry-bearing">{w.bearing}</span>
                    </span>
                    <span className="voyage-entry-desc">{w.description}</span>
                  </span>
                  <ArrowRight size={14} className="voyage-entry-arrow" />
                </Link>
              );
            })}
          </aside>
        </div>
      </div>
    </div>
  );
};

export default NotFound;