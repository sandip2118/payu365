import { Button } from '@mui/material'
import React from 'react'
import { DepositButtonProps } from '../types'

function DepositButton({buttonText,width,mobileWidth,onClick}:DepositButtonProps) {
  const effectiveMobileWidth = mobileWidth || width;

  const buttonStyle = {
    width: `${width}`,
    height: '48px',
    fontSize: '14px',
    fontWeight: '600',
    textTransform: 'none',
    backgroundColor: '#267FF5',

    '@media (max-width: 768px)': {
      width: `${effectiveMobileWidth}`,
    },
  };

  return (
    <div className=' w-full flex justify-center'>
     <Button
        color="primary"
        variant="contained"
        style={buttonStyle}
        onClick={onClick}
      >
        {buttonText}
      </Button>
    </div>
  )
}

export default DepositButton