import { Box, styled } from '@mui/material';
import { cyan } from '@mui/material/colors';

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
    maxWidth: `calc(100vw - ${drawerWidth}px)`,
  },
  transition: theme.transitions.create(['margin', 'width', 'background'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),

  // custom
  // position: 'relative',
  '::before': {
    content: '""',
    width: '100%',
    height: '250px',
    background: cyan[200],
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: '-1',
  },
}));
