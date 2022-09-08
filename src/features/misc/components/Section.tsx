import {
  Box,
  Link as MuiLink,
  Button,
  ButtonBase,
  Typography,
} from '@mui/material';
import { Link } from 'react-router-dom';
import { FlexBox } from 'components/elements';
import { ParentElement } from 'types';

interface SectionProps extends ParentElement {
  title: string;
  to?: string;
  subActionTitle?: string;
}

export const Section = ({
  title,
  children,
  to,
  subActionTitle,
}: SectionProps) => {
  return (
    <Box mb={2}>
      <FlexBox
        sx={{
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          marginBottom: '0.3em',
        }}
      >
        <Typography sx={{ fontWeight: '600' }}>{title}</Typography>
        {to && (
          <MuiLink
            component={Link}
            to={to}
            underline="none"
            sx={{ fontSize: '14px' }}
          >
            View all
          </MuiLink>
        )}
      </FlexBox>
      <Box>{children && children}</Box>
    </Box>
  );
};
