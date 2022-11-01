import React from 'react';
import Header from './Header';
import Footer from './Footer';
import '../styles/components/Layout.css';
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="Main">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout;
