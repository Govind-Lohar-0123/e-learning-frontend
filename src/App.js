import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from 'react-router-dom';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch } from 'react-redux';
import Layout from './components/layout/Layout';
import Home from './pages/Home/Home';
import AllCourses from './pages/course/AllCourses';
import CourseDetail from './pages/course/CourseDetails';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import MyProfileLayout from './components/layout/MyProfileLayout';
import AdminLayout from './components/layout/AdminLayout';
import AdminDashBoard from './pages/admin/AdminDashBoard';
import Courses from './pages/admin/Courses/Courses';
import EditCourse from './pages/admin/Courses/EditCourse';
import MyCourses from './pages/profile/MyCourses';
import Profile from './pages/profile/Profile';
import { getUser } from './redux/actions/userActions';
import PageNotFound from './pages/notfound/NotFound';
import AddCourse from './pages/admin/Courses/AddCourse';
import { STORAGE_KEYS } from './const';

function App() {
  const dispatch = useDispatch();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole,setUserRole]=useState(null);
   

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN); // getting token from local storage

    if (token) {
      setIsLoggedIn(true);
      dispatch(getUser());
      const role= localStorage.getItem(STORAGE_KEYS.USER_ROLE); // getting role from localstorage
      setUserRole(role)
    }
  }, []);

  const router = createBrowserRouter([
    {
      path: '/',
      element: isLoggedIn ? <Layout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Home /> },
        { path: 'courses', element: <AllCourses /> },
        { path: 'courses/:course_id', element: <CourseDetail /> },
      ],
    },
    { path: 'login', element: !isLoggedIn ? <Login /> : <Navigate to="/" /> },
    {
      path: 'register',
      element: !isLoggedIn ? <Register /> : <Navigate to="/" />,
    },
    {
      path: '/profile',
      element: isLoggedIn ? <MyProfileLayout /> : <Navigate to="/login" />,
      children: [
        { index: true, element: <Profile /> },
        { path: 'mycourses', element: <MyCourses /> },
      ],
    },
    {
      path: '/admin',
      element:
        isLoggedIn && userRole === 'Admin' ? (
          <AdminLayout />
        ) : (
          <Navigate to="/login" />
        ),
      children: [
        { index: true, element: <AdminDashBoard /> },
        { path: 'courses', element: <Courses /> },
        { path: 'courses/edit/:course_id', element: <EditCourse /> },
        { path: 'courses/add', element: <AddCourse /> },
      ],
    },
    {
      path: '*',
      element: <PageNotFound />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
