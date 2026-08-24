import type { RecentActivity } from "../../types/kpi";
import RecentActivities from "../../Props/recentActivities";
import recentActivitiesData from "../facultydb/facultydb";

type ActivityCenterProps = {
  recentActivities?: RecentActivity[];
};

const ActivityCenter = ({ recentActivities = recentActivitiesData }: ActivityCenterProps) => {
  return (
    <div className="activity-center">
        <h2 className="text-2xl font-bold mb-4">Activity Center</h2>
        <RecentActivities data={recentActivities}></RecentActivities>
    </div>
  );
};

export default ActivityCenter;
