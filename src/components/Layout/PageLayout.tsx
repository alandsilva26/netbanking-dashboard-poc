import { Container, ContainerProps, Typography } from '@mui/material';

interface PageLayoutProps extends ContainerProps {
  title: string;
  children?: React.ReactNode;
}

export const PageLayout = ({
  title,
  children = null,
  ...rest
}: PageLayoutProps) => {
  return (
    <Container sx={{ marginBottom: 2 }} {...rest}>
      <Typography variant="h5" fontWeight="540" marginBottom={2}>
        {title}
      </Typography>
      <>{children}</>
    </Container>
  );
};
