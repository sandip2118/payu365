import Image from 'next/image'
import React from 'react';
import { DevicesProps } from '../types';


function Devices({sessions,device,platform,onClick,isActive}: DevicesProps) {
  return (
    <div className='flex bg-[#292932] px-[15px] py-[15px] md:px-[20px] md:py-[17px] rounded-[12px]' onClick={onClick}>
      <div className='flex gap-[10px] w-[60%] md:w-1/2  items-center'>
          <div className='w-[30px] h-[30px] md:w-[40px] md:h-[40px] bg-[#44444F] justify-center items-center flex rounded-full md:rounded-[100px]'>
          <Image  src='/assets/icons/devices.svg' alt='profile' width={14} height={19} className='md:w-[14px] md:h-[19px] h-[15px] w-[15px]' />
          </div>
       <div className='grid gap-[3px] md:gap-[10px]'>
          <p className='text-[13px] md:text-[14px] text-white  font-[600] '>{platform}</p>
          <p className='text-[11px] md:text-[12px]  text-GRAY_101 font-[400]'>{sessions} session on {platform} </p>
       </div>
      </div>

      <div className='flex justify-start md:justify-center w-[20%] md:w-1/3 ml-[3px] md:ml-[0px] '>
        <p className='text-[12px] md:text-[14px] text-white  font-[600] flex items-center'>{device}</p>
      </div>

     {isActive ? 
        <div className='flex  w-[20%] md:w-1/3 justify-end items-center'>
           <Image  src='/assets/icons/activeDevice.svg' alt='profile' width={16} height={16} className='rounded-full' />
        </div> 
      :
        <div className='flex w-[20%] md:w-1/3 justify-end items-center'>
          <Image  src='/assets/icons/inactiveDevice.svg' alt='profile' width={16} height={16} className='rounded-full' />
        </div>
}
    </div>
  )
}

export default Devices