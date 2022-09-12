import { memo, useState } from 'react';
import {
  Typography,
  ListItemButton,
  Collapse,
  List,
  ListItem,
  ListItemText,
  Box,
  Button,
} from '@mui/material';
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import { Link } from 'react-router-dom';
import { MdHome } from 'react-icons/md';

import { NavItem, NavItemOption } from 'components/elements';
import { ACCOUNT_CREATE_ROUTE } from 'features/accounts';
import { ExpandStateIcon } from 'components/misc/ExpandStateIcon';

interface NavGroupProps {
  title?: string;
  navItems: NavItemOption[];
  /**
   * Initial open state
   * Default: false
   */
  isOpen?: boolean;
}

/**
 * Group list of navigation items together
 */
export const NavGroup = memo(
  ({ title, navItems = [], isOpen = false }: NavGroupProps) => {
    const [open, setOpen] = useState(isOpen);

    const handleClick = () => {
      setOpen(!open);
    };

    return (
      <Box>
        {title && (
          <ListItemButton
            onClick={handleClick}
            sx={{
              padding: '0.2em 1em',
              borderRadius: '0.5em',
              marginBottom: 1,

              ...(open && {
                background: 'rgb(190 190 190 / 5%)',
              }),

              '&:hover': {
                background: 'rgb(190 190 190 / 10%)',
              },
            }}
          >
            {/* <AppsOutlinedIcon sx={{}} fontSize="small" /> */}
            <Typography
              sx={(theme) => ({
                textTransform: 'uppercase',
                fontWeight: '700',
                letterSpacing: '1px',
                color: theme.palette.grey[700],
                flexGrow: 1,
              })}
              variant="subtitle2"
            >
              {title}
            </Typography>
            <ExpandStateIcon isOpen={open} />
          </ListItemButton>
        )}
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {navItems.map((route: NavItemOption, index) => {
              return <NavItem to={route.to} title={route.title} key={index} />;
            })}
          </List>
        </Collapse>
      </Box>
    );
  }
);
// [
//               '/',
//               '/signin',
//               '/admin/signin',
//               'customers',
//               'customers/new',
//               'customers/edit',
//               'accounts',
//               ACCOUNT_CREATE_ROUTE,
//             ]
