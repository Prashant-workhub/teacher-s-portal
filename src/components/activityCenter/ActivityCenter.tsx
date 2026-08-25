import { RecentActivities, recentActivitiesData, type RecentActivity } from "../imports";

type ActivityCenterProps = {
  recentActivities?: RecentActivity[];
};

const ActivityCenter = ({ recentActivities = recentActivitiesData }: ActivityCenterProps) => {
  return (
    <div className="activity-center">
        <h2 className="text-2xl font-bold mb-4">Activity Center</h2>
        <RecentActivities data={recentActivities} link="/" btn={false} />
    </div>
  );
};

export default ActivityCenter;
