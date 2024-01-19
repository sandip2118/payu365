import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { InputProps } from './type';

const Input: React.FC<any> = ({ width, placeholder, onChange, classes, value, sx }) => {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { width: width },
        '& .MuiInputBase-root': {
          '& .MuiInputBase-input': {
            padding: '10px',
          }
        },
        '& .MuiOutlinedInput-root': {
          color: '#777E90',
          '& fieldset': {
            borderColor: '#777E90',
            borderRadius: '11px',
            fontSize: '0.875 rem'
          },
          '&:hover fieldset': {
            borderColor: '#777E90',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#777E90',
          },
        }
      }}
      noValidate
      autoComplete="off"
      className={`${classes}`}
    >
      <TextField
        InputLabelProps={{ shrink: false }}
        placeholder={placeholder}
        variant="outlined"
        fullWidth
        value={value}
        onChange={onChange} />
    </Box>
  );
}

export default Input;