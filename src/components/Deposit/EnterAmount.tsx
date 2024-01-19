import React, { useEffect, useState } from 'react'
import Page from '../Common/Page';
import CardWrapper from './DepositCommons/CardWrapper';
import AmountInputField from './DepositCommons/AmountInputField';
import DepositHeader from './DepositCommons/DepositHeader';
import CardComponent from './DepositCommons/CardComponent';
import InputField from '../Common/InputField';
import DepositButton from './DepositCommons/DepositButton';
import { useRouter } from 'next/router';
import DepositBreadCrumbs from './DepositCommons/DepositBreadCrumbs';

function EnterAmount() {
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
    <div>
      <Page title='Deposit'>
        <DepositBreadCrumbs first='Card Options' second='Amount' />
        <CardWrapper >
          <div className='grid gap-[30px]'>
            <DepositHeader title='Deposit Money' description='Save your card to easily add money to your PayU365 wallet.All major cards accepted' />

            <div className='sm:w-[430px] w-[100%] mx-auto grid gap-[30px]'>
              <div className='grid  bg-BLACK_301 pb-5 px-5  rounded-[10px] '>
                <div>
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

                {selectedItem?.email ?
                  <div className='grid gap-2.5 mb-5'>
                    <AmountInputField width='100%' />
                    <p className='font10RB flex justify-center text-GRAY_105 text-center px-5 md:px-10'>Enter the amount that you want to add in your wallet. You can transfer max upto 1 lac rupees.</p>
                  </div>
                  :
                  <div className='grid gap-2.5 mb-5'>
                    <AmountInputField width='100%' />
                    <p className='font10RB flex justify-center text-GRAY_105 text-center px-5 md:px-10'>Enter the amount that you want to add in your wallet</p>
                  </div>
                }

                <div>
                  <InputField type='text' placeholder='Enter Description (optional)' />
                </div>

              </div>

              <DepositButton
                buttonText='Next'
                width='100%'
                onClick={() => router.push({
                  pathname: 'confirm',
                  query: { details: JSON.stringify(selectedItem) }
                })}
              />

            </div>

          </div>

        </CardWrapper>
      </Page>
    </div>
  )
}

export default EnterAmount;