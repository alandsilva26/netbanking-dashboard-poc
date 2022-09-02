import { CssBaseline } from '@mui/material';
import { MUIThemeProvider } from 'providers/MUIThemeProvider';
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from './routes/index';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <CssBaseline>
          <MUIThemeProvider>
            <AppRoutes />
          </MUIThemeProvider>
        </CssBaseline>
      </BrowserRouter>
    </>
  );
};

export default App;
