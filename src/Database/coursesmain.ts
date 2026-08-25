import type { ElementType } from "react";

import { BarChart3, BookOpen, CheckCircle2, Inbox, Users } from "lucide-react";

export type CourseCardData = {
  id: string | number;
  title: string;
  code: string;
  department: string;
  semester: string;
  status: "On Track" | "Needs Attention" | "Action Required";
  completionPercentage: number;
  students: number;
  lecturesCompleted: number;
  lecturesTotal: number;
  avgQuizScore: number;
  doubts: number;
  lastActivity: string;
};

export type CourseFilterOption = "All Departments" | "Computer Science" | "Mathematics" | "Physics" | "Engineering";
export type CourseStatusFilter = "All Status" | CourseCardData["status"];
export type CourseSortOrder = "Sort: Course Completion" | "Completion: Low to High" | "Completion: High to Low";
export type CourseViewMode = "grid" | "list";

export type CourseStatCardData = {
  title: string;
  value: string;
  subtitle: string;
  icon: ElementType;
  iconClassName?: string;
  valueClassName?: string;
  subtitleClassName?: string;
};

export const courseFilterOptions: CourseFilterOption[] = [
  "All Departments",
  "Computer Science",
  "Mathematics",
  "Physics",
  "Engineering",
];

export const courseStatusOptions: CourseStatusFilter[] = [
  "All Status",
  "On Track",
  "Needs Attention",
  "Action Required",
];

export const courseSortOptions: CourseSortOrder[] = [
  "Sort: Course Completion",
  "Completion: Low to High",
  "Completion: High to Low",
];

export const courseSemesterOptions = ["Semester 4", "Semester 3", "Semester 2", "Semester 1"] as const;

export const courseCards: CourseCardData[] = [
  {
    id: 1,
    title: "Advanced Calculus",
    code: "MTH302",
    department: "Mathematics",
    semester: "Semester 4",
    status: "On Track",
    completionPercentage: 78,
    students: 124,
    lecturesCompleted: 24,
    lecturesTotal: 30,
    avgQuizScore: 82,
    doubts: 3,
    lastActivity: "2 hours ago",
  },
  {
    id: 2,
    title: "Data Structures",
    code: "CS201",
    department: "Computer Science",
    semester: "Semester 4",
    status: "Needs Attention",
    completionPercentage: 61,
    students: 186,
    lecturesCompleted: 19,
    lecturesTotal: 30,
    avgQuizScore: 68,
    doubts: 8,
    lastActivity: "5 hours ago",
  },
  {
    id: 3,
    title: "Operating Systems",
    code: "CS103",
    department: "Computer Science",
    semester: "Semester 4",
    status: "Action Required",
    completionPercentage: 43,
    students: 142,
    lecturesCompleted: 13,
    lecturesTotal: 30,
    avgQuizScore: 55,
    doubts: 14,
    lastActivity: "1 day ago",
  },
  {
    id: 4,
    title: "Computer Networks",
    code: "CS204",
    department: "Computer Science",
    semester: "Semester 4",
    status: "On Track",
    completionPercentage: 72,
    students: 210,
    lecturesCompleted: 22,
    lecturesTotal: 30,
    avgQuizScore: 76,
    doubts: 4,
    lastActivity: "3 hours ago",
  },
  {
    id: 5,
    title: "Database Systems",
    code: "CS205",
    department: "Computer Science",
    semester: "Semester 4",
    status: "Needs Attention",
    completionPercentage: 58,
    students: 168,
    lecturesCompleted: 17,
    lecturesTotal: 30,
    avgQuizScore: 64,
    doubts: 7,
    lastActivity: "6 hours ago",
  },
  {
    id: 6,
    title: "Discrete Mathematics",
    code: "MTH205",
    department: "Mathematics",
    semester: "Semester 4",
    status: "On Track",
    completionPercentage: 84,
    students: 118,
    lecturesCompleted: 28,
    lecturesTotal: 30,
    avgQuizScore: 85,
    doubts: 2,
    lastActivity: "4 hours ago",
  },
];

export const courseStats: CourseStatCardData[] = [
  {
    title: "Assigned Courses",
    value: "6",
    subtitle: "This semester",
    icon: BookOpen,
    iconClassName: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
  },
  {
    title: "Total Students",
    value: "1,248",
    subtitle: "Across all courses",
    icon: Users,
    iconClassName: "border-sky-400/20 bg-sky-400/10 text-sky-300",
  },
  {
    title: "Avg Course Completion",
    value: "68%",
    subtitle: "↑ 6% vs last month",
    icon: CheckCircle2,
    iconClassName: "border-emerald-400/20 bg-emerald-400/10 text-emerald-300",
    subtitleClassName: "text-emerald-300",
  },
  {
    title: "Avg Quiz Score",
    value: "74%",
    subtitle: "↑ 5% vs last month",
    icon: BarChart3,
    iconClassName: "border-indigo-400/20 bg-indigo-400/10 text-indigo-300",
    subtitleClassName: "text-emerald-300",
  },
  {
    title: "Pending Doubts",
    value: "12",
    subtitle: "3 overdue",
    icon: Inbox,
    iconClassName: "border-rose-400/20 bg-rose-400/10 text-rose-300",
    subtitleClassName: "text-rose-400",
  },
];

export const departments = courseFilterOptions;
export const statuses = courseStatusOptions;
export const semesterOptions = courseSemesterOptions;
export const dummyCourses = courseCards;
export type Course = CourseCardData;
