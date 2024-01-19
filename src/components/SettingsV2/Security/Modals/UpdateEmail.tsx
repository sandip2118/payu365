import InputField from '../../../Common/InputField';
import React, { useState } from 'react'

function UpdateEmail({onContinue}) {
  const [otpValue,setOptValue] = useState<string | undefined>('');
  const [status,setStatus] = useState('');
  const [activeButton,setActiveButton] = useState(false);

  const onGetCode =()=>{
setStatus('We have sent you an OTP to given Email please verify it');
setActiveButton(true);
setOptValue('1234')
  }

  return (
    <div className='grid gap-[25px] p-5 sm:p-[30px]'>
      <div className='grid gap-[15px] text-center'>
        <p className='font-[700]  text-[18px] sm:text-[24px] text-white pt-5'>Update New Email Address</p>
        <p className='font14RB text-GRAY_101 w-[90%] sm:w-[70%] mx-auto'>New Email will be use everywhere for login after verifying information.</p>
      </div>

    <div className='grid gap-[10px]'>
      <label className='font12RB text-GRAY_101'>Enter New Email Address</label>
  
    <div className='flex'>
       <InputField  type='text' placeholder='Enter email address' />
       <div  className='text-BLUE_201 ffont-[500] sm:ont-[400]  text-[10px] sm:text-[12px] flex h-[48px] bg-BLACK_304 items-center w-1/4 justify-end flex-nowrap ml-[-2px] sm:ml-[-3px]  pr-2 sm:pr-5 rounded-r-[5px]' onClick={onGetCode}>Get Code</div>
     </div>
    </div>

    <div className='grid gap-[10px]'>
        <p className='font12RB text-GRAY_101'>Verify OTP*</p>
        <InputField  type='text' placeholder='Enter OTP' value={otpValue} />
        <p className='font12R text-YELLOW_01 text-center'>{status}</p>
      </div>

     

      <div>
        <button className={` font14SB h-[48px] ${activeButton ? 'bg-BLUE_201' :'bg-BLACK_306'} text-white rounded-[5px] w-full`} onClick={onContinue} >Reset Email Address</button>
      </div>

      <div className='flex justify-center'>
        <p className='font14SB text-white'>Cancel</p>
      </div>
    
    </div>
  )
}

export default UpdateEmail;