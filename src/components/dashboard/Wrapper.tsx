/* eslint-disable complexity */
import React from 'react'
import { useRouter } from 'next/router'
import { DashboardWrapper } from './types'
import BuySale from '../Common/BuySale'
import Page from '../Common/Page'
import EsBalance from './EsBalance'
import LetStart from './LetStart'
import MarketRate from './MarketRate'
import RecentTrans from '../Common/RecentTrans'
import PaymentAnalytics from './PaymentAnalytics'
import PaymentAccount from './PaymentAccount'
import QuickTransfer from './QuickTransfer'

function Wrapper({ title }: DashboardWrapper) {
  const router = useRouter()

  return (
    <Page title={'Dashbord'} className={'md:w-[calc(100%-224px)]'}>
      <div className="mx-5">
        <div className="block gap-[20px] lg:flex">
          <div className="w-full lg:w-3/5">
            <LetStart />
            <EsBalance heading={'Estimated Balance'} />
            <div className='mt-5'>
              <MarketRate />
            </div>
            <div className='mt-5'>
              <RecentTrans />
            </div>
          </div>
          <div className="w-full lg:w-2/5">
            <PaymentAnalytics />
            <PaymentAccount />
            <QuickTransfer />
            <BuySale />
          </div>
        </div>
      </div>
    </Page>
  )
}

export default Wrapper
