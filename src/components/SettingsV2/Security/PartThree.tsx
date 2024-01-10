import React, { useState } from 'react'
import Header from '../SettingsCommons/Header'
import CardWrapper from '../SettingsCommons/CardWrapper'
import Image from 'next/image'

function PartThree() {
  const [oneStep,setIsOneStep] = useState<boolean>(true); 
  const [whiteList,setWhitelist] = useState<boolean>(false);

  const setOneStepOn =()=>{
    setIsOneStep(!oneStep);
  }
  const setWhitelistOn =()=>{
    setWhitelist(!whiteList);
  }

 
  return (
    <CardWrapper>
       <Header title='Advanced Security' description='Limit your Boundary with some advance security to manage account securely.' isBorder={true}/>
       <div>

       <div className=' grid md:flex justify-between items-center pt-[20px] pb-[10px] border-b-[1px] border-[#44444F] gap-[17px] md:gap-[0px]'>
                <div className='grid text-start gap-[10px]'>
                  <div className='flex gap-2.5 items-center] text-white font14SB items-center'>
                    <Image  src='/assets/icons/connections.svg'  alt='img' width={24} height={24}/>
                    <p>Accounts Connections</p>
                  </div>
                  <div className='text-GRAY_101 font12R w-full md:w-5/6 lg:w-3/4 font14RB'>Use a third-party account, such as your AppleID or Google account to login to your DigiPay account</div>
                </div>

       <div className=''>
         <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] md:w-[87px] w-full h-[28px]'>Manage</button>
       </div>
  </div>



     <div className='flex gap-2.5 items-center py-5 '>
       <Image src='/assets/icons/moneyWithdraw.svg' alt=''  width={24} height={24}/>
        <p className='font14SB  text-white'>Money Withdrawal</p>
     </div>

    <div className='grid lg:flex pl-[32px] lg:items-center pb-5'>
    <div className='w-full lg:w-1/2 grid gap-[10px] md:pr-[60px] lg:pr-[80px]'>
      <div className='flex items-center'>
            <p className='font14SB text-white'>One-step Withdrawal</p>
      </div>
      <div><p className='text-GRAY_101 font12R'>When this function is turned on, you can withdraw small amount crypto to whitelisted addresses without passing 2FA verification</p></div>
    </div>


   {oneStep ?  <div className='w-full lg:w-1/2 flex items-center justify-between mt-[20px] lg:mt-0'>
      <div className='flex justify-start gap-[10px]'>
         <Image src='/assets/icons/checked.svg' alt='Checked' width={15} height={15} />
        <p className='font12RB text-white'>On</p>
      </div>
      <div className='flex justify-end'>
        <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[87px] h-[28px]' onClick={setOneStepOn}>Disable</button>
      </div>
    </div> 
    :
    <div className='w-full lg:w-1/2 flex items-center justify-between mt-[20px] lg:mt-0'>
    <div className='flex justify-start gap-[10px]'>
    <Image src='/assets/icons/notChecked.svg' alt='Not Checked' width={15} height={15} />
      <p className='font12RB text-white'>Off</p>
    </div>
    <div className='flex justify-end'>
      <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[87px] h-[28px]' onClick={setOneStepOn}>Enable</button>
    </div>
  </div>
  }
  </div>


  <div className='grid lg:flex pl-[32px] lg:items-center pb-5'>
    <div className='w-full lg:w-1/2 grid gap-[10px] md:pr-[60px] lg:pr-[80px] '>
      <div className='flex items-center'>
            <p className='font14SB text-white'>Withdrawal Whitelist</p>
      </div>
      <div><p className='text-GRAY_101 font12R'>Once this function is enabled, your account will only be able to withdraw to addresses on your whitelist.</p></div>
      <div><p className='font12SMB text-[#F59D31] underline'>Address Management</p></div>
    </div>


   {whiteList ?  <div className='w-full lg:w-1/2 flex items-center justify-between mt-[20px] lg:mt-0'>
      <div className='flex justify-start gap-[10px]'>
         <Image src='/assets/icons/checked.svg' alt='Checked' width={15} height={15} />
        <p className='font12RB text-white'>On</p>
      </div>
      <div className='flex justify-end'>
        <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[87px] h-[28px]' onClick={setWhitelistOn}>Disable</button>
      </div>
    </div> 
    :
    <div className='w-full lg:w-1/2 flex items-center justify-between mt-[20px] lg:mt-0'>
    <div className='flex justify-start gap-[10px]'>
    <Image src='/assets/icons/notChecked.svg' alt='Not Checked' width={15} height={15} />
      <p className='font12RB text-white'>Off</p>
    </div>
    <div className='flex justify-end'>
      <button className='font12RB text-[#B1B5C3] bg-[#48546D] rounded-[5px] w-[87px] h-[28px]' onClick={setWhitelistOn}>Enable</button>
    </div>
  </div>
  }
  </div>
       </div>
    </CardWrapper>
  )
}

export default PartThree