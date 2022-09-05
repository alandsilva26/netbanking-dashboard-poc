import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider, MUIThemeProvider } from 'providers';
import { AppRoutes } from './routes/index';

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <CssBaseline>
            <MUIThemeProvider>
              <AppRoutes />
            </MUIThemeProvider>
          </CssBaseline>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
