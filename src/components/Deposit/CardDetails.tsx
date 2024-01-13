import React from 'react'
import Page from '../Common/Page'
import CardInputField from './DepositCommons/CardInputField';
import CardWrapper from './DepositCommons/CardWrapper';
import DepositHeader from './DepositCommons/DepositHeader';
import DepositFooter from './DepositCommons/DepositFooter';

function CardDetails() {
  return (
    <div>
      <Page title='Card Details' isBreadcrumbs >
      <CardWrapper>
        <DepositHeader title='Deposit Money' description='Save your card to easily add money to your PayU365 wallet.All major cards accepted'/>
        <CardInputField />
         <DepositFooter />
      </CardWrapper>
      </Page>
    </div>
  )
}

export default CardDetails;