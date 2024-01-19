import React from 'react'
import Page from '../Common/Page'
import TransactionsAll from './TransactionsAll'

const Wrapper = () => {
  return (
    <Page title={'Transactions'}>
      <TransactionsAll />
    </Page>
  )
}

export default Wrapper