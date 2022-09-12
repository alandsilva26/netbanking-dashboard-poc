import { Box, Drawer as MuiDrawer } from '@mui/material';
import { DrawerContent } from './DrawerContent';
import { DrawerProps } from './types';
import './drawer.css';

export const Drawer = ({ drawerWidth }: DrawerProps) => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': {
          boxSizing: 'border-box',
          width: drawerWidth,
          height: '100vh',
        },
        // scrollbarWidth: '0px',
        // scrollbarWidth: 'thin',
        // scrollbarColor: 'var(blue) var(red)',
        border: {
          sm: '1px solid red',
        },
      }}
      open
    >
      <Box>
        <DrawerContent />
      </Box>
    </MuiDrawer>
  );
};
