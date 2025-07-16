import React from 'react';
import Header from './Header';
import Footer from './Footer';
import NotificationSystem from './NotificationSystem';

const Layout = ({ children }) => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="min-h-screen">
        {children}
      </main>
      <Footer />
      <NotificationSystem />
    </div>
  );
};

export default Layout;