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

const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open, drawerWidth }) => ({
  // transition: theme.transitions.create(['margin', 'width'], {
  //   easing: theme.transitions.easing.sharp,
  //   duration: theme.transitions.duration.leavingScreen,
  // }),
  // width: `calc(100vw - ${drawerWidth}px)`,
  background: 'white',
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
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
  drawerWidth = 250,
  variant = 'dense',
  handleMenuClick,
}: HeaderProps) => {
  return (
    <>
      <AppBarStyled
        color="transparent"
        variant="outlined"
        position="relative"
        drawerWidth={drawerWidth}
        open={open}
      >
        <Toolbar variant={variant}>
          <Button onClick={handleMenuClick}>Test</Button>Navbar
        </Toolbar>
      </AppBarStyled>
    </>
  );
};
