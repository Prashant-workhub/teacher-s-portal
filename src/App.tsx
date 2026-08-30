import { Navigate } from "react-router-dom";
import "./App.css";
import {
  ActivityCenter,
  Announcements,
  Assessments,
  Layout,
  MyCourses,
  NotFound,
  Overview,
  ProfileSettings,
  Route,
  StudentDoubts,
  TeachingAnalytics,
  createBrowserRouter,
  createRoutesFromElements,
} from "./components/imports";
import HeroSection from "./components/landingPage/LandingPage";

function App() {
  return (
    <HeroSection />
  )
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path='/landing' element={<HeroSection />} />

      <Route path='/' element={<Layout />}>
        <Route index element={<Navigate to="overview" replace />} />
        <Route path='overview' element={<Overview />} />
        <Route path='my-courses' element={<MyCourses />} />
        <Route path='student-doubts' element={<StudentDoubts />} />
        <Route path='assessment' element={<Assessments />} />
        <Route path='teaching-analytics' element={<TeachingAnalytics />} />
        <Route path='announcements' element={<Announcements />} />
        <Route path='profile-settings' element={<ProfileSettings />} />
        <Route path='activity' element={<ActivityCenter />} />
      </Route>
      <Route path='*' element={<NotFound />} />
    </>,
  ),
);

export { App, router }
