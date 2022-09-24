import { CssBaseline } from '@mui/material';
import { BrowserRouter } from 'react-router-dom';

import { AuthProvider, MUIThemeProvider } from '@/providers';
import { AppRoutes } from '@/routes/index';

// css
import '@/assets/fonts/fonts.css';

const App = () => {
  return (
    <>
      <AuthProvider>
        <BrowserRouter>
          <MUIThemeProvider>
            <CssBaseline>
              <AppRoutes />
            </CssBaseline>
          </MUIThemeProvider>
        </BrowserRouter>
      </AuthProvider>
    </>
  );
};

export default App;
