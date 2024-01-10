/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../common/Card';

interface prop {
  onClick?: () => void
}

function BankDetails({ onClick }: prop) {

  const LightBox = ({ children }: any) => {
    return (
      <div className='bg-BLACK_304 mb-[20px] border border-BLACK_306 px-[15px] py-[10px] rounded-[10px]'>
        {children}
      </div>
    )
  }

  const Items = ({ title, value, className }: any) => {
    return (
      <div className=''>
        <div className={`flex items-center ${className}`}>
          <p className='w-[132px] font12R text-GRAY_102'>{title}</p>:
          <p className='font12RB mx-[15px]'>{value}</p>
        </div>
      </div>
    )
  }

  return (
    <div className='mb-5'>
      <Card>
        <p className='font18SB mb-[30px]'>Bank Detail Summary</p>
        <LightBox>
          <div className='flex justify-between'>
            <p className='font12SMB'>Bank Deatils:</p>
            <button className='font12SMB text-BLUE_201'>Edit</button>
          </div>
          <Items title={'Bank Country'} value={'India'} className='mt-[13px] mb-[10px]' />
          <Items title={'Currency'} value={'INR'} />
        </LightBox>
        <LightBox>
          <div className='flex justify-between'>
            <p className='font12SMB'>Account Holder Deatils:</p>
            <button className='font12SMB text-BLUE_201'>Edit</button>
          </div>
          <Items title={'Account Holder Name'} value={'Mitul K Jetani'} className='mt-[13px] mb-[10px]' />
          <Items title={'Mobile Number'} value={'+91 8140743288'} />
        </LightBox>
        <LightBox>
          <div className='flex justify-between'>
            <p className='font12SMB'>Account Details:</p>
            <button className='font12SMB text-BLUE_201'>Edit</button>
          </div>
          <Items title={'Bank Name'} value={'ICICI Bank'} className='mt-[13px] mb-[10px]' />
          <Items title={'Branch Name'} value={'Gujarat'} className='mb-[10px]' />
          <Items title={'Account No'} value={'15910511256'} className='mb-[10px]' />
          <Items title={'Swift/IFSC Code'} value={'ICICI001'} className='mb-[10px]' />
          <Items title={'Account Type'} value={'Saving'} />
        </LightBox>

        <div className="flex items-center ">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 leading-tight"
          />
          <p className='font12R text-GRAY_102'>I confirm the bank account details above same as per my declaration</p>
        </div>


        <div>
          <button
            onClick={() => onClick && onClick(1)}
            className="font14SB bg-BLUE_201 w-full mt-[30px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]"
          >
            Add bank account
          </button>
        </div>
      </Card>
    </div>
  );
}

export default BankDetails;
