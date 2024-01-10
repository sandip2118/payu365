import React, { useState } from 'react';
import ContinueWithEmailorPhone from './ContinueWithEmailorPhone';
import { EMAIL, PHONE } from '@/Constants';
import { EnterOTP } from './EnterOTP';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';


type EnterLoginOTPProps = {
  onMailClick: (data: string) => void;
  onBackPhone?: (data?: string) => void;
};

const EnterLoginOTP = (props: EnterLoginOTPProps) => {
  const router = useRouter()
  const [otp, setOtp] = useState<string[]>(Array(4).fill(''));
  // const inputRefs = useRef<Array<HTMLInputElement | null>>([]);
  // const handleInputChange = (index: number, value: string) => {
  //   const newOtp = [...otp];
  //   newOtp[index] = value;
  //   setOtp(newOtp);
  //   if (value !== '' && index < otp.length - 1 && inputRefs.current[index + 1]) {
  //     inputRefs.current[index + 1]?.focus();
  //   }
  // };
  const handleMailClick = (data: string) => {
    props.onMailClick(data);
  };

  const backClick = (data: string) => {
    props.onBackPhone && props.onBackPhone(data);
  };

  const _verifyOtp = () => {
    let joinOtp = otp.join('')
    if (joinOtp.length === 4) {
      router.push('/dashboard')
    }  else {
      toast.error('Enter valid OTP')
    }
  }
  return (
    <div className='2xl:w-[60%] xl:w-[70%] lg:w-[80%] w-[100%] sm:mx-5 mx-0' >
      <div className="flex bg-BLACK_303 md:bg-inherit md:w-full mx-5 sm:mx-0 flex-col items-start md:backdrop-blur-none px-5 py-8 rounded-3xl md:rounded-none">
        <p className='text-[color:var(--Pure-White,#FFF)] text-2xl not-italic font-bold leading-[normal]'>Enter OTP for Verification</p>
        <p className='self-stretch text-[#777E90] text-sm not-italic font-medium leading-[22px] mt-[15px]'>We have sent to 4 digit code on  your given phone number <span className='text-white'>+91 *********97</span></p>
        <div className='sm:mt-[50.5px] mt-[40.5px] w-full'>
          <EnterOTP OTP={(val: any) => setOtp(val)} />
        </div>
        <button
          onClick={() => _verifyOtp()}
          className="font14SB bg-BLUE_201 mt-[30px] whitespace-nowrap text-white flex justify-center items-center gap-2.5 self-stretch h-[48px] px-[100px] rounded-[5px]">
          Verify OTP
        </button>
        <p className='font12R mt-[30px] w-full text-[color:var(--Primary-Color,#777E90)] text-center not-italic leading-[18px]'>Didn’t receive code? <span className='text-BLUE_201 text-[12px] font-medium'>Resend</span></p>
        <p className='font16RB mt-[30px] text-[color:var(--Secondary-Color,#F59C26)] text-base not-italic font-medium leading-[normal] w-full text-center cursor-pointer'
          onClick={() => backClick(EMAIL)}
        >Back to Sign In</p>
        <ContinueWithEmailorPhone onClick={handleMailClick} currentSelection={PHONE} />
      </div>
      <div className='h-5'/>
    </div>
  );
};

export { EnterLoginOTP };
