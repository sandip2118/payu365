import React from 'react'
import { DepositeaderProps } from '../types'

function DepositHeader({description,title}:DepositeaderProps) {
  return (
    <div className='grid gap-5 w-full'>
      <p className='text-[20px] md:text-[24px] font-[600] md:font-[700] text-center'>{title}</p>
      <p className='font14R text-center text-GRAY_101 flex flex-wrap lg:w-[80%]  xl:w-[75%] mx-auto '>{description}</p>
    </div>
  )
}

export default DepositHeader