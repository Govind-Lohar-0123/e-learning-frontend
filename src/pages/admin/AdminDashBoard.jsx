import { useEffect, useState } from 'react';
import { getCoursesCount } from '../../redux/actions/courseAction';
import { getUsersCount } from '../../redux/actions/userActions';
export default function AdminDashBoard() {
  const [usersCount, setUsersCount] = useState(0);
  const [coursesCount, setCoursesCount] = useState(0);

  useEffect(() => {
    getCoursesCount(setCoursesCount);
    getUsersCount(setUsersCount);
  }, []);

  return (
    <div className="w-100 ">
      <div className="d-flex align-item-center w-100 h-100">
        <div className="d-flex align-item-center text-center w-75 m-auto gap-3 justify-content-space-between">
          <div
            className="card text-white bg-danger mb-3"
            style={{ width: '30rem', height: '300px' }}
          >
            <div
              className="card-header text-bold p-5"
              style={{ fontSize: '2rem' }}
            >
              TOTAL USERS
            </div>
            <div className="card-body">
              <h1 className="card-title text-bold" style={{ fontSize: '5rem' }}>
                {usersCount}
              </h1>
            </div>
          </div>
          <div
            className="card text-white bg-primary mb-3"
            style={{ width: '30rem', height: '300px' }}
          >
            <div
              className="card-header text-bold p-5"
              style={{ fontSize: '2rem' }}
            >
              TOTAL COURSES
            </div>
            <div className="card-body">
              <h1 className="card-title text-bold" style={{ fontSize: '5rem' }}>
                {coursesCount}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
