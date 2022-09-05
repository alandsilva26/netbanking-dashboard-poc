import { Toolbar, List, ListItem } from '@mui/material';
import { AppBarStyled, Brand } from 'components/AppBar';
import { Link } from 'react-router-dom';

/**
 * Common drawer content for desktop and mobile drawers.
 * Will hold the entire drawer content.
 */
export const DrawerContent = () => {
  return (
    <>
      <AppBarStyled color="transparent" position="relative">
        <Toolbar
          variant="dense"
          // sx={{ borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
        >
          <Brand />
        </Toolbar>
      </AppBarStyled>
      <>
        <List>
          {['/admin/signin', '/signin', 'customer/new', 'customers'].map(
            (route, index) => {
              return (
                <ListItem key={index}>
                  <Link to={route}>{route}</Link>
                </ListItem>
              );
            }
          )}
        </List>
      </>
    </>
  );
};
