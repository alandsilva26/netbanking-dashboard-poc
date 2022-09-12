import {
  Box,
  Button,
  Toolbar,
  List,
  ListItem,
  Typography,
  Link as MuiLink,
} from '@mui/material';
import { AppBarStyled, Brand } from 'components/AppBar';
import { Link } from 'react-router-dom';
import { FlexBox, NavItemOption } from 'components/elements';

// routes
import { ACCOUNT_CREATE_ROUTE } from 'features/accounts';
import { NavItemStyled } from '../mui/styled/NavItemStyled';
import { NavGroup } from './NavGroup';
import { useAuth } from 'providers';
import { CHANGE_PASSWORD_ROUTE } from 'features/auth';

interface NavGroupOptions {
  title: string;
  isOpen?: boolean;
  items: NavItemOption[];
}
const CUSTOMER_GROUP_OPTIONS: NavGroupOptions[] = [
  {
    title: 'General',
    isOpen: true,
    items: [
      {
        to: '/',
        title: 'Dashboard',
      },
      {
        to: '/funds/transfer',
        title: 'Transfer Funds',
      },
      {
        to: '/statements/mini',
        title: 'Mini Statement',
      },
      {
        to: '/statements',
        title: 'Custom Statement',
      },
    ],
  },

  {
    title: 'Accounts',
    isOpen: true,
    items: [
      {
        to: '/accounts',
        title: 'All Accounts',
      },
    ],
  },
  {
    title: 'Settings',
    isOpen: true,
    items: [
      {
        to: CHANGE_PASSWORD_ROUTE,
        title: 'Change Password',
      },
      {
        to: '/logout',
        title: 'Logout',
      },
    ],
  },
];

const MANAGER_GROUP_OPTIONS: NavGroupOptions[] = [
  {
    title: 'General',
    isOpen: true,
    items: [
      {
        to: '/',
        title: 'Dashboard',
      },
      {
        to: '/funds/transfer',
        title: 'Transfer Funds',
      },
      {
        to: '/funds/deposit',
        title: 'Deposit',
      },
      {
        to: '/funds/Withdraw',
        title: 'Withdrawal',
      },
    ],
  },
  {
    title: 'Accounts',
    isOpen: true,
    items: [
      {
        to: '/accounts',
        title: 'All Accounts',
      },
      {
        to: '/accounts/new',
        title: 'New Account',
      },
      {
        to: '/accounts/edit',
        title: 'Edit Account ',
      },
      {
        to: '/accounts/delete',
        title: 'Delete Account',
      },
    ],
  },
  {
    title: 'Customers',
    isOpen: true,
    items: [
      {
        to: '/customers',
        title: 'All Customers',
      },
      {
        to: '/customers/new',
        title: 'New Customer',
      },
      {
        to: '/customers/edit',
        title: 'Edit Customer',
      },
    ],
  },
  {
    title: 'Settings',
    isOpen: true,
    items: [
      {
        to: '/logout',
        title: 'Logout',
      },
    ],
  },
];

/**
 * Common drawer content for desktop and mobile drawers.
 * Will hold the entire drawer content.
 */
export const DrawerContent = () => {
  const auth = useAuth();

  const getNavGroups = (): JSX.Element[] => {
    if (auth.user) {
      const options = auth.user.isManager()
        ? MANAGER_GROUP_OPTIONS
        : CUSTOMER_GROUP_OPTIONS;

      return options.map((navGroup, index) => {
        return (
          <NavGroup
            key={index}
            title={navGroup.title}
            isOpen={navGroup.isOpen}
            navItems={navGroup.items}
          />
        );
      });
    }
    return [];
  };

  return (
    <div>
      {/* <AppBarStyled color="transparent" position="relative"> */}
      <Toolbar
        variant="dense"
        sx={{ px: 1, borderBottom: '1px solid rgba(0, 0, 0, 0.12)' }}
      >
        <Brand />
      </Toolbar>
      {/* </AppBarStyled> */}
      <FlexBox
        className="drawer-custom"
        sx={{
          flexDirection: 'column',
          // height: 'calc(100vh - 49px)',
          padding: 2,
        }}
      >
        <Box sx={{ display: 'none' }}>
          <Typography
            sx={{
              paddingLeft: 4,
              textTransform: 'uppercase',
              fontWeight: '600',
              fontColor: 'grey',
            }}
            variant="subtitle2"
            gutterBottom
          >
            Group Title
          </Typography>
          <List sx={{ p: 0 }}>
            {[
              '/signin',
              '/admin/signin',
              'customers',
              'customers/new',
              'customers/edit',
              'accounts',
              ACCOUNT_CREATE_ROUTE,
            ].map((route, index) => {
              return (
                <NavItemStyled key={index} selected={true}>
                  <Link to={route}>{route}</Link>
                </NavItemStyled>
              );
            })}
          </List>
        </Box>

        {getNavGroups()}
      </FlexBox>
    </div>
  );
};
