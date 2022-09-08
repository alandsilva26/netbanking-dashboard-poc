import {
  Box,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  ToolbarProps,
  Toolbar,
  Button,
  styled,
  Avatar,
} from '@mui/material';

import { useAuth } from 'providers';

// static
import lemonImage from 'assets/lemon.png';
import { FlexBox } from 'components/elements';
import { ProfileIcon } from 'components/misc/ProfileIcon';

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
  drawerWidth: number;
}

export const AppBarStyled = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open' && prop !== 'drawerWidth',
})(({ theme }) => ({
  borderBottom: '1px solid rgba(0, 0, 0, 0.12)',
  padding: '0 10px',
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
  const auth = useAuth();

  return (
    <AppBarStyled color="transparent" position="relative">
      <Toolbar variant="dense" disableGutters>
        <Button
          onClick={handleMenuClick}
          sx={{ display: { all: 'none', sm: 'block', md: 'none' } }}
        >
          Open Sidebar
        </Button>

        <FlexBox sx={{ marginLeft: 'auto' }}>
          <FlexBox sx={{ alignItems: 'center' }}>
            <ProfileIcon />
            <Box>{auth.user?.email}</Box>
          </FlexBox>
          <Button
            variant="text"
            color="error"
            size="small"
            onClick={auth.logout}
          >
            Logout
          </Button>
        </FlexBox>
      </Toolbar>
    </AppBarStyled>
  );
};
