import { Button, Container, Box, Typography, Divider } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { CUSTOMER_SIGNIN_ROUTE } from 'features/auth';

export const UnexpectedError = () => {
  const navigate = useNavigate();

  const routeToLogin = () => {
    navigate(CUSTOMER_SIGNIN_ROUTE);
  };

  return (
    <Container>
      <Box
        sx={{
          height: 'calc(100vh - 200px)',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box>
          <Typography variant="h3" gutterBottom>
            There seems to be a problem.
          </Typography>
          <Typography>Please login and try again</Typography>
          <Divider sx={{ marginY: 2 }} />
          <Button variant="outlined" color="primary" onClick={routeToLogin}>
            Sign in
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
