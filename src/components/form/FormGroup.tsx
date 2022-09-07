import { Box, Divider, Typography } from '@mui/material';

import { FlexBox } from 'components/elements/FlexBox/FlexBox';
import { TypePredicateKind } from 'typescript';

interface FormGroupProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export const FormGroup = ({
  title,
  description,
  children = null,
}: FormGroupProps) => {
  return (
    <Box marginBottom={2} sx={{}}>
      <Box marginBottom={1}>
        <FlexBox alignItems="center" gap={1}>
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
        {description && <Typography variant="body2">{description}</Typography>}
      </Box>
      <Box>{children}</Box>
    </Box>
  );
};
