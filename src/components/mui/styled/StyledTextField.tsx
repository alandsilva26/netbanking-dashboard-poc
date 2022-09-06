import { createTheme, styled, TextField } from '@mui/material';

const test = createTheme();

export const StyledTextField = styled(
  TextField,
  {}
)(({ theme, margin }) => ({
  ...(margin === 'dense' && {
    marginTop: '0em',
    marginBottom: '0.5em',
  }),
  ...(margin === 'normal' && {
    marginTop: '0em',
    marginBottom: '1.5em',
  }),
}));

StyledTextField.defaultProps = {
  fullWidth: true,
  size: 'small',
  required: true,
  margin: 'dense',
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
      backgroundColor: 'whitesmoke',
    },
  },
};
