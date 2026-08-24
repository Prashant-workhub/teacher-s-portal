import FacultyPendingDoubtsCard from "../../Props/facultyPendingDoubtsCard";
import SemesterStudentLoadCard from "../../Props/semesterStudentLoadCard";
import RecentActivities from "../../Props/recentActivities";
import Subjects from "../../course db/completion/c_completion";
import facultyPendingDoubts from "../../course db/faculty-pending-doubts/facultyPendingDoubts";
import recentActivitiesData from "../facultydb/facultydb";
import semesterStudentLoad from "../../course db/semester-student-load/semesterStudentLoad";
import SubjectProgressBars from "../../Props/progressBar";
import subjectPerformanceKpi, {
  subjectPerformanceKpiOptions,
} from "../../course db/subject-performance-kpi/subjectPerformanceKpi";
import KpiCard from "../../Props/kpiCard";
import { useState } from "react";
import type { RecentActivity } from "../../types/kpi";

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
        <div className="h-full md:col-span-2 xl:col-span-1">
          <RecentActivities data={recentActivities} />
        </div>
      </section>
    </div>
  );
};

export default Overview;
