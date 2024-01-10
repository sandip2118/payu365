import React from 'react'
import CardWrapper from '../SettingsCommons/CardWrapper'
import Image from 'next/image'

const securityChecks = [
  {
    title: 'Two-Factor Authentication (2FA)',
    checked: true,
    underline:false,
  },
  {
    title: 'Phone Number',
    checked: true,
    underline:false,
  },
  {
    title: 'Email Address',
    checked: false,
    underline:true,
  },
  {
    title: 'Withdrawal Whitelist',
    checked: false,
    underline: true,
  },
];

function PartOne() {
  return (
    <CardWrapper>
       <div className='flex md:items-center  items-start pb-[20px] gap-5 py-[20px] border-b-[1px] border-[#44444F]'>
        <div className='mt-2 md md:mt-0'>
          <Image src='/assets/icons/securityIcon.svg' alt='img' width={56} height={56} />
        </div>
       <div className='grid text-start gap-[10px]'>
          <div className=' font-[500] text-[16px] md:text-[20px] text-[#FA6C4C]'>Your account is not fully protected</div>
          <div className='font-[400] text-[12px] md:text-[14px] md:font-[500] text-GRAY_101'>The Security Checkup checked your account and found 2 recommended actions</div>
        </div>
       </div>

       <div className='flex flex-wrap gap-5 mt-5'>
        {securityChecks.map((item,index)=>(
          <div className='flex gap-2' key={index}>
            {(item.checked ? <Image src='/assets/icons/checked.svg' alt='img' width={15} height={15} /> : <Image src='/assets/icons/notChecked.svg' alt='img' width={15} height={15} />)}
            <p className={`font12RB text-white ${item.underline ? 'underline' : ''}`}>{item.title}</p>
          </div>
        ))}
       </div>
    </CardWrapper>
  )
}

export default PartOne