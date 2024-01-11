import Image from 'next/image'
import React from 'react'
import Header from '../SettingsCommons/Header'
import ReferralComponent from './ReferralComponent'

function SelectOptions() {
  const handleClick = () => {
    return;
  };
  
  return (
    <div className='bg-[#1C1C24] px-4 md:rounded-[5px] pb-[20px]'>

     <div className='border-b-[1px] border-[#44444F] '>
        <Header title='Select your Options' description='Earn up to 40% commission on every trade across Digipay.' />
      </div>
      
     <ReferralComponent    onClick={handleClick}  title='Referral ID'   description="Share your Referral ID to your network"  referralData='748219454' />
     <ReferralComponent    onClick={handleClick}   title='Referral Link'   description="Share your Referral Link to your anyone of your network"  referralData='https://accoubt...=748219454' />

      <div className='flex gap-[20px] mt-[20px]'>
      <button className='font12RB text-white bg-[#F59C26] rounded-[5px] w-full md:w-[140px] h-[40px] flex justify-center items-center'>
            <p>Invite Friends</p>
          </button>
          <button className='font12RB text-white bg-[#292932] rounded-[5px] w-full md:w-[131px] h-[40px] flex justify-center gap-[10px] items-center'>
          <Image  src='/assets/icons/qrCode.svg' alt='img' width={15} height={15}/>
            <p>Scan  QR</p>
          </button>
      </div>
    </div>
  )
}

export default SelectOptions