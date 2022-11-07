import { Box, List, ListItem, Typography } from '@mui/material';
import { useAuth } from '@/providers';
import { CustomerDashboard, ManagerDashboard } from '../components';

// customer components
import { FlexBox, UnexpectedError } from '@/components/elements';
import { PageLayout } from '@/components/Layout/PageLayout';

/**
 *
 * Default dashboard
 */
export const Home = () => {
  const { user } = useAuth();

  if (user) {
    const name = user.name
      ? user.name
      : user.isCustomer()
        ? 'Customer'
        : 'Manager';

    return (
      <PageLayout title="Dashboard">
        <Typography gutterBottom mb={3}>
          Welcome {name} to {user.role} dashboard
        </Typography>
        <Box>
          {/* <CustomerDashboard /> */}
          {user.isCustomer() ? <CustomerDashboard /> : <ManagerDashboard />}
        </Box>
      </PageLayout>
    );
  }

  return <UnexpectedError />;
};
