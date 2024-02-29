'use client'

import { Layout } from 'antd';
import Header from '@/ui/dashboard/topnav'
import SideNav from '@/ui/dashboard/sidenav';

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Layout className='min-h-screen'>
      <Header />
      <Layout>
        <SideNav></SideNav>
        <Layout style={{ padding: '0 24px 24px' }}>
          {children}
        </Layout>
      </Layout>
    </Layout>
  );
};

export default MainLayout;



