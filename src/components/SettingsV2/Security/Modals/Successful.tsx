import Image from 'next/image'
import React from 'react'
import { SuccessComponentProps } from '../../types'
import { useRouter } from 'next/router'

function Successful({title,description,route,buttonText}:SuccessComponentProps) {
  const router = useRouter();

  const reLogin = () =>{
   router.push(`/${route}`)
  }
  return (
    <div className=' py-[30px] md:py-[95px] px-[20px] sm:px-[60px] grid gap-5 '>
      <div className='flex justify-center'>
      <Image  src='/assets/icons/success.svg' width={70} height={67} alt='img' className='sm:w-[108px] sm:h-[97px]'/>
      </div>

      <div>
        <p className='font-[700]  text-[18px] sm:text-[24px] text-white  text-center px-4'>{title}</p>
      </div>

      <div>
        <p className='text-GRAY_101 font14RB text-center px-4'>{description}</p>
      </div>

      <div className='mt-2.5'>
        <button className='bg-BLUE_201 h-[48px] w-full font14SB rounded-[5px] text-white' onClick={reLogin}>{buttonText}</button>
      </div>

    </div>
  )
}

export default Successful