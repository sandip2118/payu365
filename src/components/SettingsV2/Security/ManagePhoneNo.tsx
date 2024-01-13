import React, { useState } from 'react'
import CardWrapper from '../SettingsCommons/CardWrapper'
import BasicInfoHeader from '../SettingsCommons/BasicInfoHeader'
import PhoneWithCountryCode from '../../Login/PhoneWithCountryCode';

function ManagePhoneNo() {
  const [phone, setPhone] = useState<string | undefined>('');
  const [phoneCode, setPhoneCode] = useState<string | undefined>('');

  const handlePhoneChange = (newValue: string | undefined) => {
    setPhone(newValue);
  };

  return (
   <div className='md:mx-5'>
     <CardWrapper>
      <BasicInfoHeader title='Phone Number Verification' description='Verify & Edit your personal number for protection.' buttonColor='yellow'  buttonText='Edit'/>
     
   <div className='grid'>
   <div className='flex justify-between items-center pt-5 w-[100%] pb-2.5'>
        <div className='w-full md:w-1/2 '>
            <div className='flex justify-between md:justify-start mb-[10px] md:mb-[20px] items-center'>
              <div className='font12RB text-white   px-1 flex '>Phone number</div>
              <div className='md:hidden flex'><button className='font12RB text-[#23C38E] rounded-[40px]  border border-[#23C38E] w-[87px] h-[28px]'>Verified</button></div>
            </div>
            <div className='  items-center w-[100%] gap-[8px] flex'>
                <PhoneWithCountryCode
                  value={phone}
                  onChange={(e) => {
                    setPhoneCode(e?.phoneCode)
                    setPhone(e?.value)
                  }}
                  placeholder='81*** ***88'
                />
              </div>
            </div>
            <div className='hidden md:flex'><button className='font12RB text-[#23C38E] rounded-[40px]  border border-[#23C38E] w-[87px] h-[28px]'>Verified</button></div>
          </div>

          <div className='grid'>
            <p className='text-GRAY_101 font14SN'>Added: April 4, 2021</p>
          </div>
        </div>
      </CardWrapper>
    </div>
  )
}

export default ManagePhoneNo;