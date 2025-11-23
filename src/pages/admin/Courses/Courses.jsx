import AdminCourseCard from '../../../components/cards/AdminCourseCard';
import { useState, useEffect } from 'react';
import { getAllCourses } from '../../../redux/actions/courseAction';
import { NavLink } from 'react-router';
export default function Courses() {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState({ status: true, courses: [] });
  useEffect(() => {
    getAllCourses(search, setCourses);
  }, [setCourses, search]);

  return (
    <div className="w-100 ">
      <div style={{ height: '85vh', overflow: 'auto' }}>
        <div className="d-flex align-items-center flex-wrap">
          {courses?.status ? (
            <div className="m-2 my-4 mb-5  m-auto p-2 shadow " id="search">
              <input
                onChange={(e) => setSearch(e.target.value)}
                className="form-control m-2 p-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
          ) : (
            ''
          )}
          <NavLink
            to="/admin/courses/add"
            className="nav-link active mx-4"
            aria-current="page"
            href="#"
          >
            <button type="button" className="btn btn-primary text-bold px-5">
              ADD NEW COURSE
            </button>
          </NavLink>
        </div>
        {courses?.status ? (
          <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
            {courses?.courses.map((course, idx) => {
              return <AdminCourseCard key={idx} course={course} />;
            })}
          </div>
        ) : (
          <div className="text-center">
            <h2>NO COURSE EXIST</h2>
          </div>
        )}
      </div>
    </div>
  );
}
