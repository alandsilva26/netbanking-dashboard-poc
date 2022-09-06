import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from '@mui/material';
import { AppIcon } from 'components/misc/AppIcon';
import { StyledTextField } from 'components';

export const CustomerLogin = () => {
  return (
    <>
      <Container
        sx={{
          height: 'calc(100vh - 100px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            maxWidth: '400px',
            margin: '0 auto',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <Box>
            <AppIcon height="80px" />
          </Box>
          <Typography variant="h5" marginBottom={1}>
            Sign in to your account
          </Typography>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <form>
                <StyledTextField label="Customer id" placeholder="" required />
                <StyledTextField label="Pin" type="password" margin="normal" />
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    fullWidth
                  >
                    Sign in
                  </Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};
