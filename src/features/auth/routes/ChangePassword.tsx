import { Box } from '@mui/material';
import { FlexBox } from '@/components/elements';
import { FormGroup } from '@/components/form';
import { CustomerPageLayout } from '@/components/Layout';
import { StyledTextField } from '@/components/mui/styled';

export const ChangePassword = () => {
  return (
    <CustomerPageLayout title="Change account password">
      <Box>
        <FlexBox sx={{ flexDirection: 'column' }}>
          <StyledTextField label="Old Password" />
          <StyledTextField label="New Password" />
          <StyledTextField label="Confirm new Password" />
        </FlexBox>
      </Box>
    </CustomerPageLayout>
  );
};
