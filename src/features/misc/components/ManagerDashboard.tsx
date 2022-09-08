import {
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

export const ManagerDashboard = () => {
  return (
    <>
      <Section title="Account">
        <Card>
          <CardContent>
            <StyledTextField label="Account Number" required={false} />
            <FlexBox sx={{ alignItems: 'center' }}>
              <Typography variant="subtitle2">Type: </Typography>
              <Typography variant="subtitle1">Savings</Typography>
            </FlexBox>
            <Typography>Holder:</Typography>
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
