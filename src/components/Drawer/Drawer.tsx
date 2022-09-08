import { Drawer as MuiDrawer } from '@mui/material';
import { DrawerContent } from './DrawerContent';
import { DrawerProps } from './types';
import './drawer.css';

export const Drawer = ({ drawerWidth }: DrawerProps) => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
        scrollbarWidth: '0px',
        // scrollbarWidth: 'thin',
        // scrollbarColor: 'var(blue) var(red)',
      }}
      open
    >
      <DrawerContent />
    </MuiDrawer>
  );
};
