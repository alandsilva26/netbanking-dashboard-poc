import { ListItem, ListItemProps, styled } from '@mui/material';

/**
 * Styled list item for side drawer
 */
export const NavItemStyled = styled(ListItem)(
  ({ theme, selected = false }) => ({
    // outline: '1px dotted blue',
    marginBottom: 5,
    padding: '0px',
    borderRadius: '0.5em',

    '&:hover': {
      background: 'rgb(190 190 190 / 10%)',
      ...(selected && { background: 'rgb(25 118 210 / 13%)' }),
    },

    '&>a': {
      display: 'block',
      width: '100%',
      height: '100%',
      padding: '0.2em 1em',
      paddingLeft: '32px',
      borderRadius: 'inherit',
      fontSize: '14px',
      textDecoration: 'none',
      color: theme.palette.grey[800],
      ...(selected && { color: theme.palette.primary.dark }),
    },
  })
);
