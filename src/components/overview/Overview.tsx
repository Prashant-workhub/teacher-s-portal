import {
  FacultyPendingDoubtsCard,
  KpiCard,
  RecentActivities,
  SubjectProgressBars,
  Subjects,
  facultyPendingDoubts,
  recentActivitiesData,
  semesterStudentLoad,
  SemesterStudentLoadCard,
  subjectPerformanceKpi,
  subjectPerformanceKpiOptions,
  type RecentActivity,
  useState,
} from "../imports";

type OverviewProps = {
  recentActivities?: RecentActivity[];
};

const Overview = ({ recentActivities = recentActivitiesData }: OverviewProps) => {
  const [selectedSubjectId, setSelectedSubjectId] = useState(
    subjectPerformanceKpiOptions[0]?.subject.id ?? subjectPerformanceKpi.subject.id,
  );
  const currentKpi =
    subjectPerformanceKpiOptions.find((item) => item.subject.id === selectedSubjectId) ??
    subjectPerformanceKpi;

  return (
    <div className="space-y-5">
      <section className="grid items-stretch gap-5 md:grid-cols-2 xl:auto-rows-fr xl:grid-cols-3">
        <SubjectProgressBars data={Subjects} />
        <FacultyPendingDoubtsCard data={facultyPendingDoubts} />
        <SemesterStudentLoadCard data={semesterStudentLoad} />
      </section>

      <section className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-3">
        <div className="h-full md:col-span-2 xl:col-span-2">
          <KpiCard
            data={currentKpi}
            onSubjectChange={setSelectedSubjectId}
            subjectOptions={subjectPerformanceKpiOptions.map((item) => item.subject)}
          />
        </div>
        <div className="h-120 overflow-auto scrollbar-thin scrollbar-thumb-[var(--app-border)] scrollbar-track-[var(--app-surface)] md:col-span-2 xl:col-span-1">
          <RecentActivities data={recentActivities} link={"/"} btn={true} />
        </div>
      </section>
    </div>
  );
};

export default Overview;
