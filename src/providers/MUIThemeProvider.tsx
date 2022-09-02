import { createTheme, ThemeProvider } from '@mui/material';
import { green, red } from '@mui/material/colors';

const theme = createTheme({
  components: {
    MuiTextField: {
      defaultProps: {
        fullWidth: true,
        margin: 'none',
        variant: 'outlined',
        InputLabelProps: {
          shrink: false,
          style: {
            marginBottom: '0.5em',
          },
        },
      },
      styleOverrides: {
        root: ({ ownerState }) => ({
          ...(ownerState.margin === 'none' && {
            margin: '0.5em 0px',
          }),
        }),
      },
    },
    MuiInputLabel: {
      styleOverrides: {
        root: {
          position: 'relative',
          transform: 'translate(0px, 0px)',
        },
      },
    },
    MuiOutlinedInput: {
      defaultProps: {
        notched: false,
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
