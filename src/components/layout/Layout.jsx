import { Outlet } from 'react-router';
import Header from '../common/Header';
import Footer from '../common/Footer';
export default function Layout() {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
}
