/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../Common/Card'
import Icons from '@/assets/icon';
import { toast } from 'react-toastify';

function TransferComp({ arr }: any) {
  const router = useRouter();
  return (
    <div className='sm:flex sm:flex-wrap gap-5 overflow-x-auto grid grid-cols-3 justify-between'>
      {arr?.map((d: any, i: number) => {
        return (
          <div key={i} className='sm:px-[15px] px-[5px] items-center flex flex-col py-2'>
            <img src={'/assets/images/rc.png'} alt='profile' className='flex w-[50px] h-[50px] rounded-full bg-GRAY_101 justify-center items-center' />
            <p className='font14RB mt-[5px]'>
              {d.name}
            </p>
            <p className='font12RB text-GRAY_101 mt-1'>
              {d.acNo}
            </p>
          </div>
        )
      })}
    </div>
  );
}

export default TransferComp;
