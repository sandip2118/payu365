import Image from 'next/image'
import React from 'react'
import { specificDevices } from '../types'


function Sessions({location,platform,tag,device,isActive,activeSession }:specificDevices) {
  return (
    <div className='grid border-[1px] bg-[#292932] border-[#44444F] py-[10px] px-[15px] gap-[10px] rounded-[10px] mt-[20px]'  onClick={(e: React.MouseEvent) => e.stopPropagation()}>
      <div className='flex justify-between items-center'>
        <div className='flex gap-[20px] items-center'>
          <p className='text-white text-[12px] font-[700]'>{device}</p>
             {tag? <div className='w-[53px] h-[23px] text-white font-[500] text-[11px] bg-[#267FF5] rounded-[40px] flex justify-center items-center'>New</div>: <div></div>}
        </div>
        <div><p className='text-[14px] font-[600] text-[#267FF5]'>Edit</p></div>
      </div>

      <div className='grid gap-[10px] font12RB'>
        <div className='flex'>
          <p className='w-[120px] flex text-start font12R text-[#B1B5C3]'>Location</p>
          <p className='pr-[15px] text-GRAY_102'>:</p>
          <p className='text-white'>{location}</p>
        </div>
        <div className='flex'>
          <p className='w-[120px] flex text-start font12R text-[#B1B5C3]'>Platform</p>
          <p className='pr-[15px] text-GRAY_102'>:</p>
          <p className='text-white'>{platform}</p>
        </div>

      </div>


    {activeSession ?   <div className='flex gap-[10px]'>
        <Image src='/assets/icons/checked.svg'alt='connected' width={15} height={15} /> 
        <p className='font12RB text-white'>Your current session</p>
      </div>  
      :
      <div className='flex gap-[10px]'>
      <Image src='/assets/icons/notChecked.svg'alt='connected' width={15} height={15} /> 
      <p className='font12RB text-white'>Signed Out</p>
    </div>
    }
    </div>
  )
}

export default Sessions