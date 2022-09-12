import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Divider,
  Grid,
  Typography,
} from '@mui/material';

// colors
import { deepPurple, lime, indigo } from '@mui/material/colors';

// custom elements
import { FlexBox } from 'components/elements';
import { StyledTextField } from 'components/mui/styled';
import { Section } from './Section';

const InfoItem = () => {
  return (
    <FlexBox sx={{ alignItems: 'center', color: 'pale' }}>
      <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
        Type:{' '}
      </Typography>
      <Typography>Savings</Typography>
    </FlexBox>
  );
};

export const ManagerDashboard = () => {
  return (
    <>
      <Section title="Account">
        <Card>
          <CardContent>
            <FlexBox sx={{}} gap={4}>
              <Box>
                <FlexBox alignItems="flex-end" mb={1}>
                  <StyledTextField
                    label="Account Number"
                    required={false}
                    margin="none"
                  />
                  <Button variant="outlined" color="primary">
                    Submit
                  </Button>
                </FlexBox>
                <InfoItem />
              </Box>
            </FlexBox>
          </CardContent>
        </Card>
      </Section>
      <Section title="Quick Actions">
        <FlexBox>
          <Card sx={{ color: deepPurple[900], borderColor: deepPurple[200] }}>
            <CardActionArea onClick={() => {}} sx={{ p: 1 }}>
              <Typography>Deposit Funds</Typography>
            </CardActionArea>
          </Card>
          <Card sx={{ color: indigo[900], borderColor: indigo[200] }}>
            <CardActionArea onClick={() => {}} sx={{ p: 1 }}>
              <Typography>Withdraw Funds</Typography>
            </CardActionArea>
          </Card>
        </FlexBox>
      </Section>
    </>
  );
};
