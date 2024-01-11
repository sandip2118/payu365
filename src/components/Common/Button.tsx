import React from 'react';
import Button from '@mui/material/Button';
import { OutlinedButtonProps, ContainedButtonProps } from './type';

export const OutlinedButton: React.FC<OutlinedButtonProps> = ({ text, color, w, br, borderColor, onClick, padding }) => {
  return (
    <Button
      variant="outlined"
      color={color}
      className={`capitalize w-${w} rounded-[${br}px] hover:bg-[#959eae] hover:text-white border border-solid border-${borderColor}`}
      onClick={onClick}
      sx={{ padding: padding }}
    >
      {text}
    </Button>
  );
}

export const ContainedButton: React.FC<ContainedButtonProps> = ({ text, className, padding, onClick }) => {
  return (
    <Button
      variant="contained"
      className={`capitalize ${className}`}
      onClick={onClick}
      sx={{ padding: padding }}
    >
      {text}
    </Button>
  )
}
