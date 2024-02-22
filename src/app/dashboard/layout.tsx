import React from 'react';
import TopNav from '@/ui/dashboard/topnav'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className='h-screen'>
      <TopNav/>
      {children}
    </div>
  );
};

export default MainLayout;



