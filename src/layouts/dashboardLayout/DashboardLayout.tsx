import Box from '@mui/material/Box';
import React from 'react';
import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';
import { isUserLoggedIn } from 'slices/user/user.selectors';

export default function DashboardLayout({ children }: { children?: React.ReactNode }) {
  const isLoggedIn = !!useSelector(isUserLoggedIn);

  if (!isLoggedIn) return <Navigate to={"/login"} />
  
  return (
    <Box sx={{ display: 'flex', height: '100vh', alignItems: 'center' }}>
      {children}
      <Outlet />
    </Box>
  );
}
