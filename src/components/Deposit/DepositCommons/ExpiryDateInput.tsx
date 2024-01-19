// import { InputAdornment, TextField } from '@mui/material'
// import Image from 'next/image'
// import React from 'react'

// function ExpiryDateInput() {
//   return (
//           <div className='w-full'>
     
//      <TextField
//          label='Expiry date'
//          id="outlined-start-adornment"
//          placeholder='MM/YY'
//          color='white'
//          focused
//          sx={{ 
//            width: '100%',
//            '& label.MuiInputLabel-root': { 
//              color: 'white',
//              fontSize: '12px',
//              fontWeight: 400
//            },
//            '& .MuiInputBase-input': { 
//              color: 'white!important',
//              fontWeight: 400,
//              fontSize: '14px',
//            },
//            '& .MuiInputBase-root': {
//              '&::placeholder': {
//                color: '#777E90',
//                fontWeight: 400,
//                fontSize: '14px',
//                opacity: 1,
//              }
//            },
//            '& .MuiOutlinedInput-root': { 
//              '& fieldset': {
//                borderColor: '#44444F', 
//                borderWidth: '1px !important',
//                height: '48px !important',
//                borderRadius: '5px !important',
             
//              },
//              '&:hover fieldset': {
//                borderColor: '#44444F',  
//                borderWidth: '1px !important',
//                height: '48px !important',
//                borderRadius: '5px !important',
              
//              },
//              '&.Mui-focused fieldset': { 
//                borderColor: '#44444F',
//                borderWidth: '1px !important',
//                height: '48px !important',
//                borderRadius: '5px !important',
              
//              },
//            },
 
//          }}
//          InputProps={{
//            startAdornment: <InputAdornment position="start"></InputAdornment>,
//            endAdornment: (
//                <InputAdornment position="end">
//                  <Image src='/assets/icons/calendar.svg' alt='' width={20} height={20}/>
//                </InputAdornment>
//              )
           
//          }}
//        />
    
//    </div>
//     )
// }

// export default ExpiryDateInput;


import React, { useState } from 'react';
import { TextField, InputAdornment } from '@mui/material';
import Image from 'next/image';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar styles

function ExpiryDateInput() {
  const [value, setValue] = useState(new Date());
  const [open, setOpen] = useState(false);

  const handleCalendarChange = (newDate) => {
    setValue(newDate);
    setOpen(false); // Close calendar after selection
  };

  const formatDate = (date) => {
    return `${date.getMonth() + 1}/${date.getFullYear()}`;
  };

  return (
    <div className='w-full relative'> {/* Container with relative positioning */}
      <TextField
        label='Expiry date'
        id="outlined-start-adornment"
        placeholder='MM/YY'
        color='white'
        value={formatDate(value)}
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
            <InputAdornment position="end" onClick={() => setOpen(!open)}>
              <Image src='/assets/icons/calendar.svg' alt='' width={20} height={20}/>
            </InputAdornment>
          ),
        }}
      />
      {open && (
        <div style={{ position: 'absolute', zIndex: 1000, top: '100%', left: 0 }}> 
          <Calendar 
            onChange={handleCalendarChange} 
            value={value} 
            view="year" 
            maxDetail="year" 
          />
        </div>
      )}
    </div>
  );
}

export default ExpiryDateInput;
