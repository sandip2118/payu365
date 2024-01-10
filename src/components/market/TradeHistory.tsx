import React, { useState } from 'react'
import Card from '../Common/Card'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import Page from '../Common/Page';
import { FormControlLabel, Checkbox } from '@mui/material';
import ColorTabs from '../common/Tabs';

const TradeHistory = () => {

  const barData = [
    { id: 0, name: "Date", isOrange: false },
    { id: 1, name: "Pair", isOrange: false },
    { id: 2, name: "Type", isOrange: false },
    { id: 3, name: "Side", isOrange: false },
    { id: 4, name: "Price", isOrange: false },
    { id: 5, name: "Amount", isOrange: false },
    { id: 6, name: "Filled", isOrange: false },
    { id: 7, name: "Total", isOrange: false },
    { id: 8, name: "Close All", isOrange: true },
  ]

  const data = [
    { id: 0, label: "Open Orders(0)", value: "One", content: "content" },
    { id: 1, label: "Order History", value: "Two", content: "content" },
    { id: 2, label: "Trade History", value: "Three", content: "content" },
    { id: 3, label: "Funds", value: "Four", content: "content" },
  ]

  return (
    <>
      <Page title={'Markets'}>
        <div className="my-5 mx-5">
          <Card>
            <div className="header py-[7px] px-[1px]">
              <div className='tabs flex w-full justify-between border-b border-GRAY_101 dark:border-gray-700'>
                <div className="tabs">
                  <ColorTabs data={data} />
                </div>
                <div className="label">
                  <FormControlLabel
                    control={<Checkbox />}
                    label='Hide Other Pairs'
                    className='leading-6 text-GRAY_101'
                  />
                </div>
              </div>
            </div>
            <div className="dropdowns w-full">
              <div className='flex justify-between mt-[2px]'>
                {barData.map((barElem) => (
                  <div
                    key={barElem.id}
                    className={`w-auto flex ${barElem.isOrange ? 'text-[#F0B90B]' : 'text-GRAY_101'}`}>
                    {barElem.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="core h-[189px] w-full text-GRAY_101 flex items-center justify-center">
              <p>You have no open orders</p>
            </div>
          </Card>
        </div>
      </Page>
    </>
  )
}

export default TradeHistory

