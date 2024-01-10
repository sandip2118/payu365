import React from 'react'
import Page from '@/components/common/Page'
import ColorTabs from '@/components/common/Tabs'
import DateRange from '../common/DateRangePicker'

const TransactionsAll = () => {
  const TabsData = [
    { id: 0, label: 'All', value: 'One' },
    { id: 1, label: 'Received', value: 'Two' },
    { id: 2, label: 'Transfer', value: 'Three' },
    { id: 3, label: 'Deposit', value: 'Four' },
    { id: 4, label: 'Withdraw', value: 'Five' },
    { id: 4, label: 'Requested', value: 'Six' },
  ]

  return (
    <Page title={'Transactions'}>
      <div className="my-5 mx-5">
        <div className="topContent flex items-center w-full">
          <ColorTabs data={TabsData} />
          <DateRange />
        </div>
      </div>
    </Page>
  )
}

export default TransactionsAll
