import { useState } from 'react';
import { FormControl, InputLabel, OutlinedInput } from '@mui/material';
import { DatePicker as MuiDatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { Dayjs } from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';

export const DatePicker = () => {
  const label = 'Date of Birth';
  const [value, setValue] = useState<Dayjs | null>(null);

  return (
    <FormControl required>
      <InputLabel
        shrink={true}
        sx={{
          position: 'relative',
          transform: 'translate(0px, 0px)',
          marginBottom: '0.1em',
          fontWeight: '600',
          fontSize: '14px',
        }}
      >
        {label}
      </InputLabel>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <MuiDatePicker
          value={value}
          onChange={(newValue) => {
            setValue(newValue);
          }}
          label={label}
          renderInput={(props) => (
            <OutlinedInput
              size="small"
              inputProps={props.inputProps}
              inputRef={props.inputRef}
              value={props.value}
              onClick={props.onClick}
              onChange={props.onChange}
              endAdornment={props.InputProps?.endAdornment}
              // sx={{ background: 'whitesmoke' }}
            />
          )}
        />
      </LocalizationProvider>
    </FormControl>
  );
};
