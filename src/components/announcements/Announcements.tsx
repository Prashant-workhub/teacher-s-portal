import { RecentActivities, announcementData } from "../imports";

type AnnouncementCenterProps = {
  recentActivities?: typeof announcementData;
};

const AnnouncementsResources =({ recentActivities = announcementData }: AnnouncementCenterProps) => {
  return (
     <div className="activity-center">
        <h2 className="text-2xl font-bold mb-4">Activity Center</h2>
        <RecentActivities data={recentActivities} link="/" btn={false} />
    </div>
  )
}

export default AnnouncementsResources
