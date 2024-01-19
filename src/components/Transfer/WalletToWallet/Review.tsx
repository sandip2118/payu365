/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../../Common/Card'
import Icons from '@/assets/icon';
import { toast } from 'react-toastify';

function Review({ activeStep, _activeStep }: any) {
  const router = useRouter();
  const handleClick = () => {
    _activeStep(activeStep + 1)
    toast.success('Money Transfer Successful')
  }

  const LightBox = ({ children }: any) => {
    return (
      <div className='bg-BLACK_304 mb-[20px] border border-BLACK_306 px-[15px] py-[10px] rounded-[10px]'>
        {children}
      </div>
    )
  }

  const Items = ({ title, value, subAmount, className }: any) => {
    return (
      <div className={`flex items-center  ${className}`}>
        <p className='sm:w-[132px] w-[100px] font12R text-GRAY_102'>{title}</p>:
        <p className='font12RB ml-[15px] mr-[5px] max-w-[130px] xs:max-w-xs overflow-hidden text-ellipsis whitespace-nowrap'>{value}
          {' '} <span className='text-YELLOW_02 xs:hidden block'>{subAmount}</span>
        </p>
        <p className='hidden xs:block font12RB text-YELLOW_02 xs:max-w-xs overflow-hidden text-ellipsis whitespace-nowrap'>
          {subAmount}
        </p>
      </div>
    )
  }

  return (
    <div className='min-w-full lg:min-w-[580px] lg:w-[580px] w-auto mt-[30px]'>
      <Card className='sm:px-5 px-[10px]'>
        <div className='flex bg-YELLOW_03 sm:px-5 px-[10px] py-[10px] rounded-lg mb-5'>
          <div className='sm:mr-[15px] mr-[10px] mt-[5px]'>
            <Icons.Warning />
          </div>
          <p className='font14RB !leading-[22px]'>You have requested to transfer money from
            <span className='text-YELLOW_02 '> [Active wallet] </span>
            to Jack Dawson. Please verify and confirm before proceeding to complete this transaction.</p>
        </div>

        <LightBox>
          <div className='flex justify-between'>
            <p className='font12SMB'>Wallet Holder Information</p>
            <button className='font12SMB text-BLUE_201'>Edit</button>
          </div>
          <Items title={'Name'} value={'Jack Dawson'} className='mt-[13px] mb-[5px]' />
          <Items title={'Recipient Email'} value={'jackdawson99@gmail.com'} className='mb-[5px]' />
          <Items title={'Mobile Number'} value={'+91 81407 43288'} className='mb-[5px]' />
          <Items title={'Wallet ID'} value={'Wallet ID'} />
        </LightBox>
        <LightBox>
          <div className='flex justify-between'>
            <p className='font12SMB'>Payment Transfer information</p>
            <button className='font12SMB text-BLUE_201'>Edit</button>
          </div>
          <Items title={'Currency'} value={'USD'} className='mt-[13px] mb-[5px]' />
          <Items title={'Total Amount'} value={'₹10,000 INR'} subAmount={'≈ $119.99 USD'} className='mb-[5px]' />
          <Items title={'Processing Fee'} value={'NA'} />
        </LightBox>
        <div>
          <button
            onClick={handleClick}
            className="font14SB bg-BLUE_201 w-full mt-[25px] text-white flex justify-center items-center self-stretch h-[48px] font-semibold rounded-[5px]"
          >
            Confirm
          </button>
        </div>
      </Card>
    </div>
  );
}

export default Review;
