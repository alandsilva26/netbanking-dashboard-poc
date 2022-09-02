import {
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  ToolbarProps,
  Toolbar,
  Button,
  styled,
} from '@mui/material';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  // transition: theme.transitions.create(['margin', 'width'], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  position: 'relative',
  border: 'none',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  background: 'green',
  // marginLeft: `-${drawerWidth}px`,
  // width: '100%',
  // ...(open && {
  //   background: 'red',
  //   width: `calc(100% - ${drawerWidth}px)`,
  //   // marginLeft: `${drawerWidth}px`,
  //   // marginLeft: `${drawerWidth}px`,
  //   transition: theme.transitions.create(['margin', 'width'], {
  //     easing: theme.transitions.easing.easeOut,
  //     duration: theme.transitions.duration.enteringScreen,
  //   }),
  // }),
}));

interface HeaderProps extends ToolbarProps {
  open: boolean;
  drawerWidth?: number;
  handleMenuClick: () => void;
}

export const Header = ({
  open,
  drawerWidth = 0,
  variant = 'dense',
  handleMenuClick,
}: HeaderProps) => {
  return (
    <>
      <AppBar
        color="transparent"
        variant="outlined"
        drawerWidth={drawerWidth}
        open={open}
      >
        <Toolbar variant={variant}>
          <Button onClick={handleMenuClick}>Test</Button>Navbar
        </Toolbar>
      </AppBar>
    </>
  );
};
