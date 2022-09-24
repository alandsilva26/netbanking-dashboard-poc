import {
  Box,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from '@mui/material';
import { FlexBox } from '@/components/elements';
import { Link } from 'react-router-dom';
import { Section } from './Section';

export const CustomerDashboard = () => {
  return (
    <>
      <Box>
        <Section title="Accounts" to="/accounts">
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6} lg={4}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: '0.5em',
                  backgroundColor: 'hsl(111deg 83% 58% / 37%)',
                }}
              >
                <CardHeader
                  title="Savings"
                  subheader="Account No:daflkjadflk "
                  sx={{
                    '.MuiCardHeader-title': {
                      color: 'hsl(111deg 83% 58% / 100%)',
                    },
                  }}
                />

                <CardContent sx={{ paddingTop: 0 }}>
                  <Box sx={{ paddingLeft: 'auto' }}>
                    <Typography variant="h6">Rs. 3000000000</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={4}>
              <Card
                variant="outlined"
                sx={{
                  borderRadius: '0.5em',
                  backgroundColor: 'hsl(333deg 67% 73% / 33%)',
                }}
              >
                <CardHeader
                  title="Current"
                  subheader="Account No:daflkjadflk "
                  sx={{
                    '.MuiCardHeader-title': {
                      color: 'hsl(333deg 67% 73% / 100%)',
                    },
                  }}
                />

                <CardContent sx={{ paddingTop: 0 }}>
                  <Box sx={{ paddingLeft: 'auto' }}>
                    <Typography variant="h6">Rs. 3000000000</Typography>
                  </Box>
                </CardContent>
              </Card>
            </Grid>
          </Grid>
        </Section>
      </Box>
    </>
  );
};
