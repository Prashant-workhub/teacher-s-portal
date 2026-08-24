import FacultyPendingDoubtsCard from "../../Props/facultyPendingDoubtsCard";
import SemesterStudentLoadCard from "../../Props/semesterStudentLoadCard";
import Subjects from "../../course db/completion/c_completion";
import facultyPendingDoubts from "../../course db/faculty-pending-doubts/facultyPendingDoubts";
import semesterStudentLoad from "../../course db/semester-student-load/semesterStudentLoad";
import SubjectProgressBars from "../../Props/progressBar";
import subjectPerformanceKpi, {
  subjectPerformanceKpiOptions,
} from "../../course db/subject-performance-kpi/subjectPerformanceKpi";
import KpiCard from "../../Props/kpiCard";
import { useState } from "react";

const Overview = () => {
  const [selectedSubjectId, setSelectedSubjectId] = useState(
    subjectPerformanceKpiOptions[0]?.subject.id ?? subjectPerformanceKpi.subject.id,
  );
  const currentKpi =
    subjectPerformanceKpiOptions.find((item) => item.subject.id === selectedSubjectId) ??
    subjectPerformanceKpi;

  return (
    <section className="grid items-stretch gap-5 md:grid-cols-2 xl:auto-rows-fr xl:grid-cols-3">
      <SubjectProgressBars data={Subjects} />
      <FacultyPendingDoubtsCard data={facultyPendingDoubts} />
      <SemesterStudentLoadCard data={semesterStudentLoad} />
      <div className="h-full xl:col-span-2">
        <KpiCard
          data={currentKpi}
          onSubjectChange={setSelectedSubjectId}
          subjectOptions={subjectPerformanceKpiOptions.map((item) => item.subject)}
        />
      </div>
    </section>
  );
};

export default Overview;
