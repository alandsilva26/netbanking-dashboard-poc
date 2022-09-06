import { Container, Typography } from '@mui/material';

interface PageLayoutProps {
  title: string;
  children?: React.ReactNode;
}

export const PageLayout = ({ title, children = null }: PageLayoutProps) => {
  return (
    <Container sx={{ marginTop: 2 }}>
      <Typography variant="h5" fontWeight="540" marginBottom={2}>
        {title}
      </Typography>
      <>{children}</>
    </Container>
  );
};
