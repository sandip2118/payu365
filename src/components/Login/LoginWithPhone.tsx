import React, { useState } from 'react';
import { PHONE } from '@/Constants';
import ContinueWithEmailorPhone from './ContinueWithEmailorPhone';
import PhoneWithCountryCode from './PhoneWithCountryCode';
import { toast } from 'react-toastify';

type LoginWithPhoneProps = {
  onClick: (data: string) => void;
  onMailClick: (data: string) => void;
};

const LoginWithPhone: React.FC<LoginWithPhoneProps> = (props) => {
  const [phone, setPhone] = useState<string | undefined>('');
  const [phoneCode, setPhoneCode] = useState<string | undefined>('');

  const handleClick = () => {
    if (phone?.length <= 9) {
      toast.error('Enter a valid phone number');
    } else {
      props.onClick(phone);
    }
  };

  const handlePhoneChange = (newValue: string | undefined) => {
    setPhone(newValue);
  };

  const handleMailClick = (data: string) => {
    props.onMailClick(data);
  };

  return (
    <div className='2xl:w-[60%] xl:w-[70%] lg:w-[80%] w-[100%] sm:mx-5 mx-0'>
      <div className="flex bg-BLACK_303 md:bg-inherit md:w-full mx-5 sm:mx-0 flex-col items-start md:backdrop-blur-none px-5 py-8 rounded-3xl md:rounded-none">
        <p className="self-stretch text-[color:var(--Pure-White,#FFF)] text-2xl not-italic font-semibold !leading-[normal]">
          Hi, Welcome back
        </p>
        <p className="mt-[15px] self-stretch text-[color:var(--Secondary-Text,#777E90)] text-sm not-italic font-medium !leading-[normal]">
          You're just a step away from seamless transactions.
        </p>
        <div className='w-full mt-[40px] md:mt-[50px]'>
          {/* <PhoneWithCountryCode value={phone} onChange={handlePhoneChange} /> */}
          <PhoneWithCountryCode
            value={phone}
            onChange={(e) => {
              setPhoneCode(e?.phoneCode)
              setPhone(e?.value)
            }}
            placeholder='Phone number'
          />
        </div>
        <button
          onClick={handleClick}
          className="font14SB bg-BLUE_201 mt-[30px] text-white flex justify-center items-center gap-2.5 self-stretch h-[48px] px-[100px] rounded-[5px]">
          Continue
        </button>
        <ContinueWithEmailorPhone onClick={handleMailClick} currentSelection={PHONE} />
      </div>
      <div className='h-5' />
    </div>
  );
};

export default LoginWithPhone;
