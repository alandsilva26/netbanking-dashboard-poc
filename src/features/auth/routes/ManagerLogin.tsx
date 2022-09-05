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

export const ManagerLogin = () => {
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
            Sign in to Admin Panel
          </Typography>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <form>
                <TextField
                  label="Manager Email"
                  placeholder="John.Doe@lemon.com"
                  margin="normal"
                />
                <TextField label="Password" type="password" margin="normal" />
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
