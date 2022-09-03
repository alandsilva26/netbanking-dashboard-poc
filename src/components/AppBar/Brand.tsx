import { Box, Typography } from '@mui/material';
import { AppIcon } from 'components/misc/AppIcon';

interface BrandProps {
  title?: string;
  onlyIcon?: boolean;
}

export const Brand = ({ title = 'Lemon', onlyIcon = false }: BrandProps) => {
  return (
    <Box
      sx={{
        height: '48px',
        display: 'flex',
        alignItems: 'center',
        gap: 1,
      }}
    >
      <Box sx={{ display: 'inline-block', height: '30px' }}>
        <AppIcon />
      </Box>
      <Typography variant="h6" fontWeight="600">
        {title}
      </Typography>
    </Box>
  );
};
