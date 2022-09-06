import { Link as RouterLink } from 'react-router-dom';
import { Box, Typography, Link as MUILink } from '@mui/material';
import { AppIcon } from 'components/misc/AppIcon';

interface BrandProps {
  title?: string;
  onlyIcon?: boolean;
}

export const Brand = ({ title = 'Tech', onlyIcon = false }: BrandProps) => {
  return (
    <MUILink component={RouterLink} to="/" underline="none">
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
        <Typography
          variant="h6"
          fontWeight="600"
          sx={{ color: 'rgba(25,25,25,0.8)' }}
        >
          {title}
        </Typography>
      </Box>
    </MUILink>
  );
};
