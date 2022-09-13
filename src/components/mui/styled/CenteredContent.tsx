import { Box, BoxProps, styled } from '@mui/material';

/**
 * Flexbox item that centers from both directions
 */
export const CenteredContent = styled(Box)(({ theme, gap, alignItems }) => ({
  width: '100%',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  ...(!gap && { gap: '8px' }),
}));
