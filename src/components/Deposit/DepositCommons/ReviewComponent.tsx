import React from 'react'
import { ReviewComponentProps } from '../types'
import CardComponent from './CardComponent'

function ReviewComponent({description,moneyArrives,amountToDeposit,fee}:ReviewComponentProps) {
  return (
    <div className='bg-BLACK_301 px-5 pb-5 rounded-[10px]'>
      <div>
        <CardComponent />
      </div>

        <div className={`bg-BLACK_304 w-full flex place-content-center items-center h-[47px] rounded-[10px] my-5`}>
     <div className='h-[15px] flex items-center justify-between '>
      <p className='text-end px-1 text-[12px] font-[500]'>₹3,00,000</p>
      <div className='border-l border-GRAY_101 text-GRAY_101 h-[15px]'>
        <p className='pl-2.5 text-start font12400'>INR</p>
      </div>
     </div>
    </div>

      <div className='h-[1px] bg-BLACK_306 w-full'></div>

      <div className='grid gap-2.5 mt-5'>
       <div className='flex justify-start  text-[12px] md:text-[14px]'>
        <p className='w-[138px] text-BLACK_308 font-[400] text-start'>Description</p>
        <p className='font-[400] text-GRAY_101'>:</p>
        <p className='text-white  font-[500] pl-5'>For Investment</p>
       </div>

       <div className='flex justify-start text-[12px] md:text-[14px]'>
        <p className='w-[138px] text-BLACK_308 font-[400] text-start'>Money arrives</p>
        <p className='font-[400] text-GRAY_101'>:</p>
        <p className='text-white  font-[500] pl-5'>Instant</p>
       </div>

       <div className='flex justify-start text-[12px] md:text-[14px]'>
        <p className='w-[138px] text-BLACK_308 font-[400] text-start'>Amount to deposit</p>
        <p className='font-[400] text-GRAY_101'>:</p>
        <p className='text-white  font-[500] pl-5'>₹3,00,000 INR</p>
       </div>

       <div className='flex justify-start flex text-[12px] md:text-[14px]'>
        <p className='w-[138px] text-BLACK_308 font-[400] text-start'>Processing fee</p>
        <p className='font-[400] text-GRAY_101'>:</p>
        <p className='text-white  font-[500] pl-5'>₹6,300 INR</p>
       </div>

      </div>
    </div>
  )
}

export default ReviewComponent