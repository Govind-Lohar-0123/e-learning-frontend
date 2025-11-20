import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home/Home";
import AllCourses from "./pages/course/AllCourses";
import CourseDetail from "./pages/course/CourseDetails";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import MyProfileLayout from "./components/layout/MyProfileLayout";
import AdminLayout from "./components/layout/AdminLayout";
import AdminDashBoard from "./pages/admin/AdminDashBoard";
import Courses from "./pages/admin/Courses/Courses";
import EditCourse from "./pages/admin/Courses/EditCourse";
import MyCourses from "./pages/profile/MyCourses";
import Profile from "./pages/profile/Profile";
import { getCookie } from "./assets/cookieActions";
import { getUser } from "./redux/actions/userActions";
import PageNotFound from "./pages/notfound/NotFound";
import AddCourse from "./pages/admin/Courses/AddCourse";


function App() {

  const dispatch = useDispatch();
  const userData = useSelector((state) => state.userData);

  const token = getCookie("accessToken");
  const isLogin = (token!="undefined" && token!=null && token!="") ? true : false;
  const role = userData?.role;
  
  
  useEffect(() => {
    if (isLogin) {
      dispatch(getUser());
    }
  }, [dispatch, isLogin]);

  const router = createBrowserRouter([
    {
      path: "/",
      element: isLogin ? <Layout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Home /> },
        { path: "courses", element: <AllCourses /> },
        { path: "courses/:course_id", element: <CourseDetail /> },
      ],
    },

    // authentication
    { path: "login", element: !isLogin ? <Login /> : <Navigate to="/" /> },
    { path: "register", element: !isLogin ? <Register /> : <Navigate to="/" /> },

    // User profile routes
    {
      path: "/profile",
      element: isLogin ? <MyProfileLayout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Profile /> },
        { path: "mycourses", element: <MyCourses /> },
        
      ],
    },

    // Admin routes
    {
      path: "/admin",
      element: isLogin && role === "Admin" ? <AdminLayout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <AdminDashBoard /> },
        { path: "courses", element: <Courses /> },
        { path: "courses/edit/:course_id", element: <EditCourse /> },
        { path: "courses/add", element: <AddCourse /> },
        
      ],
    },
    {
      path:"*",
      element:<PageNotFound/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
