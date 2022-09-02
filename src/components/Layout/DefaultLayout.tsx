import { Box, Toolbar } from '@mui/material';
import { useState } from 'react';
import { Main } from '../elements/Main/Main';
import { Header } from './Header';
import { SideDrawer } from './SideDrawer';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const drawerWidth = 250;
  const [open, setOpen] = useState<boolean>(true);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <Box sx={{ display: 'flex' }}>{children}</Box>
    </>
  );
};
