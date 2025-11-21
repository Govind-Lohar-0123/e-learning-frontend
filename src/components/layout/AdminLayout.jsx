import { Outlet } from 'react-router';
import AdminLeftSide from '../common/AdminLeftSide';
import AdminHeader from '../common/AdminHeader';

export default function AdminLayout() {
  return (
    <>
      <AdminHeader />
      <div>
        <div className="d-flex w-100 " style={{ height: '85vh' }}>
          <AdminLeftSide />
          <Outlet />
        </div>
      </div>
    </>
  );
}
