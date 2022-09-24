import {
  Container,
  ContainerProps,
  Typography,
  Box,
  Divider,
  Button,
} from '@mui/material';
import { useAuth } from '@/providers';
import { useNavigate } from 'react-router-dom';

export interface PageLayoutProps extends ContainerProps {
  title: string;
  allowedRoles?: string[];
  children?: React.ReactNode;
}

/**
 * Will allow all roles to access by default
 */
export const PageLayout = ({
  title,
  allowedRoles,
  children = null,
  ...rest
}: PageLayoutProps) => {
  const navigate = useNavigate();
  const auth = useAuth();

  const goBack = () => {
    navigate(-1);
  };

  const roleAllowed = (): boolean => {
    if (auth.user) {
      if (!allowedRoles || allowedRoles.indexOf(auth.user.role) !== -1) {
        return true;
      }
    }
    return false;
  };

  return (
    <Container sx={{ marginBottom: 2 }} {...rest}>
      <Typography variant="h5" fontWeight="600" marginBottom={2}>
        {title}
      </Typography>

      {roleAllowed() ? (
        <>{children}</>
      ) : (
        <Box mt={5}>
          <Typography variant="h5" gutterBottom>
            You are not authorized to access this page.
          </Typography>
          <Divider sx={{ marginY: 2 }} />

          <Button variant="outlined" color="secondary" onClick={goBack}>
            Go Back
          </Button>
        </Box>
      )}
    </Container>
  );
};
