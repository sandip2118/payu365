import React from 'react'

function ReferandEarn() {
  return (
    <div className='bg-[#1C1C24] px-4 md:rounded-[5px] pb-[20px] grid md:flex gap-[20px] items-center md:justify-between py-[20px]'>
      <div className='grid  md:justify-between gap-[20px] md:gap-[0px]'>
        <div className='grid gap-[10px]'>  
          <p className=' font-[500] text-[18px] md:text-[20px] text-white'>Refer Friends. Earn Money Together.</p>
          <p className='font-[400] md:font-[500] text-[13px] md:text-[14px] text-GRAY_101'>Earn up to 40% commission on every trade across Digipay.</p>
          </div>
        </div>

        <div className='bg-[#2A211B] text-white flex justify-between px-[40px] md:px-[30px] lg:px-[40px] py-[16px] rounded-[5px] gap-[20px] md:gap-[70px] lg:gap-[80px] xl:gap-[120px]'>
          <div className='grid  gap-[10px]'>
            <p className='font14SN'>You Receive</p>
            <p className='font20SMinB'>20%</p>
          </div>
          <div className='grid gap-[10px]'>
            <p className='font14SN'>Friends Receive</p>
            <p className='font20SMinB'>0%</p>
          </div>
        </div>
    </div>
  )
}

export default ReferandEarn