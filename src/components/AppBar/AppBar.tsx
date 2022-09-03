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

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})(({ theme }) => ({
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  padding: '0 10px',
  marginBottom: theme.spacing(1),
}));

interface HeaderProps extends ToolbarProps {
  open: boolean;
  drawerWidth?: number;
  handleMenuClick: () => void;
}

export const AppBar = ({
  open,
  drawerWidth = 250,
  handleMenuClick,
}: HeaderProps) => {
  return (
    <AppBarStyled color="transparent" position="relative">
      <Toolbar variant="dense" disableGutters>
        <Button
          onClick={handleMenuClick}
          sx={{ display: { all: 'none', sm: 'block', md: 'none' } }}
        >
          Open Sidebar
        </Button>
      </Toolbar>
    </AppBarStyled>
  );
};
