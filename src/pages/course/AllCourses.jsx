import Background from '../../components/common/Background';
import CourseCard from '../../components/cards/CourseCard';
import { getAllCourses } from '../../redux/actions/courseAction';
import { useState, useEffect } from 'react';
import { CircularProgress } from '@mui/material';
import { getMyAllCourses } from '../../redux/actions/myCourseAction';
import { useSelector } from 'react-redux';
export default function AllCourses() {
  const [search, setSearch] = useState('');
  const [courses, setCourses] = useState({ status: false, courses: [] });
  const userData = useSelector((state) => state.userData);
  const [myCourses, setMyCourses] = useState({ status: false, myCourses: [] });
  useEffect(() => {
    getAllCourses(search, setCourses);
  }, [search, setCourses]);

  useEffect(() => {
    if (Object.keys(userData).length > 0) getMyAllCourses(search, setMyCourses);
  }, [userData]);

  return (
    <div>
      {courses?.status && myCourses?.status ? (
        <div className="p-5">
          <div>
            <Background img={'bg2'} />
          </div>
          <div>
            <div className="m-2 my-4 mb-5  m-auto" id="search">
              <input
                className="form-control me-2"
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
            </div>
            <div className="d-flex align-items-center justify-content-center flex-wrap mt-2 gap-4">
              {courses?.courses.map((course, idx) => {
                let isAdd = myCourses.myCourses.some(
                  (myCourse, idx) => myCourse.id == course.id
                );
                return <CourseCard key={idx} isAdd={isAdd} course={course} />;
              })}
            </div>
            <div></div>
          </div>
        </div>
      ) : (
        <div>
          <CircularProgress />
        </div>
      )}
    </div>
  );
}
