import React from 'react'
import CardComponent from './CardComponent'
import { useRouter } from 'next/router';

function ReviewComponent() {
  const router = useRouter();
  const { details } = router.query;
  let selectedItem;
  if (details) {
    try {
      selectedItem = JSON.parse(details);
      console.log("selectedItem", selectedItem);
    } catch (error) {
      console.error("Error parsing details:", error);
    }
  }
  return (
    <div className='bg-BLACK_301 md:px-5 pb-0 rounded-[10px]'>
      <div className=''>
      {selectedItem?.email ?
      //  <div className='my-5'>
         <CardComponent 
          upi={true} 
          name={selectedItem?.name} 
          logo={selectedItem?.cardType} 
          email={selectedItem?.email} 
          background={false}
        />
      //  </div>
        :
        <CardComponent 
          background={false} 
          name={selectedItem?.name} 
          logo={selectedItem?.cardType} 
          expiry={selectedItem?.expiryDate} 
          accNo={selectedItem?.accountNumber} 
          cvv={false}
        />
      }
      </div>

        <div className={`bg-BLACK_304 w-full flex place-content-center items-center h-[47px] rounded-[10px] mb-5`}>
     <div className='h-[15px] flex items-center justify-between '>
      <p className='text-end px-1 text-[12px] font-[500] mr-2.5'>₹300,000</p>
      <div className='border-l border-GRAY_101 text-GRAY_101 h-[15px] ml-[-10px]'>
        <p className='pl-2.5 text-start font12400'>INR</p>
      </div>
     </div>
    </div>

      <div className='h-[1px] bg-BLACK_306 w-full'></div>

      <div className='grid gap-2.5 mt-5'>
       <div className='flex justify-start  text-[12px] md:text-[14px]'>
        <p className='w-[138px] text-GRAY_105 font-[400] text-start'>Description</p>
        <p className='font-[400] text-GRAY_101'>:</p>
        <p className='text-white  font-[500] pl-5'>For Investment</p>
       </div>

       <div className='flex justify-start text-[12px] md:text-[14px]'>
        <p className='w-[138px] text-GRAY_105 font-[400] text-start'>Money arrives</p>
        <p className='font-[400] text-GRAY_101'>:</p>
        <p className='text-white  font-[500] pl-5'>Instant</p>
       </div>

       <div className='flex justify-start text-[12px] md:text-[14px]'>
        <p className='w-[138px] text-GRAY_105 font-[400] text-start'>Amount to deposit</p>
        <p className='font-[400] text-GRAY_101'>:</p>
        <p className='text-white  font-[500] pl-5'>₹300,000 INR</p>
       </div>

       <div className='flex justify-start text-[12px] md:text-[14px]'>
        <p className='w-[138px] text-GRAY_105 font-[400] text-start'>Processing fee</p>
        <p className='font-[400] text-GRAY_101'>:</p>
        <p className='text-white  font-[500] pl-5'>₹6,300 INR</p>
       </div>

      </div>
    </div>
  )
}

export default ReviewComponent