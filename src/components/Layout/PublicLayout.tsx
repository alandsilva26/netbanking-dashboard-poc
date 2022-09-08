import { AppBar, Toolbar } from '@mui/material';
import { Brand } from 'components/AppBar';
import { Outlet } from 'react-router-dom';

interface PublicLayoutProps {
  children: React.ReactNode;
}

export const PublicLayoutt = ({ children }: PublicLayoutProps) => {
  return (
    <>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Rerum esse quo
      doloremque illo explicabo vitae optio inventore! Beatae dolorem asperiores
      illo quam, nihil corporis nulla ad. Quos est fugit asperiores?
      {children}
    </>
  );
};
