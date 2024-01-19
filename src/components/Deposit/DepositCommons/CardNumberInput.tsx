import { InputAdornment, TextField } from '@mui/material'
import Image from 'next/image'
import React, { useState } from 'react'


function CardNumberInput(){
  const [cardNumber, setCardNumber] = useState('');
  const [cardType, setCardType] = useState('');

  const determineCardType = (number) => {
    if (number.startsWith('4')) {
      return 'Visa';
    } else if (number.startsWith('5')) {
      return 'MasterCard';
    }
    return '';
  };

  const handleCardNumberChange = (e) => {
    const number = e.target.value;
    setCardNumber(number);
    setCardType(determineCardType(number));
  };

  const getCardIcon = () => {
    switch(cardType) {
      case 'Visa':
        return '/assets/images/visa.png'
      case 'MasterCard':
        return '/assets/icons/masterCard.svg'; 
              default:
        return '/assets/icons/card.svg'; 
    }
  };

  return (
    <div className='w-full'>
     
      <TextField
          label='Card number'
          id="outlined-start-adornment"
          placeholder='0000 0000 0000 0000'
          color='white'
        value={cardNumber}
        onChange={handleCardNumberChange}
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
              endAdornment: (
                <InputAdornment position="end">
                  <Image src={getCardIcon()} alt='' width={20} height={20}/>
                 </InputAdornment>
              )
          }}
        />
     
    </div>
  )
}

export default CardNumberInput;

