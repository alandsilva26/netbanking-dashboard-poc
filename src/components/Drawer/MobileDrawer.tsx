import { Drawer as MuiDrawer } from '@mui/material';
import { DrawerContent } from './DrawerContent';
import { DrawerProps } from './types';

interface MobileDrawerProps extends DrawerProps {
  mobileOpen: boolean;
  handleDrawerToggle(): void;
}

/**
 *
 * MObile drawer wrapper. No content only wrapper.
 */
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
        <DrawerContent />
      </MuiDrawer>
    </>
  );
};
