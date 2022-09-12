import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  TextField,
  Typography,
} from '@mui/material';

// custom
import { StyledTextField } from 'components/mui/styled';
import { AppIcon } from 'components/misc/AppIcon';
import { useAuthForm } from '../hooks/useAuthForm';
import { PublicLayout } from 'components/Layout';

export const ManagerLogin = () => {
  const { formState, handleInputChange, handleSubmit } = useAuthForm();

  return (
    <PublicLayout>
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
              <form onSubmit={handleSubmit}>
                <StyledTextField
                  name="id"
                  label="Manager Email"
                  placeholder="John.Doe@lemon.com"
                  value={formState.id}
                  onChange={handleInputChange}
                  fullWidth
                />
                <StyledTextField
                  name="password"
                  label="Password"
                  type="password"
                  value={formState.password}
                  onChange={handleInputChange}
                  margin="normal"
                  fullWidth
                />
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
    </PublicLayout>
  );
};
