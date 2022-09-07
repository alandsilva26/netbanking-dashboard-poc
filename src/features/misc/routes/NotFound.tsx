import { useEffect } from 'react';
import { Container, Divider, Button, Box, Typography } from '@mui/material';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();
  const location = useLocation();
  useEffect(() => {
    window.history.replaceState(null, '', '/404');
  }, []);

  /**
   * Navigate to self to show 404 in url
   */
  //   if (!location.pathname.includes('404')) {
  //     return <Navigate to="/404" />;
  //   }

  const goBack = () => {
    navigate(-1);
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
            You seem to be lost...
          </Typography>
          <Typography>No such page exists</Typography>

          <Divider sx={{ marginY: 2 }} />

          <Button variant="outlined" color="secondary" onClick={goBack}>
            Go Back
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
