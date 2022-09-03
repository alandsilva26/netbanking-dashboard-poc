import { Box, styled } from '@mui/material';

/**
 * Component to display main page content. Use this when you have a sidebar
 * to display
 *
 *
 * @param drawerWidth Used to calculate width and margin
 */
export const MainContent = styled(Box, {
  shouldForwardProp: (props) => props !== 'drawerWidth',
})<{
  drawerWidth: number;
}>(({ theme, drawerWidth }) => ({
  height: '100%',
  minHeight: '100vh',
  display: 'flex',
  flexDirection: 'column',
  [theme.breakpoints.up('sm')]: {
    marginLeft: `${drawerWidth}px`,
    width: `calc(100vw - ${drawerWidth}px)`,
  },
  transition: theme.transitions.create(['margin', 'width', 'background'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
}));
