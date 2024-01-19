import InputField from '@/components/Common/InputField';
import PhoneWithCountryCodeProps from '@/components/Login/PhoneWithCountryCode';
import React, { useState } from 'react'

function UpdateNew({onUpdate}) {
  const [phone, setPhone] = useState<string | undefined>('');
  const [phoneCode, setPhoneCode] = useState<string | undefined>('');
  const [otpValue,setOptValue] = useState<string | undefined>('');
  const [status,setStatus] = useState('');
  const [activeButton,setActiveButton] = useState(false);

  const onGetCode =()=>{
setStatus('We have sent you an OTP to given number please verify it');
setActiveButton(true);
setOptValue('1234')
  }

  return (
    <div className='grid gap-[25px] p-5 sm:p-[30px]'>
      <div className='grid gap-[15px] text-center'>
        <p className='font-[700]  text-[18px] sm:text-[24px] text-white pt-5'>Update New Phone Number</p>
        <p className='font14RB text-GRAY_101 w-[90%] sm:w-[70%] mx-auto'>New Number will be use everywhere for login after saving information.</p>
      </div>

    

      <div className='grid gap-[10px]'>
        <p className='text-GRAY_101 font12RB'>Mobile Number*</p>
     <div  className='flex justify-between items-center '>
     <PhoneWithCountryCodeProps
                  value={phone}
                  onChange={(e) => {
                    setPhoneCode(e?.phoneCode)
                    setPhone(e?.value)
                  }}
                  placeholder='81*** ***88'
                />
     <div  className='text-BLUE_201 font-[400]  text-[9px] xs:text-[10px] sm:text-[12px] hidden sm:flex h-[48px] bg-BLACK_304 items-center w-1/4 justify-end flex-nowrap ml-[-2px] sm:ml-[-3px] xxs:pr-1 pr-2 sm:pr-5 rounded-r-[5px] px-1' onClick={onGetCode}>Get Code</div>
     </div>
   <div className='flex justify-between sm:hidden items-center'>
    <p className='text-BLUE_201 font12400' onClick={onGetCode}>Get Code</p>
   <p className='font12400 text-GRAY_101 text-end'>Didn’t receive code? <span className='text-BLUE_201'>Resend</span></p>
   </div>
      </div>

      <div className='grid gap-[10px]'>
        <p className='font12RB text-GRAY_101'>Verify OTP*</p>
        <InputField  type='text' placeholder='Enter OTP' value={otpValue} />
        <p className='font12R text-YELLOW_01 text-center'>{status}</p>
      </div>

      <div>
        <button className={` font14SB h-[48px] ${activeButton ? 'bg-BLUE_201' :'bg-BLACK_306'} text-white rounded-[5px] w-full`} onClick={onUpdate}>Reset Mobile Number</button>
      </div>

      <div className='flex justify-center'>
        <p className='font14SB text-white'>Cancel</p>
      </div>
    
    </div>
  )
}

export default UpdateNew;