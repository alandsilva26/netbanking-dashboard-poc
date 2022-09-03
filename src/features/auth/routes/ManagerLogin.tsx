import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from '@mui/material';

export const ManagerLogin = () => {
  return (
    <>
      <Container>
        <Box sx={{ maxWidth: '500px', margin: '0 auto' }}>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <Typography variant="h4" marginBottom={1}>
                Sign in
              </Typography>
              <form>
                <TextField
                  label="Email"
                  placeholder="John.Doe@lemon.com"
                  required
                />
                <TextField label="Password" type="password" required />
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <Button variant="contained" color="primary">
                    Sign in
                  </Button>
                  <Button variant="outlined">Cancel</Button>
                </Box>
              </form>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </>
  );
};
