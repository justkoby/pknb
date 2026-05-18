import { Outlet } from 'react-router-dom';
import Nav from './Nav';
import Footer from './Footer';
import WhatsAppFloat from './WhatsAppFloat';

export default function Layout() {
  return (
    <>
      <Nav />
      <Outlet />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}
