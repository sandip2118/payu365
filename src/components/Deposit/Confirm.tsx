import React, { useEffect, useState } from 'react'
import Page from '../Common/Page'
import { useRouter } from 'next/router';
import DepositButton from './DepositCommons/DepositButton';
import DepositHeader from './DepositCommons/DepositHeader';
import CardWrapper from './DepositCommons/CardWrapper';
import ReviewComponent from './DepositCommons/ReviewComponent';
import DepositBreadCrumbs from './DepositCommons/DepositBreadCrumbs';

function Confirm() {
  const router = useRouter();

  return (
    <div>
      <Page title='Deposit' >
        <DepositBreadCrumbs first='Card Options' second='Amount' third='Confirm' />
        <CardWrapper >
          <div className='grid gap-[30px] '>
            <div className='w-full lg:w-[540px] flex justify-center'>
              <DepositHeader title='Review Deposit Money' description='Please Confirm the amount you are depositing to your wallet.' />
            </div>

            <div className='sm:w-[430px] w-[100%] mx-auto grid gap-[30px]'>
              <div className='grid  bg-BLACK_301 px-[15px] pb-2.5 md:px-0 lg:px-0 rounded-[10px] '>

                <div>
                  <ReviewComponent description='For Investment' moneyArrives='Instant' amountToDeposit='₹300,000 INR' fee='₹6,300 INR' />
                </div>

              </div>

              <DepositButton buttonText='Confirm' width='100%' onClick={() => router.push('/deposit/success')} />
            </div>

          </div>

        </CardWrapper>
      </Page>

    </div>
  )
}

export default Confirm