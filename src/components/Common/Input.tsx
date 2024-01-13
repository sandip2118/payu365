import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputProps } from './type';

const Input: React.FC<InputProps> = ({ w, placeholder }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: `${w}` },
        '& .MuiInputBase-root': {
          '& .MuiInputBase-input': {
            padding: '10px',

          }
        },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField InputLabelProps={{ shrink: false }} placeholder={placeholder} variant="outlined" fullWidth />
    </Box>
  );
}

export default Input;