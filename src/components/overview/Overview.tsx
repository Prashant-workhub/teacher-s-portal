import activeStudents from "../../student db/active-student";
import Card from "../../Props/cards";
import Subjects from "../../course db/completion/c_completion";
import SubjectProgressBars from "../../Props/progressBar";
import subjectPerformanceKpi from "../../course db/kpi/subjectPerformanceKpi";
import KpiCard from "../../Props/kpiCard";
const Overview = () => {
  return (
    <section className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
      <SubjectProgressBars data={Subjects} />
      <Card students={activeStudents} />
      <KpiCard data={subjectPerformanceKpi} />
    </section>
  );
};

export default Overview;
