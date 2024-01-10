import Image from 'next/image';
import CountryInfo from './CountryInfo';
import BasicInfoHeader from '../SettingsCommons/BasicInfoHeader';
import InputField from '@/components/Common/InputField';
import { useState } from 'react';

function BasicInfoPartOne() {
  const[firstName,setFirstName]= useState<string>('');
  const [lastName, setLastName] = useState<string>('');

  return (
    <div className='bg-[#1C1C24] px-4 md:rounded-[5px] pb-[20px]'>

    <div className='grid md:gap-[20px]'>
   <BasicInfoHeader title='Basic Information' description='View and update your account details' buttonText='Manage' buttonColor='grey'/>
  
      <div className='grid gap-[15px]  pb-[10px] md:pb-[0px]'> 
        <div>
          <p className='font14SB md:font14SB text-white'>Your Photo</p>
        </div>
      <div className='flex gap-[10px]'>
        <div><Image  src='/assets/images/profile.png' alt='profile' width={50} height={50} className='rounded-full'/></div>
        <div>
          <div className='flex gap-[8px] items-center font14SN '>
  <p className='text-[#267FF5] font14SB'>Upload new Photo</p>
  <div className='w-[5px] h-[5px] rounded-full bg-GRAY_101 '></div>
  <p className='text-[#FA6C4C]'>Remove photo</p>
          </div>
          <div><p className='font12R text-GRAY_101 py-2'>Photos help you other people trust</p></div>
        </div>
       </div>
      </div>
  
        <div className='grid md:flex md:justify-between gap-[25px]'>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white px-1'>First Name</label>
            <InputField 
        type="text" 
        placeholder="Enter name" 
        onChange={(e) => setFirstName(e.target.value)} 
        value={firstName} 
      />
          </div>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white px-1 '>Last Name</label>
            <InputField 
        type="text" 
        placeholder="Enter Last name" 
        onChange={(e) => setLastName(e.target.value)} 
        value={lastName} 
      />
          </div>
        </div>
  
        <div className='grid md:flex md:justify-between gap-[25px]'>
          <div className='grid text-start gap-[10px] w-[100%] pt-[25px] md:pt-[0px]'>
            <label className='font12RB text-GRAY_101 px-1 '> Country of Origin *</label>
            <div className=' flex items-center bg-[#292932] place-content-center rounded-[5px] '>
            <CountryInfo />
        </div>
          </div>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white px-1 '>Language</label>
        <div className=' flex items-center bg-[#292932] place-content-center rounded-[5px]'>
        <select className='w-[95%] md:w-[85%] h-[47px] font12R  flex items-center bg-[#292932] text-white focus:outline-none focus:border-none'>
          <option>English</option>
         </select>
        </div>
          </div>
          <div className='grid text-start gap-[10px] w-[100%]'>
            <label className='font12RB text-white  px-1'>Account Status</label>
            <div  className='text-[#23C38E] px-4 h-[47px] font12R rounded-[5px]  flex items-center bg-[#292932]'>Active</div>
          </div>
        </div>
    </div>
  
      </div>
  )
}

export default BasicInfoPartOne