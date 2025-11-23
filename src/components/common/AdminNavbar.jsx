import { NavLink } from 'react-router';
import { logout } from '../../redux/actions/userActions';

export default function AdminNavbar() {
  return (
    <header className="flex-wrap " style={{ backgroundColor: '#1D2B99' }}>
      <div className="d-flex gap-2">
        <h1 className="text-white text-bold">iSchool</h1>
        <span className="text-white text-bold">Learn and Implements</span>
      </div>
      <div className="d-flex align-items-center  ">
        <ul className="nav align-items-center ">
          <li className="nav-item">
            <NavLink
              to="/"
              className="nav-link active text-bold"
              aria-current="page"
              href="#"
            >
              Home
            </NavLink>
          </li>
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
                MY PROFILE{' '}
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
              <button type="button" className="btn btn-light text-bold px-5">
                LOGOUT
              </button>
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}
