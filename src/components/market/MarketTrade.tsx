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
import { MarketTradeProps } from './type'
import Card from '../Common/Card'
import BuySale from '../Common/BuySale'
import Page from '../Common/Page'
import { ContainedButton } from '../Common/Button'
import ModalCommon from '../Common/Modal'

const MarketTrade: React.FC<MarketTradeProps> = ({ handleViewHistory, handleBactToMarket }) => {
  const [isInrFirst, setIsInrFirst] = useState<boolean>(true)
  const [modalOpen, setModalOpen] = useState<boolean>(false)

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
              <TableCell className="capitalize border-b-GRAY_104 border-b border-solid">
                <p className="text-GRAY_104">Price(USD)</p>
              </TableCell>
              <TableCell className="capitalize border-b-GRAY_104 border-b border-solid">
                <p className="text-GRAY_104">Amount(INR)</p>
              </TableCell>
              <TableCell
                align="right"
                className="capitalize border-b-GRAY_104 border-b border-solid"
              >
                <p className="text-GRAY_104">Time</p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row: any) => (
              <TableRow key={row.Price}>
                <TableCell className="border-none">
                  <p
                    className={`text-${name === 'buy' ? 'GREEN_02' : 'RED_02'
                      } `}
                  >
                    {row.Price}
                  </p>
                </TableCell>
                <TableCell className="border-none ">
                  <p className="text-GRAY_103">{row.Amount}</p>
                </TableCell>
                <TableCell align="right" className="border-none ">
                  <p className="text-GRAY_103">{row.Time} </p>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    )
  }

  const handleOpen = () => {
    setModalOpen(true)
  }

  const SuccessModalContent = () => {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-center text-[22px] text-center mb-4 w-10/12">
          <Icons.SuccessfullyIcon />
          <p className='mt-5'>Successfully Open a trade From USD to INR </p>
        </div>
        <div className='flex flex-col items-center w-3/5'>
          <div className="flex items-center">
            <div className="relative w-[34px] h-[34px]">
              <div className="bg-BLACK_303 w-6 h-6 rounded-full flex items-center justify-center">
                <img
                  src={'/assets/images/us.png'}
                  alt="profile"
                  className="w-4 h-3 bg-GRAY_101"
                />
              </div>
              <div className="bg-BLACK_303 w-6 h-6 rounded-full absolute -bottom-1 -right-1">
                <div className="flex items-center justify-center w-full h-full">
                  <img
                    src={'/assets/images/India.png'}
                    alt="profile"
                    className="w-4 h-3 bg-GRAY_101"
                  />
                </div>
              </div>
            </div>
            <p className="flex items-end text-sm ml-5">USD/INR</p>
            <div className="ml-3.5">
              <Icons.Envelope />
            </div>
          </div>
          <div className='text-center text-xs font-medium text-GRAY_101 mt-4'>You have opened <span className='text-white'>$40 USD</span> to INR in your Wallet id(100100)</div>
        </div>
        <div className='mt-[25px] flex gap-[25px] w-full'>
          <ContainedButton text="View History"
            className="bg-BLACK_305 hover:bg-BLACK_305 rounded-[5px] pt-[11px] pb-3 w-full"
            onClick={handleViewHistory}
          />
          <ContainedButton text="Back to Market"
            className="bg-BLUE_201 hover:bg-BLUE_201 rounded-[5px] pt-[11px] pb-3 w-full"
            onClick={handleBactToMarket}
          />
        </div>
      </div>
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
                    <div
                      className="flex items-center"
                      onClick={handleSwapClick}
                    >
                      <div className="relative w-[34px] h-[34px]">
                        <div className="bg-BLACK_303 w-8 h-8 rounded-full flex items-center justify-center">
                          {isInrFirst ? (
                            <img
                              src={'/assets/images/us.png'}
                              alt="profile"
                              className="w-5 h-4 bg-GRAY_101"
                            />
                          ) : (
                            <img
                              src={'/assets/images/India.png'}
                              alt="profile"
                              className="w-5 h-4 bg-GRAY_101"
                            />
                          )}
                        </div>
                        <div className="bg-BLACK_303 w-8 h-8 rounded-full absolute -bottom-3 -right-3">
                          <div className="flex items-center justify-center w-full h-full">
                            {isInrFirst ? (
                              <img
                                src={'/assets/images/India.png'}
                                alt="profile"
                                className="w-5 h-4 bg-GRAY_101"
                              />
                            ) : (
                              <img
                                src={'/assets/images/us.png'}
                                alt="profile"
                                className="w-5 h-4 bg-GRAY_101"
                              />
                            )}
                          </div>
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
              <BuySale type="market" onClick={handleOpen} />
              <Card
                title="Open Orders (2)"
                cardTopBtnName="View Trade History"
                onclick={handleViewHistory}
              >
                <TableContainer className="mt-5">
                  <Table aria-label="simple table" className="open-order-table">
                    <TableHead>
                      <TableRow>
                        <TableCell className="text-xs capitalize border-b-GRAY_104 border-b border-solid">
                          <p className="text-GRAY_104">Time</p>
                        </TableCell>
                        <TableCell className=" leading-normal text-xs capitalize border-b-GRAY_104 border-b border-solid">
                          <p className="text-GRAY_104">
                            Filled Vol
                            <p className="text-[8px]">Total Vol</p>
                          </p>
                        </TableCell>
                        <TableCell className="leading-normal text-xs capitalize border-b-GRAY_104 border-b border-solid">
                          <p className="text-GRAY_104">
                            Rate
                            <p className="text-[8px]">per USD</p>
                          </p>
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
                          <TableCell className="border-none">
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
                              <p className="text-GRAY_103">
                                {row.Time}
                                <p>{row.Date}</p>
                              </p>
                            </Box>
                          </TableCell>
                          <TableCell className="border-none">
                            <p
                              className={`text-${row.status === 'buy' ? 'GREEN_02' : 'RED_02'
                                } `}
                            >
                              {row.FilledVol}
                            </p>
                          </TableCell>
                          <TableCell className="border-none ">
                            <p className="text-GRAY_103">{row.Rate} </p>
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
      <ModalCommon modalOpen={modalOpen} setModalOpen={setModalOpen}>
        {SuccessModalContent()}
      </ModalCommon>
    </>
  )
}

export default MarketTrade
