import Image from 'next/image'
import React, { useState } from 'react'

function ConnectGoogle() {
  const [isConnected, setIsConnected] = useState<boolean>(true);

  const handleConnectClick = () => {
    setIsConnected(!isConnected);
  };

  const handleDisConnectClick = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className='grid lg:flex gap-[10px] md:gap-[0px] '>
      <div className='w-full lg:w-1/2 grid gap-[10px] md:pr-5 xl:pr-0'>
        <div className='flex gap-[10px] items-center'>
              <Image src='/assets/icons/google.svg' alt='google' width={24} height={24} />
              <p className='font14RB  text-white'> Connect with google</p>
              <div><p className='text-[#F59D31] font-[500] text-[12px] sm:text-[14px] px-[10px] sm:px-[15px] py-[5px] border border-[#F59D31] rounded-[40px]'>Recommended</p></div>
        </div>
        <div><p className='text-GRAY_101 font12R'>Stay connected with google to sync all contact informations</p></div>
      </div>


     {isConnected ?  <div className='w-full lg:w-1/2 flex items-center justify-between mt-[20px] lg:mt-0'>
        <div className='flex justify-start gap-[10px]'>
           <Image src='/assets/icons/checked.svg' alt='Checked' width={15} height={15} />
          <p className='font12RB text-white'>Connected</p>
        </div>
        <div className='flex justify-end'>
          <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[87px] h-[28px]' onClick={handleDisConnectClick}>Disconnect</button>
        </div>
      </div> 
      :
      <div className='w-full lg:w-1/2 flex items-center justify-between mt-[20px] lg:mt-0'>
      <div className='flex justify-start gap-[10px]'>
      <Image src='/assets/icons/notChecked.svg' alt='Not Checked' width={15} height={15} />
        <p className='font12RB text-white'>Not connected</p>
      </div>
      <div className='flex justify-end'>
        <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[87px] h-[28px]' onClick={handleConnectClick}>Connect</button>
      </div>
    </div>
    }
    </div>
  )
}

export default ConnectGoogle