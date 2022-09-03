import { Drawer as MuiDrawer } from '@mui/material';
import { DrawerContent } from './DrawerContent';
import { DrawerProps } from './types';

export const Drawer = ({ drawerWidth }: DrawerProps) => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      <DrawerContent />
    </MuiDrawer>
  );
};
