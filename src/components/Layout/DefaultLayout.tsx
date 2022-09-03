import { Box, Toolbar } from '@mui/material';
import { Drawer, MobileDrawer } from 'components/Drawer';
import { useState } from 'react';
import { Main } from '../elements/Main/Main';
import { Header } from './AppBar';

interface DefaultLayoutProps {
  children: React.ReactNode;
}

export const DefaultLayout = ({ children }: DefaultLayoutProps) => {
  const drawerWidth = 250;
  const [open, setOpen] = useState<boolean>(false);

  const handleDrawer = () => {
    setOpen((prev) => !prev);
  };

  return (
    <>
      <MobileDrawer mobileOpen={open} handleDrawerToggle={handleDrawer} />
      <Drawer />
      <Box
        sx={{
          width: { sm: `calc(100vw - ${drawerWidth}px)` },
          marginLeft: { sm: `${drawerWidth}px` },
        }}
      >
        <Header open={open} handleMenuClick={handleDrawer} />
        <Box sx={{ display: 'flex' }}>{children}</Box>
      </Box>
    </>
  );
};
