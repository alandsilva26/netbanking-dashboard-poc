import { useState } from 'react';
import {
  Box,
  AppBar as MuiAppBar,
  AppBarProps as MuiAppBarProps,
  ToolbarProps,
  Toolbar,
  Button,
  styled,
  Avatar,
  Container,
  Menu,
  IconButton,
  MenuItem,
  Divider,
} from '@mui/material';

import { useAuth } from 'providers';

// static
import lemonImage from 'assets/lemon.png';
import { FlexBox } from 'components/elements';
import { ProfileIcon } from 'components/misc/ProfileIcon';
import { CenteredContent } from 'components/mui/styled';

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
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const menuOpen = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBarStyled color="transparent" position="relative">
      <Toolbar variant="dense" disableGutters>
        <Container>
          <FlexBox sx={{ justifyContent: 'space-between' }}>
            <Button
              onClick={handleMenuClick}
              sx={{
                display: { all: 'block' },
                visibility: {
                  all: 'visible',
                  sm: 'hidden',
                  md: 'hidden',
                },
              }}
            >
              Open Sidebar
            </Button>

            <div>
              <CenteredContent>
                <IconButton
                  aria-controls={menuOpen ? 'demo-positioned-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={menuOpen ? 'true' : undefined}
                  onClick={handleClick}
                  sx={{ padding: 0 }}
                >
                  <ProfileIcon />
                </IconButton>
                <Menu
                  id="demo-positioned-menu"
                  aria-labelledby="demo-positioned-button"
                  anchorEl={anchorEl}
                  open={menuOpen}
                  onClose={handleClose}
                  onClick={handleClose}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'left',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'left',
                  }}
                  sx={{
                    '.MuiList-root': {
                      minWidth: '200px',
                      padding: 0,
                    },
                  }}
                >
                  <MenuItem>{auth.user?.name ?? auth.user?.email}</MenuItem>
                  <Divider sx={{ margin: '0 !important' }} />
                  <MenuItem>Logout</MenuItem>
                </Menu>
              </CenteredContent>
            </div>
          </FlexBox>
        </Container>
      </Toolbar>
    </AppBarStyled>
  );
};
