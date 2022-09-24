import { Box, Container, AppBar, Toolbar } from '@mui/material';
import { Link, Outlet } from 'react-router-dom';

import { AppBarStyled, Brand } from '@/components/AppBar';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayout = ({ children }: PublicLayoutProps) => {
  return (
    <>
      <AppBar color="transparent" variant="outlined">
        <Toolbar variant="dense">
          <Container
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}
          >
            <Brand />
            <Box sx={{ ml: 'auto' }}>
              <Link to="/signin">Login</Link>
            </Box>
          </Container>
        </Toolbar>
      </AppBar>
      {children}
    </>
  );
};
