import { Container, TextField } from '@mui/material';

export const ManagerLogin = () => {
  return (
    <>
      <Container>
        <TextField label="Email" size="small" />
        <TextField label="Password" size="small" margin="none" />
      </Container>
    </>
  );
};
