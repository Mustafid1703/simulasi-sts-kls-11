import React from 'react';
import { Outlet } from 'react-router';
import Sidebar from '../components/Sidebar';

function DashboardLayout() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flex: 1 }}>
        
        <Outlet />
      </div>
    </div>
  );
}

export default DashboardLayout;