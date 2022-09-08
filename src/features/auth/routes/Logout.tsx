import { Container, Typography } from '@mui/material';
import { useAuth } from 'providers';
import { useEffect } from 'react';

/**
 *
 *
 * Dummy Route to logout user from application.
 *
 * Use when you have links and you need a logout action
 *
 */
export const Logout = () => {
  const { logout } = useAuth();

  useEffect(() => {
    logout();
  });

  return (
    <Container>
      <Typography variant="h5">
        Please wait while we log you out.....
      </Typography>
    </Container>
  );
};
