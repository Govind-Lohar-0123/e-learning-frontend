import { NavLink } from 'react-router';

export default function AdminLeftSide() {
  return (
    <div className="bg-secondary p-3  h-100" style={{ maxWidth: '300px' }}>
      <div className="m-2">
        <div className="w-100  m-auto " style={{ height: '250px' }}>
          <img
            style={{ borderRadius: '100%' }}
            src={`${process.env.PUBLIC_URL}/img/bg1.png`}
            className="w-100 h-75 m-auto d-block"
            alt=""
          />
        </div>
        <div className="mt-5">
          <ul className="list-group d-flex flex-dir-col align-items-space-between gap-3">
            <NavLink to="/admin" className="list-group-item bg-primary">
              Admin DashBoard
            </NavLink>
            <NavLink to="courses" className="list-group-item bg-primary">
              Course Management
            </NavLink>
          </ul>
        </div>
      </div>
    </div>
  );
}
