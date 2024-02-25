'use client'

import React, { createContext, useContext, useState } from 'react';
import { Layout } from 'antd';
import Header from '@/ui/dashboard/topnav'
import SideNav from '@/ui/dashboard/sidenav';

const GlobalContext = createContext({});

const MainLayout = ({ children }: { children: React.ReactNode }) => {

  return (
    <Layout className='h-screen'>
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



