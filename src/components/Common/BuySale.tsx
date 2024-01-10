/* eslint-disable complexity */
import React, { useEffect, useMemo, useState } from 'react'
import { useRouter } from 'next/router'
import Icons from '@/assets/icon'
import { colors } from '../../themes'
import { AgGridReact } from 'ag-grid-react'
import { BS_TABS, MR_TABS } from '@/Constants'
import { type } from 'os'

function BuySale() {
  const router = useRouter()
  const [selectedTab, setSelectedTab] = useState<string>(BS_TABS.BUY)

  let perArr = [
    { title: '25%' },
    { title: '50%' },
    { title: '75%' },
    { title: '100%' },
  ]

  return (
    <div className="bg-BLACK_301 w-full rounded-[10px] mt-[12px]">
      <div className="">
        <ul className="flex w-full -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
          <li className="me-2 w-1/2">
            <button
              className={`${selectedTab === BS_TABS.BUY
                ? 'border-t-[3px] border-GREEN_01 bg-BLACK_304'
                : 'border-t-[3px] border-[transparent]'
                } text-white w-full font14R inline-flex items-center justify-center p-4  border-transparent rounded-t-md  group`}
              onClick={() => {
                setSelectedTab(BS_TABS.BUY)
              }}
            >
              Buy
            </button>
          </li>
          <li className="me-2 w-1/2">
            <button
              className={`${selectedTab === BS_TABS.SALE
                ? 'border-t-[3px] border-GREEN_01 bg-BLACK_304'
                : 'border-t-[3px] border-[transparent]'
                } text-white w-full font14R inline-flex items-center justify-center p-4  border-transparent rounded-t-md  group`}
              onClick={() => {
                setSelectedTab(BS_TABS.SALE)
              }}
            >
              Sale
            </button>
          </li>
        </ul>
      </div>
      <div className="bg-BLACK_304 p-5">
        <>
          <div className="flex">
            <p className="font12RB text-GRAY_101">AT PRICE (0.999 USD)</p>
            <div className="w-[2px] bg-GRAY_101 mx-[10px]" />
            <p className="font12RB text-GRAY_101">
              INR <span className="text-GREEN_02">0.03%</span>
            </p>
          </div>
          <div className="flex mt-[10px] bg-BLACK_301 items-center justify-between py-[15px] px-5 border border-[#777e904d] rounded-[10px]">
            <p className="font14R">88.64</p>
            <div className="flex items-center">
              <button>
                <Icons.MinusCircle />
              </button>
              <p className="text-GREEN_02 font12RB mx-5">LOWEST PRICE</p>
              <button>
                <Icons.PlusCircle />
              </button>
            </div>
          </div>
        </>
        <>
          <div className="flex mt-[10px]">
            <p className="font12RB text-GRAY_101">Amount</p>
            <div className="w-[2px] bg-GRAY_101 mx-[10px]" />
            <p className="font12RB text-GRAY_101">USD</p>
          </div>
          <div className="flex mt-[10px] bg-BLACK_301 items-center justify-between py-[15px] px-5 border border-[#777e904d] rounded-[10px]">
            <p className="font14R">50</p>
            <div className="flex items-center gap-[20px]">
              <button>
                <Icons.MinusCircle />
              </button>
              <button>
                <Icons.PlusCircle />
              </button>
            </div>
          </div>
        </>
        <>
          <div className="flex mt-[10px]">
            <p className="font12RB text-GRAY_101">TOTAL (50.05 USD)</p>
            <div className="w-[2px] bg-GRAY_101 mx-[10px]" />
            <p className="font12RB text-GRAY_101">INR</p>
          </div>
          <div className="flex mt-[10px] bg-BLACK_301 items-center justify-between py-[15px] px-5 border border-[#777e904d] rounded-[10px]">
            <p className="font14R">50</p>
            <div className="flex items-center gap-[20px]">
              <button>
              <Icons.MinusCircle />
              </button>
              <button>
              <Icons.PlusCircle />
              </button>
            </div>
          </div>
        </>
        <>
          <div className="flex mt-[10px]">
            <div className="flex">
              <Icons.MyAsset color={colors.GRAY_101} className="mr-[10px]" />
              <p className="font12RB text-GRAY_101 whitespace-nowrap">0 INR</p>
            </div>
            <div className="w-[2px] bg-GRAY_101 mx-[10px]" />
            <div className="flex w-full justify-between">
              {perArr?.map((d, i) => {
                return <p className="font12RB text-GRAY_101 gap-4">{d.title}</p>
              })}
            </div>
          </div>
        </>
        <div className="p-[10px] mt-[15px]">
          <button className="w-full bg-GREEN_02 font14SB py-[15px] rounded-[5px]">
            {BS_TABS.BUY}
          </button>
          {type === 'market' ? (
            <div className="flex gap-[22px] justify-between mt-[15px] items-center">
              <div>
                <p className="text-sm">USD</p>
                <p className="text-xs text-RED_03"> Not enough money </p>
              </div>
              <div className="flex items-center gap-2.5">
                <p className="text-sm">0 USD</p>
                <p className="text-[10px] text-GREEN_02">+ DEPOSIT</p>
              </div>
            </div>
          ) : (
            <div className="flex gap-[22px] justify-center mt-[15px]">
              <p className="text-RED_03 font14R">Not enough money</p>
              <div className="flex gap-[14.35px]">
                <Icons.Lock className="" />
                <p className="font14SB">Deposit</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default BuySale
