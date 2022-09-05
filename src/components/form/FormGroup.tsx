import { Box, Divider, Typography } from '@mui/material';

import { FlexBox } from 'components/elements/FlexBox/FlexBox';

interface FormGroupProps {
  title: string;
  children: React.ReactNode;
}

export const FormGroup = ({ title, children = null }: FormGroupProps) => {
  return (
    <Box>
      <FlexBox alignItems="center" gap={1} marginBottom={2}>
        <Typography fontWeight="600" color="primary">
          {title}
        </Typography>
        <Box
          sx={{
            backgroundColor: 'primary.main',
            opacity: '0.6',
            flexGrow: '1',
            height: '1px',
          }}
        ></Box>
      </FlexBox>
      <Box marginX={0}>{children}</Box>
    </Box>
  );
};
