import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import AllCourses from "./pages/course/AllCourses";
import AllPremiumCourses from "./pages/premium-courses/AllPremiumCourses";
import CourseDetail from "./pages/course/CourseDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MyProfileLayout from "../src/components/layout/MyProfileLayout"
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import Courses from "./pages/admin/Courses/Courses";
import EditCourse from "./pages/admin/Courses/EditCourse";
import MyCourses from "./pages/profile/MyCourses";
import Profile from "./pages/profile/Profile";
import Feedback from "./pages/profile/Feedback";
import { getCookie } from "./assets/cookieActions";

var isToken = getCookie("accessToken");
var roleId = getCookie("role");
var isLogin = (isToken) ? true : false;

const router = createBrowserRouter([
  {
    path: "/",
    element:((isLogin) ? <Layout /> : <Navigate to="/login" />),
    children: [
      { index: true, element: <Home /> },
      { path: "all-courses", element: <AllCourses /> },
      { path: "premium/courses", element: <AllPremiumCourses /> },
      { path: "course/details/:course_id", element: <CourseDetail /> },

    ],
  }
  ,
  // authentication routes

  { path: "login", element:((!isLogin) ? <Login /> : <Navigate to="/" />) },
  { path: "register", element: ((!isLogin) ? <Register /> : <Navigate to="/" />) },
  // My profile routes

  // My profile routes

  {
    path: "/myprofile",
    element:((isLogin) ? <MyProfileLayout /> : <Navigate to="/login" />),
    children: [
      { index: true, element: <Profile /> },
      { path: "mycourses", element: <MyCourses /> },
      { path: "feedback", element: <Feedback /> },
    ],
  },

  // Admin Routes
  {
    path: "/admin",
    element: ((isLogin && roleId==2) ? <AdminLayout /> : <Navigate to="/login" />),
    children: [
      { index: true, element: <AdminDashBoard /> },
      { path: "courses/manage", element: <Courses /> },
      { path: "edit/course/:course_id", element: <EditCourse /> },
    ],
  },
])
function App() {
  return <RouterProvider router={router} />;
}

export default App;