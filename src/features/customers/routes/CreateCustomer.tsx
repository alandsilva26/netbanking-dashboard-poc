import { Button, Container, Typography } from '@mui/material';

// custome components
import { PageLayout } from 'components/Layout';
import { CustomerDetailsForm } from '../components';

export const CreateCustomer = () => {
  return (
    <>
      <PageLayout title="Add a new Customer">
        <CustomerDetailsForm />
      </PageLayout>
    </>
  );
};
