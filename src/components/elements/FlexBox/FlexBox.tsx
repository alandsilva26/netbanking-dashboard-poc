import { Box, BoxProps, styled } from '@mui/material';

export const FlexBox = styled(Box)(({ theme, gap }) => ({
  display: 'flex',
  ...(!gap && { gap: '8px' }),
}));
