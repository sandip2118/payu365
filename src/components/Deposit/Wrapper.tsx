import React from 'react';
import Page from '../Common/Page';
import CardWrapper from './DepositCommons/CardWrapper';
import DepositHeader from './DepositCommons/DepositHeader';
import DepositFooter from './DepositCommons/DepositFooter';
import Image from 'next/image';
import DepositButton from './DepositCommons/DepositButton';
import { useRouter } from 'next/router';
import DepositBreadCrumbs from './DepositCommons/DepositBreadCrumbs';

function Wrapper() {
  const router = useRouter();
  

  return (
    <Page title={'Deposit'} balance='₹0 INR'>
    <DepositBreadCrumbs  />
    <CardWrapper >
  <DepositHeader  title='Deposit Money' description='Save your card to easily add money to your PayU365 wallet.All major cards accepted'/>
  <div className=' rounded-[20px]  p-[30px] mx-auto  grid gap-[15px] mt-[30px]'   style={{ backgroundImage: `url('/assets/images/depositBackground.png')`, backgroundSize: 'cover', backgroundPosition: 'center' }}>

    <div className='flex gap-[9px] items-start'>
      <Image  src='/assets/icons/depositTick.svg' alt='' width={17} height={17}/>
      <p className='font14R text-white'>You have an account, but you need to money it, <span className='font14700'>Right ?</span></p>
    </div>

        <div className='flex  gap-[9px] items-start'>
      
        <Image  src='/assets/icons/depositTick.svg' alt='' width={17} height={17}/>
          <div className='flex flex-wrap items-start gap-[9px]'>
         <p className='font14R text-white'>Fee: <span className='font14700'>2.10%</span> and Instant Deposit</p>
      
        <p className='bg-YELLOW_01 text-BLACK_303 font10R px-[6px] py-1 flex items-center place-content-center rounded-[80px] flex-nowrap'>lesser than other</p> 
          </div>
       </div>
  
       <div className='flex gap-[9px] items-start'>
         <Image  src='/assets/icons/depositTick.svg' alt='' width={17} height={17}/>
         <p className='font14R text-white'>No hidden charges</p>
       </div>

       <div className='flex gap-[9px] items-start'>
         <Image  src='/assets/icons/depositTick.svg' alt='' width={17} height={17}/>
         <p className='font14R text-white'>Simple, transparent and secure</p>
       </div>

     <div className='mt-[15px] flex justify-start md:justify-center'>
     <DepositButton buttonText='Deposit Now'  width='163px' onClick={()=>router.push('deposit/cardOptions')}/>
     </div>
     
  </div>

  <DepositFooter />
    </CardWrapper>
    </Page>
  )
}

export default Wrapper;