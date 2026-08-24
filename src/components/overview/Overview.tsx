import activeStudents from "../../student db/active-student";
import Card from "../../Props/cards";
import Subjects from "../../course db/completion/c_completion";
import SubjectProgressBars from "../../Props/progressBar";
const Overview = () => {
  return <section className="p-6">
    <SubjectProgressBars data={Subjects} />
    <Card students={activeStudents} />
  </section>;
};

export default Overview;
