import { Drawer as MuiDrawer } from '@mui/material';
import { DrawerProps } from './types';

export const Drawer = ({ drawerWidth = 250 }: DrawerProps) => {
  return (
    <MuiDrawer
      variant="permanent"
      sx={{
        display: { xs: 'none', sm: 'block' },
        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
      }}
      open
    >
      MUI Drawer | Lorem ipsum dolor sit amet consectetur adipisicing elit.
      Cupiditate tenetur obcaecati beatae officia, repellendus quisquam vel
      dignissimos velit aperiam placeat nobis, nam maxime ad dolore molestiae,
      dolorem reiciendis voluptatum consequatur!
    </MuiDrawer>
  );
};
