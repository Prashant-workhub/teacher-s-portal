import "./App.css";
import { createBrowserRouter, createRoutesFromElements, Route } from "react-router-dom";
import Layout from "./components/layout/layout";
import NotFound from "./components/not-found/NotFound";
import Overview from "./components/overview/Overview";
import MyCourses from "./components/my-courses/MyCourses";
import CourseProgress from "./components/course-progress/CourseProgress";
import StudentDoubts from "./components/student-doubts/StudentDoubts";
import QuizPerformance from "./components/quiz-performance/QuizPerformance";
import LearningAnalytics from "./components/learning-analytics/LearningAnalytics";
import LectureInsights from "./components/lecture-insights/LectureInsights";
import AnnouncementsResources from "./components/announcements-resources/AnnouncementsResources";
import ProfileSettings from "./components/profile-settings/ProfileSettings";

function App() {
  return (
    <></>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route index element={<Overview />} />
      <Route path='overview' element={<Overview />} />
      <Route path='my-courses' element={<MyCourses />} />
      <Route path='course-progress' element={<CourseProgress />} />
      <Route path='student-doubts' element={<StudentDoubts />} />
      <Route path='quiz-performance' element={<QuizPerformance />} />
      <Route path='learning-analytics' element={<LearningAnalytics />} />
      <Route path='lecture-insights' element={<LectureInsights />} />
      <Route path='announcements-resources' element={<AnnouncementsResources />} />
      <Route path='profile-settings' element={<ProfileSettings />} />
      <Route path='*' element={<NotFound />} />
    </Route>,
  ),
);

export {App, router }
