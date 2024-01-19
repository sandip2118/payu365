import React, { useState } from 'react';
import { EnterOTP } from '../../../Login/EnterOTP';
// import { toast } from 'react-toastify';

function EnterOTPComponent({onValidOTP}) {
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));

  // const _verifyOtp = () => {
  //   let joinOtp = otp.join('')
  //   if (joinOtp.length === 4) {
  //     console.log('correct')
  //   }  else {
  //     toast.error('Enter valid OTP')
  //   }
  // }
  return (
   <div className='p-5 sm:py-[30px]'>
    <div className='w-[100%] sm:w-[80%] mx-auto '>

    <div className='flex justify-center'>
           <p className='font-[700]  text-[18px] sm:text-[24px] text-white  text-center'> Enter OTP for Verification</p>
      </div>

      <div className='mt-[15px] w-full sm:w-[80%] mx-auto'>
       <p className='text-GRAY_101 font14RB text-center leading-8'>We have sent to 4 digit code on  your Existing phone number <span className='text-white'>+91 *********97 Or On Your Email address if you provided!</span></p>
      </div>

      <div className='mt-[30px] w-full '>
      <EnterOTP OTP={(val: any) => setOtp(val)} />
      </div>

      <div className='mt-[30px]'>
      <button   onClick={onValidOTP} className='bg-BLUE_201 h-[48px] w-full font14SB rounded-[5px] text-white' >Verify</button>
      </div>

      <div className='mt-5'>
        <p className='font12400 text-GRAY_101 mx-auto text-center'>Didn’t receive code? <span className='text-BLUE_201'>Resend</span></p>
      </div>
    </div>
    </div>
  )
}

export default EnterOTPComponent