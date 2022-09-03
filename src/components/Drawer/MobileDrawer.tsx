import { Drawer as MuiDrawer } from '@mui/material';
import { DrawerProps } from './types';

interface MobileDrawerProps extends DrawerProps {
  mobileOpen: boolean;
  handleDrawerToggle(): void;
}

export const MobileDrawer = ({
  mobileOpen = false,
  handleDrawerToggle,
  drawerWidth = 250,
}: MobileDrawerProps) => {
  const container =
    window !== undefined ? () => (window as any)().document.body : undefined;

  return (
    <>
      <MuiDrawer
        // container={container}
        variant="temporary"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
        sx={{
          display: { xs: 'block', sm: 'none' },
          '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        }}
      >
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam ullam
        earum quidem iure. Aliquid, rerum nihil veniam iste similique explicabo
        cum nisi ratione, odit suscipit reiciendis, placeat libero quas aperiam?
      </MuiDrawer>
    </>
  );
};
