import React from 'react';
import { Box, Button, Typography } from '@mui/material';

export const HelloWorld = () => {
  return (
    <Box>
      <Typography variant="h1">Hello World</Typography>
      <Button color="primary" onClick={() => {}}>
        Primary Button
      </Button>
    </Box>
  );
};
