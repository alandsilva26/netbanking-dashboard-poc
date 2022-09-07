import { Box, List, ListItem, Typography } from '@mui/material';
import { FlexBox, UnexpectedError } from 'components/elements';
import { PageLayout } from 'components/Layout/PageLayout';
import { useAuth } from 'providers';

/**
 *
 * Default dashboard
 */
export const Home = () => {
  const { user } = useAuth();

  if (user) {
    console.log(user.name);
    const name = user.name
      ? user.name
      : user.role === 'customer'
      ? 'Customer'
      : 'Manager';

    return (
      <PageLayout title="Dashboard">
        <Typography>Welcome Alan Dsilva</Typography>
        <FlexBox>
          <Box>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptates
            ducimus neque, corrupti rerum tenetur doloremque possimus ut quos
            accusamus ipsa vero nemo, debitis veniam eveniet facilis? Doloribus
            eligendi earum iusto. lorem1000
            <div>Accounts</div>
            <FlexBox>
              <Box>Account No.</Box>
              <div>Type</div>
              <div>Balance</div>
            </FlexBox>
            <List dense>
              <ListItem></ListItem>
            </List>
          </Box>
          <Box>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
            maxime tenetur magnam impedit excepturi cumque animi, deleniti illo
            est soluta dolore quod? Libero, incidunt iste? Ipsa incidunt hic
            neque temporibus?
          </Box>
        </FlexBox>
      </PageLayout>
    );
  }

  return <UnexpectedError />;
};
