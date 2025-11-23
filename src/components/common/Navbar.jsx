import { NavLink } from 'react-router';
import { logout } from '../../redux/actions/userActions';
import { useEffect, useState } from 'react';
import { STORAGE_KEYS } from '../../const';

export default function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userRole, setUserRole] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem(STORAGE_KEYS.ACCESS_TOKEN); // getting token from local storage

    if (token) {
      setIsLoggedIn(true);
      const role = localStorage.getItem(STORAGE_KEYS.USER_ROLE); // getting role from localstorage
      setUserRole(role);
    }
  }, []);

  return (
    <>
      <header className="flex-wrap">
        <div className="d-flex gap-2">
          <h1 className="text-white text-bold">iSchool</h1>
          <span className="text-white text-bold">Learn and Implements</span>
        </div>
        <div className="d-flex align-items-center flex-wrap  text-center">
          <div className="mx-auto ">
            <nav>
              <ul className="nav">
                <li className="nav-item">
                  <NavLink
                    to="/"
                    className="nav-link active text-bold "
                    aria-current="page"
                    href="#"
                  >
                    Home
                  </NavLink>
                </li>
                <li className="nav-item">
                  <NavLink
                    to="/courses"
                    className="nav-link text-bold"
                    href="#"
                  >
                    Courses
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div className="">
            <ul className="nav ">
              {!isLoggedIn ? (
                <>
                  <li className="nav-item login mx-auto">
                    <NavLink
                      to="/login"
                      className="nav-link active "
                      aria-current="page"
                      href="#"
                    >
                      <button
                        type="button"
                        className="btn btn-light text-bold px-5"
                      >
                        LOGIN
                      </button>
                    </NavLink>
                  </li>

                  <li className="nav-item login ">
                    <NavLink
                      to="/register"
                      className="nav-link active"
                      aria-current="page"
                      href="#"
                    >
                      <button
                        type="button"
                        className="btn btn-light text-bold px-5"
                      >
                        REGISTER
                      </button>
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {isLoggedIn && userRole === 'Admin' ? (
                    <li className="nav-item login ">
                      <NavLink
                        to="/admin"
                        className="nav-link active "
                        aria-current="page"
                        href="#"
                      >
                        <button
                          type="button"
                          className="btn  bg-primary text-white text-bold px-5"
                        >
                          ADMIN
                        </button>
                      </NavLink>
                    </li>
                  ) : null}
                  <li className="nav-item login ">
                    <NavLink
                      to="/profile"
                      className="nav-link active "
                      aria-current="page"
                      href="#"
                    >
                      <button
                        type="button"
                        className="btn  bg-primary text-white text-bold px-5"
                      >
                        MY PROFILE
                      </button>
                    </NavLink>
                  </li>

                  <li className="nav-item login ">
                    <NavLink
                      className="nav-link active"
                      onClick={logout}
                      aria-current="page"
                      href="#"
                    >
                      <button
                        type="button"
                        className="btn btn-light text-bold px-5"
                      >
                        LOGOUT
                      </button>
                    </NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </header>
    </>
  );
}
