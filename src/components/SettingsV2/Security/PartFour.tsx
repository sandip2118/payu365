import React from 'react'
import Header from '../SettingsCommons/Header'
import CardWrapper from '../SettingsCommons/CardWrapper'
import Image from 'next/image'

function PartFour() {
  return (
    <CardWrapper>
        <Header title='Devices and Activities' description='Limit your Boundary with some advance security to manage account securely' isBorder={true}/>
       
        <div className=' grid md:flex md:justify-between items-center pt-[20px] pb-[10px] border-b-[1px] border-[#44444F] gap-[17px] md:gap-[0px] '>
                <div className='grid text-start gap-[10px]'>
                  <div className='flex gap-2.5 items-center] text-white font14SB items-center'>
                    <Image  src='/assets/icons/deviceMgt.svg'  alt='img' width={24} height={24}/>
                    <p>Device Management</p>
                  </div>
                  <div className='text-GRAY_101 font12R w-full '>Manage devices allowed to access your account.</div>
                </div>

       <div className=''>
         <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] md:w-[87px] w-full h-[28px]'>Manage</button>
       </div>
  </div>

  <div className=' grid md:flex md:justify-between items-center pt-[20px] pb-[10px] gap-[17px] md:gap-[0px]'>
                <div className='grid w-full text-start gap-[10px]'>
                  <div className='flex gap-2.5 items-center] text-white font14SB items-center'>
                    <Image  src='/assets/icons/accActivity.svg'  alt='img' width={24} height={24}/>
                    <p>Account Activity</p>
                  </div>
                  <div className='text-GRAY_101 font12R'>Last login: 2023-11-23 13:18:31</div>
                  <div className='text-GRAY_101 font12R w-full  flex gap-[10px] items-center'>Suspicious account activity?  <p className='font12SMB text-[#F59D31] underline'>Disable Account</p></div>
                </div>

       <div className=''>
         <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] md:w-[87px] w-full h-[28px]'>More</button>
       </div>
  </div>
    </CardWrapper>
  )
}

export default PartFour