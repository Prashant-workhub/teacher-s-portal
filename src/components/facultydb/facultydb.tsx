import type { RecentActivity } from "../../types/kpi";

const recentActivitiesData: RecentActivity[] = [
  {
    id: 1,
    title: "New course added",
    description: "A new course has been added to your curriculum.",
    time: "2 hours ago"
  },
  {
    id: 2,
    title: "Assignment submitted",
    description: "A student has submitted an assignment.",
    time: "5 hours ago"
  },
  {
    id: 3,
    title: "Feedback received",
    description: "You have received feedback on your latest submission.",
    time: "1 day ago"
  },
  {
    id: 4,
    title: "New message",
    description: "You have a new message from a student.",
    time: "2 days ago"
  },
  {
    id: 5,
    title: "Course updated",
    description: "The course content has been updated.",
    time: "3 days ago"
  }
];

export default recentActivitiesData;
