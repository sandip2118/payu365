import Image from 'next/image'
import React, { useState } from 'react'



function ConnectMetamask() {
  const [isConnected, setIsConnected] = useState<boolean>(false);

  const handleConnectClick = () => {
    setIsConnected(!isConnected);
  };

  const handleDisConnectClick = () => {
    setIsConnected(!isConnected);
  };

  return (
    <div className='grid lg:flex '>
    <div className='w-full lg:w-1/2 grid gap-[10px]'>
      <div className='flex gap-[10px] items-center'>
            <Image src='/assets/icons/metamask.svg' alt='google' width={24} height={24} />
            <p className='font14RB text-white'> Connect with Metamask</p>
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

export default ConnectMetamask