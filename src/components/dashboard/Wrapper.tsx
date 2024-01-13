/* eslint-disable complexity */
import React, { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { DashboardWrapper } from './types'
import BuySale from '../Common/BuySale'
import Page from '../Common/Page'
import LetStart from './LetStart'
import EsBalance from './EsBalance'
import MarketRate from './MarketRate'
import RecentTrans from '../Common/RecentTrans'
import PaymentAnalytics from './PaymentAnalytics'
import QuickTransfer from './QuickTransfer'
import PaymentAccount from './PaymentAccount'
import BottomSpace from '../Common/BottomSpace'

function Wrapper({ title }: DashboardWrapper) {
  const router = useRouter()
  return (
    <Page title={title} className={'md:w-[calc(100%-224px)]'} >
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
            <BuySale type="dashbord" className='mt-[20px]' />
          </div>
        </div>
      </div>
      <BottomSpace />
    </Page >
  )
}

export default Wrapper
