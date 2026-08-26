import { Navigate } from "react-router-dom";
import "./App.css";
import {
  ActivityCenter,
  AnnouncementsResources,
  CourseProgress,
  Layout,
  LearningAnalytics,
  LectureInsights,
  MyCourses,
  NotFound,
  Overview,
  ProfileSettings,
  QuizPerformance,
  Route,
  StudentDoubts,
  createBrowserRouter,
  createRoutesFromElements,
} from "./components/imports";

function App() {
  return (
    <></>
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path='overview' element={<Overview />} />
        <Route path='my-courses' element={<MyCourses />} />
        <Route path='course-progress' element={<CourseProgress />} />
        <Route path='student-doubts' element={<StudentDoubts />} />
        <Route path='quiz-performance' element={<QuizPerformance />} />
        <Route path='learning-analytics' element={<LearningAnalytics />} />
        <Route path='lecture-insights' element={<LectureInsights />} />
        <Route path='announcements-resources' element={<AnnouncementsResources />} />
        <Route path='profile-settings' element={<ProfileSettings />} />
        <Route path='activity' element={<ActivityCenter />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </>,
  ),
);

export { App, router }
