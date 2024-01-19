import React from 'react'
import Page from '../Common/Page';
import CardWrapper from './DepositCommons/CardWrapper';
import Successful from '../SettingsV2/Security/Modals/Successful';

function Success() {
  return (
    <div>
      <Page >
        <CardWrapper>
      <div className='h-[50vh] md:h-[max-content] grid items-center '>
      <div className=' bg-BLACK_301  rounded-[10px] w-[100%] sm:w-[430px]  gap-[30px]'>
       <Successful title='Deposit Successful' description='Transactions processed successfully' buttonText='View History' route='/transactions' />
       </div>
      </div>
        </CardWrapper>
      </Page>
    </div>
  )
}

export default Success