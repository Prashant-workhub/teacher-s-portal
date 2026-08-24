import activeStudents from "../../student db/active-student";
import Card from "../../Props/cards";
import FacultyPendingDoubtsCard from "../../Props/facultyPendingDoubtsCard";
import Subjects from "../../course db/completion/c_completion";
import facultyPendingDoubts from "../../course db/faculty-pending-doubts/facultyPendingDoubts";
import SubjectProgressBars from "../../Props/progressBar";
import subjectPerformanceKpi from "../../course db/subject-performance-kpi/subjectPerformanceKpi";
import KpiCard from "../../Props/kpiCard";
const Overview = () => {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <SubjectProgressBars data={Subjects} />
      <Card students={activeStudents} />
      <FacultyPendingDoubtsCard data={facultyPendingDoubts} />
      <div className="xl:col-span-2">
        <KpiCard data={subjectPerformanceKpi} />
      </div>
    </section>
  );
};

export default Overview;
