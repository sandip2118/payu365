import { Button } from '@mui/material'
import React from 'react'
import { DepositButtonProps } from '../types'

function DepositButton({buttonText,width,onClick}:DepositButtonProps) {
  return (
    <div>
     <Button
     color="primary"
     variant='contained'
     style={{width:`${width}`, height:'48px',fontSize:'14px',fontWeight:'600',textTransform:'none',backgroundColor:'#267FF5'}}
     onClick={onClick}
     >
    {buttonText}
      </Button>
    </div>
  )
}

export default DepositButton