import Page from '@/components/Common/Page';
import DepositHeader from '../DepositCommons/DepositHeader';
import CardWrapper from '../DepositCommons/CardWrapper';
import DepositFooter from '../DepositCommons/DepositFooter';
import OptionPills from './OptionPills';
import DepositBreadCrumbs from '../DepositCommons/DepositBreadCrumbs';

function CardOptions() {

  return (
     <div>
<Page title='Deposit'>
       <DepositBreadCrumbs first="Card Options" />
       <CardWrapper>
       <DepositHeader  title='Select Card Options' description='Save your card to easily add money to your PayU365 wallet.All major cards accepted'/>
       <div className='xxs:w-[340px] xs:w-[355px] sm:w-[90%] lg:w-[580px] mx-auto'>
       <OptionPills  />
       </div>
       <DepositFooter />
       </CardWrapper>
 </Page>
    </div>
  )
}

export default CardOptions;