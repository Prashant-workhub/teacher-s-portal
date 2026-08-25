export {
  StrictMode,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
export { createRoot } from "react-dom/client";
export {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  NavLink,
  Outlet,
  Route,
  RouterProvider,
  useNavigate,
} from "react-router-dom";
export {
  Anchor,
  AlertCircle,
  ArrowLeft,
  ArrowRight,
  ArrowRightFromLine,
  BarChart3,
  BadgeInfo,
  Bell,
  BellRing,
  BookOpen,
  BookText,
  CheckCircle2,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  Clock,
  Clock3,
  Compass,
  GraduationCap,
  Inbox,
  LayoutDashboard,
  Megaphone,
  Mic,
  MoonStar,
  PanelTopOpen,
  Search,
  Settings,
  Calendar,
  Settings2,
  Sparkles,
  SunMedium,
  Users,
} from "lucide-react";
export { ThemeProvider, useTheme } from "./theme/ThemeProvider";
export { default as Header } from "./header/Header";
export { default as Sidebar } from "./sidebar/Sidebar";
export { default as Layout } from "./layout/layout";
export { default as NotFound } from "./not-found/NotFound";
export { default as Overview } from "./overview/Overview";
export { default as MyCourses } from "./my-courses/MyCourses";
export { default as CourseProgress } from "./course-progress/CourseProgress";
export { default as StudentDoubts } from "./student-doubts/StudentDoubts";
export { default as QuizPerformance } from "./quiz-performance/QuizPerformance";
export { default as LearningAnalytics } from "./learning-analytics/LearningAnalytics";
export { default as LectureInsights } from "./lecture-insights/LectureInsights";
export { default as AnnouncementsResources } from "./announcements-resources/AnnouncementsResources";
export { default as ProfileSettings } from "./profile-settings/ProfileSettings";
export { default as ActivityCenter } from "./activityCenter/ActivityCenter";
export { default as Footer } from "./footer/Footer";
export { default as recentActivitiesData } from "./facultydb/facultydb";
export { default as announcementData } from "./announcements-resources/announcementData";
export { default as RecentActivities } from "../Props/recentActivities";
export { default as KpiCard } from "../Props/kpiCard";
export { default as FacultyPendingDoubtsCard } from "../Props/facultyPendingDoubtsCard";
export { default as SemesterStudentLoadCard } from "../Props/semesterStudentLoadCard";
export { default as SubjectProgressBars } from "../Props/progressBar";
export { default as CourseStatCard } from "../Props/4infocards";
export { default as Subjects } from "../course db/completion/c_completion";
export { default as facultyPendingDoubts } from "../course db/faculty-pending-doubts/facultyPendingDoubts";
export { default as semesterStudentLoad } from "../course db/semester-student-load/semesterStudentLoad";
export {
  default as subjectPerformanceKpi,
  subjectPerformanceKpiOptions,
} from "../course db/subject-performance-kpi/subjectPerformanceKpi";
export type {
  FacultyPendingDoubtsData,
  KpiData,
  KpiSubject,
  RecentActivity,
  SemesterStudentLoadData,
} from "../types/kpi";
export { router } from "../App";
