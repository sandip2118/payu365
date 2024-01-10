import React from 'react';
import Button from '@mui/material/Button';
import { ButtonProps } from './type';

export const OutlinedButton: React.FC<ButtonProps> = ({ text, color, w, br, borderColor, onClick, padding }) => {
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


