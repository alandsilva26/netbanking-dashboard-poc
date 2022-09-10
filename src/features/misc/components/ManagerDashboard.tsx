import {
  Button,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';

// colors
import { lime, indigo } from '@mui/material/colors';

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
            <InfoItem />
          </CardContent>
        </Card>
      </Section>
      <Section title="General Actions">
        <FlexBox>
          <Card sx={{ backgroundColor: lime[200] }}>
            <CardActionArea onClick={() => {}} sx={{ p: 1 }}>
              <Typography>Deposit</Typography>
            </CardActionArea>
          </Card>
          <Card sx={{ backgroundColor: indigo[200] }}>
            <CardActionArea onClick={() => {}} sx={{ p: 1 }}>
              <Typography>Withdrawal</Typography>
            </CardActionArea>
          </Card>
        </FlexBox>
      </Section>
    </>
  );
};
