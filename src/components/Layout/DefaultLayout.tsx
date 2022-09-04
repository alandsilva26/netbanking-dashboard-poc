import { useState } from 'react';
import { Box } from '@mui/material';
import { Link } from 'react-router-dom';

// custom components
import { Drawer, MobileDrawer } from 'components/Drawer';
import { MainContent } from 'components/mui/styled';
import { AppBar } from 'components/AppBar';

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
      <Drawer drawerWidth={250} />
      <MainContent drawerWidth={drawerWidth}>
        <AppBar open={open} handleMenuClick={handleDrawer} />
        <Box sx={{ flexGrow: 1 }}>{children}</Box>
        <Box>
          <Link to="/admin/signin">Admin Panel</Link>
        </Box>
      </MainContent>
    </>
  );
};
