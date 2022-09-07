import { Toolbar, List, ListItem, Link as MuiLink } from '@mui/material';
import { AppBarStyled, Brand } from 'components/AppBar';
import { Link } from 'react-router-dom';

// routes
import { ACCOUNT_CREATE_ROUTE } from 'features/accounts';

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
          {[
            '/signin',
            '/admin/signin',
            'customers',
            'customer/new',
            'accounts',
            ACCOUNT_CREATE_ROUTE,
          ].map((route, index) => {
            return (
              <ListItem key={index}>
                <Link to={route}>{route}</Link>
              </ListItem>
            );
          })}
        </List>
      </>
    </>
  );
};
