import Page from '@/components/Common/Page';
import React from 'react'
import DepositHeader from '../DepositCommons/DepositHeader';
import CardWrapper from '../DepositCommons/CardWrapper';
import DepositFooter from '../DepositCommons/DepositFooter';
import OptionPills from './OptionPills';

function CardOptions() {
  return (
    <div>
      <Page title='Card Options' isBreadcrumbs>
<CardWrapper>
<DepositHeader  title='Select Card Options' description='Save your card to easily add money to your PayU365 wallet.All major cards accepted'/>
<OptionPills />
<DepositFooter />
</CardWrapper>
      </Page>
    </div>
  )
}

export default CardOptions;