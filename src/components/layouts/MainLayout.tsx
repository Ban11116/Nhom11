import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../common/Footer';
import Header from '../common/Header';

const MainLayout = () => {
  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Header />
      
      <main className="flex-grow min-h-[calc(100vh-88px)] pt-[600px]">
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};


export default MainLayout;
