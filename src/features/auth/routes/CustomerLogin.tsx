import React, { useState } from 'react';
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

// custom
import { StyledTextField } from 'components/mui/styled';
import { useAuthForm } from '../hooks/useAuthForm';

interface CustomerLoginFormState {
  customerId: string;
  password: string;
}

export const CustomerLogin = () => {
  const { formState, handleInputChange, handleSubmit } = useAuthForm();

  const handleChange = handleInputChange;

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
            Sign in to your account
          </Typography>
          <Card variant="outlined" sx={{ borderRadius: 2 }}>
            <CardContent>
              <form onSubmit={handleSubmit}>
                <StyledTextField
                  name="id"
                  label="Customer id"
                  value={formState.id}
                  onChange={handleChange}
                  fullWidth
                />
                <StyledTextField
                  name="password"
                  label="Pin"
                  type="password"
                  value={formState.password}
                  onChange={handleChange}
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
    </>
  );
};
