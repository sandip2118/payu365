import { InputAdornment, TextField } from '@mui/material'
import Image from 'next/image'
import React from 'react'
import { CardDetailsInputProps } from '../types'



function OneCardInput({label,icon,iconString,placeholder}:CardDetailsInputProps) {
  return (
    <div className='w-full'>
     
      <TextField
          label={label}
          id="outlined-start-adornment"
          placeholder={placeholder}
          color='white'
          focused
          sx={{ 
            width: '100%',
            '& label.MuiInputLabel-root': { 
              color: 'white',
              fontSize: '12px',
              fontWeight: 400
            },
            '& .MuiInputBase-input': { 
              color: 'white!important',
              fontWeight: 400,
              fontSize: '14px',
            },
            '& .MuiInputBase-root': {
              '&::placeholder': {
                color: '#777E90',
                fontWeight: 400,
                fontSize: '14px',
                opacity: 1,
              }
            },
            '& .MuiOutlinedInput-root': { 
              '& fieldset': {
                borderColor: '#44444F', 
                borderWidth: '1px !important',
                height: '48px !important',
                borderRadius: '5px !important',
              
              },
              '&:hover fieldset': {
                borderColor: '#44444F',  
                borderWidth: '1px !important',
                height: '48px !important',
                borderRadius: '5px !important',
               
              },
              '&.Mui-focused fieldset': { 
                borderColor: '#44444F',
                borderWidth: '1px !important',
                height: '48px !important',
                borderRadius: '5px !important',
               
              },
            },
  
          }}
          InputProps={{
            startAdornment: <InputAdornment position="start"></InputAdornment>,
            ...(icon && {
              endAdornment: (
                <InputAdornment position="end">
                  <Image src={iconString} alt='' width={20} height={20}/>
                </InputAdornment>
              )
            })
          }}
        />
     
    </div>
  )
}

export default OneCardInput