import { NavLink } from 'react-router';
import CourseCard from '../../components/cards/CourseCard';
import { useEffect, useState } from 'react';
import { getCoursesByLimit } from '../../redux/actions/courseAction';
import { getMyAllCourses } from '../../redux/actions/myCourseAction';
import { useSelector } from 'react-redux';

export default function Courses() {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState({ status: false, courses: [] });
  const userData = useSelector((state) => state.userData);
  const [myCourses, setMyCourses] = useState({ status: false, myCourses: [] });

  useEffect(() => {
    getCoursesByLimit(5, search, setCourses);
  }, [search, userData]);

  useEffect(() => {
    if (Object.keys(userData).length > 0) getMyAllCourses(search, setMyCourses);
  }, [userData]);

  return (
    <div className="p-5">
      {courses?.status && myCourses?.status ? (
        <div>
          <div className="m-2 my-4 mb-5 m-auto " id="search">
            <input
              className="form-control me-2 "
              defaultValue={search}
              onChange={(e) => setSearch(e.target.value)}
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          </div>
          <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
            {courses?.courses.map((course, idx) => {
              let isAdd = myCourses.myCourses.some(
                (myCourse, idx) => myCourse.id === course.id
              );

              return <CourseCard key={idx} isAdd={isAdd} course={course} />;
            })}
          </div>
          <div>
            <NavLink to="/courses" style={{ textDecoration: 'none' }}>
              <button
                type="button"
                className="btn btn-primary text-bold mx-auto d-block w-50 my-5"
              >
                View All Courses
              </button>
            </NavLink>
          </div>
        </div>
      ) : null}
    </div>
  );
}
