import React, { useState } from 'react'
import {
  TableContainer,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Box,
} from '@mui/material'
import Icons from '@/assets/icon'
import { colors } from '../../themes'
import Image from 'next/image'
import Candlestick from './TradingViewChart/Candlestick'
import { MarketTradeProps } from "./type";
import Page from '../Common/Page'
import Card from '../Common/Card'
import BuySale from '../Common/BuySale'

const MarketTrade: React.FC<MarketTradeProps> = ({handleViewHistory}) => {
  const [isInrFirst, setIsInrFirst] = useState(true);

  const handleSwapClick = () => {
    setIsInrFirst((prev: any) => !prev)
  }

  const buyRows = [
    { Price: '19,965.74', Amount: 1.13624, Time: '18:43:07' },
    { Price: '19,965.74', Amount: 0.13624, Time: '18:43:07' },
  ]
  const sellRows = [
    { Price: '19,965.74', Amount: 1.13624, Time: '18:43:07' },
    { Price: '19,965.74', Amount: 0.13624, Time: '18:43:07' },
  ]
  const openOrdersRows = [
    {
      Time: '18:43:07',
      Date: '28 Jul',
      FilledVol: '19,965.74',
      Rate: '0.13624',
      status: 'sell',
    },
    {
      Time: '18:43:07',
      Date: '28 Jul',
      FilledVol: '19,965.74',
      Rate: '0.13624',
      status: 'buy',
    },
    {
      Time: '18:43:07',
      Date: '28 Jul',
      FilledVol: '19,965.74',
      Rate: '0.13624',
      status: 'buy',
    },
    {
      Time: '18:43:07',
      Date: '28 Jul',
      FilledVol: '19,965.74',
      Rate: '0.13624',
      status: 'sell',
    },
  ]

  const orderTable = (name: string, rows: any) => {
    return (
      <TableContainer className="mt-5">
        <Table aria-label="simple table" className="order-table">
          <TableHead>
            <TableRow>
              <TableCell className="text-GRAY_104 capitalize border-b-GRAY_104 border-b border-solid">
                Price(USD)
              </TableCell>
              <TableCell className="text-GRAY_104 capitalize border-b-GRAY_104 border-b border-solid">
                Amount(INR)
              </TableCell>
              <TableCell
                align="right"
                className="text-GRAY_104 capitalize border-b-GRAY_104 border-b border-solid"
              >
                Time
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.Price}>
                <TableCell
                  className={`text-${name === 'buy' ? 'GREEN_02' : 'RED_02'
                    } border-none`}
                >
                  {row.Price}
                </TableCell>
                <TableCell className="text-GRAY_103 border-none ">
                  {row.Amount}
                </TableCell>
                <TableCell align="right" className="text-GRAY_103 border-none ">
                  {row.Time}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  return (
    <>
      <Page title={'Markets'}>
        <div className="my-5 mx-5">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            <div className="sm:col-span-2 md:col-span-2">

              <div className="w-full">
                <div className="flex items-center justify-between bg-BLACK_301 space-x-4 p-5 rounded-t-lg">
                  <div className="flex-shrink">
                    <div className="flex items-center" onClick={handleSwapClick}>
                      <div className="relative w-[34px] h-[34px]">
                        <div className="bg-BLACK_303 w-8 h-8 rounded-full flex items-center justify-center"><Icons.Envelope /></div>
                        <div className="bg-BLACK_303 w-8 h-8 rounded-full absolute -bottom-3 -right-3">
                          <div className="flex items-center justify-center w-full h-full"><Icons.Envelope /></div>
                        </div>
                      </div>
                      <p className="flex items-end text-sm ml-7">
                        {isInrFirst ? 'USD' : 'INR'}/
                        <p className="text-GRAY_101 text-xs">
                          {isInrFirst ? 'INR' : 'USD'}
                        </p>
                      </p>
                      <div className="ml-3.5">
                        <Icons.Envelope />
                      </div>
                    </div>
                  </div>
                  <div className="flex-shrink flex items-center gap-2">
                    <div className="font-medium">
                      <p className="text-GRAY_101 text-xs">24h Change</p>
                      <p className="text-xs flex items-center gap-2">
                        -1,498.25
                        <p className="text-GREEN_02 border-none text-[10px]">
                          -6.98%
                        </p>
                      </p>
                    </div>
                  </div>
                  <div className="flex-shrink flex items-center gap-2">
                    <div className="font-medium">
                      <p className="text-GRAY_101 text-xs">High</p>
                      <p className="text-xs text-GREEN_02">13.8597</p>
                    </div>
                  </div>
                  <div className="flex-shrink flex items-center gap-2">
                    <div className="font-medium">
                      <p className="text-GRAY_101 text-xs">Low</p>
                      <p className="text-xs text-GREEN_02">19,549.09</p>
                    </div>
                  </div>
                  <div className="flex-shrink flex items-center gap-2">
                    <div className="font-medium">
                      <p className="text-GRAY_101 text-xs">Volume</p>
                      <p className="text-xs text-GREEN_02">14,430,472,197.94</p>
                    </div>
                  </div>
                </div>
                <div className="border-BLACK_307 border border-solid rounded-b-lg">
                <Candlestick />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">
                <Card title="Buy Order" subTitle="Orderbook Realtime">
                  {orderTable('buy', buyRows)}
                </Card>
                <Card title="Sell Order" subTitle="Orderbook Realtime">
                  {orderTable('sell', sellRows)}
                </Card>
              </div>
            </div>
            <div className="flex flex-col gap-5">
              <BuySale type="market" />
              <Card title="Open Orders (2)" cardTopBtnName="View Trade History" onclick={handleViewHistory}>
                <TableContainer className="mt-5">
                  <Table aria-label="simple table" className="open-order-table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="text-GRAY_104 text-xs capitalize border-b-GRAY_104 border-b border-solid">
                          Time
                        </TableCell>
                        <TableCell className="text-GRAY_104 leading-normal text-xs capitalize border-b-GRAY_104 border-b border-solid">
                          Filled Vol
                          <p className="text-[8px]">Total Vol</p>
                        </TableCell>
                        <TableCell className="text-GRAY_104 leading-normal text-xs capitalize border-b-GRAY_104 border-b border-solid">
                          Rate
                          <p className="text-[8px]">per USD</p>
                        </TableCell>
                        <TableCell
                          align="right"
                          className="text-GRAY_104 capitalize border-b-GRAY_104 border-b border-solid"
                        ></TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {openOrdersRows.map((row: any) => (
                        <TableRow key={row.Price}>
                          <TableCell className="text-GRAY_103 border-none">
                            <Box
                              className="pl-2.5 "
                              sx={{
                                border: 'none',
                                borderLeft: `2px solid ${row.status === 'buy'
                                  ? colors.GREEN_02
                                  : colors.RED_02
                                  }`,
                              }}
                            >
                              {row.Time}
                              <p>{row.Date}</p>
                            </Box>
                          </TableCell>
                          <TableCell
                            className={`text-${row.status === 'buy' ? 'GREEN_02' : 'RED_02'
                              } border-none`}
                          >
                            {row.FilledVol}
                          </TableCell>
                          <TableCell className="text-GRAY_103 border-none ">
                            {row.Rate}
                          </TableCell>
                          <TableCell
                            align="right"
                            className="text-GRAY_103 border-none "
                          >
                            <Image
                              src="/assets/icons/notChecked.svg"
                              alt="Not Checked"
                              width={15}
                              height={15}
                            />
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </TableContainer>
                <div className="flex justify-end text-xs text-GRAY_101 gap-5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-[5px] bg-GREEN_02"></div>
                    Buy Order
                  </div>
                  <div className="flex items-center gap-1.5">
                    <p className="w-2.5 h-2.5 rounded-[5px] bg-RED_02"></p>
                    Sell Order
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </Page>
    </>
  )
}

export default MarketTrade
