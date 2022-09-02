import { styled } from '@mui/material';

interface MainProps {
  open?: boolean;
  drawerWidth: number;
  children: React.ReactNode;
}

export const Main = styled('div', {
  shouldForwardProp: (prop) => prop === 'children',
  name: 'Main',
})<MainProps>(({ theme, open, drawerWidth }) => ({
  flexGrow: 1,
  transition: theme.transitions.create('margin', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

export {};
