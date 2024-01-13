/* eslint-disable complexity */
import React from 'react';
import { useRouter } from 'next/router';
import ProgressBar from "@ramonak/react-progress-bar";
import { colors } from '../../themes';
import Skeleton from '../Common/Skeleton';

function LetStart() {
  const router = useRouter();
  return (
    <div className=' bg-YELLOW_01 w-full rounded-[12px] pt-[5px] mt-[20px] '>
      <div className='lg:flex block bg-BLACK_301 w-full rounded-[10px] pt-[15px] pb-[20px]'>
        <div className='lg:w-1/2 w-full px-5'>
          <p className='font20SB'>Let’s start setting up</p>

          <p className='font20SB'>your Wallet</p>
          <div className='lg:w-[80%] w-full mt-5'>
            <ProgressBar completed={20} height={'10px'} labelSize={'0px'} bgColor={'#F59D31'} baseBgColor={'#44444F'} />
            <p className='text-GRAY_101 font14SB mt-[5px]'>1 of 4 completed</p>
          </div>
        </div>
        <div className='lg:w-1/2 w-full px-5 mt-5 lg:mt-0'>
          <div className='w-full h-12 flex justify-between items-center bg-BLACK_304 rounded-xl px-5'>
            <p className='font14SB'>Basic details</p>
            <p className='font12R text-GRAY_101'>1 steps | 1 min</p>
          </div>

          <div className='w-full bg-BLACK_304 rounded-xl mt-5'>
            <div className='flex py-[15.5px] px-5 justify-between items-center'>
              <p className='font14SB'>KYC verification</p>
              <p className='font12R text-GRAY_101'>3 steps | 5 min</p>
            </div>
            <div className='py-[5px] bg-BLACK_306 rounded-b-xl'>
              <p className='font12R text-RED_01 text-center mx-5'>Complete KYC to unlock more Features</p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className='lg:flex block bg-BLACK_301 w-full rounded-[10px] pt-[15px] pb-[20px]'>
        <div className='lg:w-1/2 w-full px-5'>
          <Skeleton className="w-[200px] h-[22px] bg-BLACK_306 rounded-md" />
          <Skeleton className="w-[110px] h-[22px] bg-BLACK_306 rounded-md mt-1" />

          <div className='lg:w-[80%] w-full mt-5'>
            <Skeleton className="w-full h-[10px] bg-BLACK_306 rounded-md" />
            <Skeleton className="w-[110px] h-[12px] bg-BLACK_306 rounded-md mt-[7px]" />
          </div>
        </div>
        <div className='lg:w-1/2 w-full px-5 mt-5 lg:mt-0'>
          <Skeleton className="w-full h-12 bg-BLACK_306 rounded-md" />

          <div className='w-full bg-BLACK_304 rounded-xl mt-5'>
            <Skeleton className="w-full h-11 bg-BLACK_306 rounded-md" />
            <Skeleton className="w-full h-[25px] bg-BLACK_306 rounded-md mt-[4px]" />
          </div>
        </div>
      </div> */}

    </div>
  );
}

export default LetStart;
