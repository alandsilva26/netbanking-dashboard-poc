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
        margin: 'dense',
        variant: 'outlined',
        size: 'small',
        required: true,
        InputLabelProps: {
          shrink: true,
          style: {
            position: 'relative',
            transform: 'translate(0px, 0px)',
            marginBottom: '0.1em',
            fontWeight: '600',
            fontSize: '14px',
          },
        },
        InputProps: {
          notched: false,
          style: {
            background: 'whitesmoke',
          },
        },
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.margin === 'none' && {
            marginBottom: '1em',
          }),
          ...(ownerState.margin === 'dense' && {
            marginTop: '0px',
            marginBottom: '0.5em',
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
