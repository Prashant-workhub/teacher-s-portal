import FacultyPendingDoubtsCard from "../../Props/facultyPendingDoubtsCard";
import SemesterStudentLoadCard from "../../Props/semesterStudentLoadCard";
import Subjects from "../../course db/completion/c_completion";
import facultyPendingDoubts from "../../course db/faculty-pending-doubts/facultyPendingDoubts";
import semesterStudentLoad from "../../course db/semester-student-load/semesterStudentLoad";
import SubjectProgressBars from "../../Props/progressBar";
import subjectPerformanceKpi from "../../course db/subject-performance-kpi/subjectPerformanceKpi";
import KpiCard from "../../Props/kpiCard";

const Overview = () => {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <SubjectProgressBars data={Subjects} />
      <FacultyPendingDoubtsCard data={facultyPendingDoubts} />
      <SemesterStudentLoadCard data={semesterStudentLoad} />
      <div className="xl:col-span-2">
        <KpiCard data={subjectPerformanceKpi} />
      </div>
    </section>
  );
};

export default Overview;
