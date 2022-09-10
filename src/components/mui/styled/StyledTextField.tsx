import { createTheme, styled, TextField } from '@mui/material';

const test = createTheme();

export const StyledTextField = styled(
  TextField,
  {}
)(({ theme, margin, disabled }) => ({
  ...(margin === 'dense' && {
    marginTop: '0em',
    marginBottom: '0.5em',
  }),
  ...(margin === 'normal' && {
    marginTop: '0em',
    marginBottom: '1.5em',
  }),
  ...(margin === 'none' && {
    marginBottom: '0px',
  }),
  ...(disabled === true && {
    '.MuiInputBase-root': {
      background: 'whitesmoke !important',
    },
    '.MuiInputBase-input': {
      color: 'black !important',
      textFillColor: 'rgb(0 0 0 / 80%)',
    },
  }),
}));

StyledTextField.defaultProps = {
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
      backgroundColor: 'hsl(0deg 0% 93% / 20%)',
    },
  },
};
