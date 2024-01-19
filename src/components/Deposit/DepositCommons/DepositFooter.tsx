import Image from 'next/image';

function DepositFooter() {
  return (
    <div className='grid gap-[25px] mt-10 mb-[111px] md:mb-0'>
      <p className='font14RB text-GRAY_101 text-center'>We accept these methods</p>
      <div className='flex gap-[41px] justify-center'>
        <Image src='/assets/images/visa.png' alt='img' width={67} height={25} className='h-[25px]' />
        <Image src='/assets/icons/masterCard.svg' alt='img' width={42} height={25} className='h-[25px]'  />
        <Image src='/assets/images/upi.png' alt='img' width={70} height={25}  className='h-[25px]' />
      </div>
    </div>
  )
}

export default DepositFooter;