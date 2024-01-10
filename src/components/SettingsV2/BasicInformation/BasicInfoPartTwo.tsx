import PhoneWithCountryCode from '@/components/Login/PhoneWithCountryCode';
import React, { useState } from 'react';
import BasicInfoHeader from '../SettingsCommons/BasicInfoHeader';

function BasicInfoPartTwo() {
  const [phone, setPhone] = useState<string | undefined>('');
  const [phoneCode, setPhoneCode] = useState<string | undefined>('');

  const handlePhoneChange = (newValue: string | undefined) => {
    setPhone(newValue);
  };
  return (
    <div className='bg-[#1C1C24]  px-4 md:rounded-[5px]'>
      <BasicInfoHeader title='Mobile Number' description='Verify & Edit your personal number for protection.' buttonText='Manage' />
      <div className='flex justify-between items-center py-[20px] w-[100%]'>
        <div className='w-full'>
          <div className='flex justify-between md:justify-start mb-[10px] md:mb-[20px] items-center'>
            <div className='font12RB text-white  mb-[-10px]  px-1 flex '>Phone number</div>
            <div className='md:hidden flex'><button className='font12RB text-[#23C38E] rounded-[40px]  border border-[#23C38E] w-[87px] h-[28px]'>Verified</button></div>
          </div>
          <div className='w-full items-center gap-[8px] flex'>
            <div className='w-full flex justify-between items-center'>
              <div className='w-full md:w-1/2'>
                <PhoneWithCountryCode
                  value={phone}
                  onChange={(e) => {
                    setPhoneCode(e?.phoneCode)
                    setPhone(e?.value)
                  }}
                />
              </div>
              <div className='hidden md:flex'><button className='font12RB text-[#23C38E] rounded-[40px]  border border-[#23C38E] w-[87px] h-[28px]'>Verified</button></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BasicInfoPartTwo;