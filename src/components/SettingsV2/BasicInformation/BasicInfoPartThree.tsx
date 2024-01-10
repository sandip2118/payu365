import React, { useState } from 'react'
import BasicInfoHeader from '../SettingsCommons/BasicInfoHeader'
import InputField from '../../Common/InputField'

function BasicInfoPartThree() {
  const [email,setEmail] = useState<string>('');

  return (
<div className='bg-[#1C1C24] w-100% px-4 md:rounded-[5px]'>
<BasicInfoHeader title='Email Address' description='Use your email to protect your account and transactions.' buttonText='Manage' buttonColor='grey'/>

      <div className='flex justify-between items-center py-[20px]'>
        <div className='w-full md:w-1/2'>
          <div className='flex justify-between md:justify-start items-center mb-[10px]'>
            <div className='font12RB text-white  px-1'>Email address</div>
            <div className='md:hidden flex'><button className='font12RB text-GRAY_101 rounded-[40px]  border border-GRAY_101 w-[130px] h-[28px]'><span className='pr-4'>!</span>Verified</button></div>
          </div>
          <div className='w-[100%]'>
          <InputField 
        type="text" 
        placeholder="example@gmail.com" 
        onChange={(e) => setEmail(e.target.value)} 
        value={email} 
      />
          </div>
        </div>

        <div className='hidden md:flex'><button className='font12RB text-GRAY_101 rounded-[40px]  border border-GRAY_101 w-[130px] h-[28px]'><span className='pr-4'>!</span>Verify Email</button></div>
      </div>
    </div>
  )
}

export default BasicInfoPartThree