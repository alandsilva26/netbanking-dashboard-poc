import { createTheme, ThemeProvider } from '@mui/material';
import { red } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiFormLabel: {
      styleOverrides: {
        asterisk: {
          color: 'red',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        margin: 'none',
        variant: 'outlined',
        size: 'small',
        InputLabelProps: {
          shrink: true,
          style: {
            position: 'relative',
            transform: 'translate(0px, 0px)',
            marginBottom: '0.1em',
            fontWeight: '600',
          },
        },
        InputProps: {
          notched: false,
        },
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.margin === 'none' && {
            marginBottom: '1em',
          }),
        }),
      },
    },
    MuiAppBar: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiToolbar: {
      defaultProps: {
        disableGutters: true,
      },
    },
  },
});

interface MUIThemeProviderProps {
  children?: React.ReactNode;
}

export const MUIThemeProvider = ({ children }: MUIThemeProviderProps) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
};
