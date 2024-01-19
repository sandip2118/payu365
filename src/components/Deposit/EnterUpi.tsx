import React from 'react'
import Page from '../Common/Page'
import DepositHeader from './DepositCommons/DepositHeader';
import DepositFooter from './DepositCommons/DepositFooter';
import CardWrapper from './DepositCommons/CardWrapper';
import UpiInputField from './DepositCommons/UpiInputField';
import DepositBreadCrumbs from './DepositCommons/DepositBreadCrumbs';

function EnterUpi() {
  return (
    <div>
      <Page title='Enter Upi'>
      <DepositBreadCrumbs first='Card Options'  second='Enter UPI'/>
        <CardWrapper>
        <DepositHeader title='Add New UPI Address' description='Save your card to easily add money to your PayU365 wallet.All major cards accepted'/>
        <UpiInputField />
         <DepositFooter />
        </CardWrapper>
      </Page>
    </div>
  )
}

export default EnterUpi;