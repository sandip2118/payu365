/* eslint-disable complexity */
import React, { useState } from 'react'
import Card from '../../Common/Card'
import Icons from '@/assets/icon'
import { DebounceInput } from 'react-debounce-input'
import TransferComp from '../TransferComp'
import { ContainedButton } from '@/components/Common/Button'
import { SelectUserComponentProps, MobileNumberAndUpiProps } from './type'

const SelectUserComponent: React.FC<SelectUserComponentProps> = ({
  activeStep,
  _activeStep,
}) => {
  const [selectedTab, setSelectedTab] = useState<string>('Mobile Number')

  const arr = [
    { id: 1, name: 'Jack', acNo: '25012487' },
    { id: 2, name: 'Rose', acNo: '20124857' },
    { id: 3, name: 'Peter', acNo: '20124587' },
    { id: 4, name: 'Mehtew', acNo: '20124857' },
    { id: 5, name: 'Mehtew', acNo: '20124857' },
    { id: 5, name: 'Mehtew', acNo: '20124857' },
  ]

  const _onSearch = (val: any) => {
    // const data = []
    // const filteredData = data.filter((c) => {
    //   if (c?.name?.toLowerCase().includes(val.toLowerCase()))
    //     return c
    // });
  }

  const MobileNumberAndUpi: React.FC<MobileNumberAndUpiProps> = ({
    TransferUser,
    ContactsUser,
  }) => {

    return (
      <div className="flex flex-col gap-5 px-[30px] pb-[30px] pt-[35px]">
        <div className="flex items-center gap-5">
          <div className=" flex w-full items-center px-[20px] bg-Neutral200 dark:bg-Neutral200Dark rounded-[5px] bg-BLACK_304">
            <DebounceInput
              autoFocus
              // value={search}
              placeholder="Enter Name or Number"
              // minLength={2}
              debounceTimeout={700}
              className="no-input-arrow w-full font14R h-[44px] pl-[10px] bg-BLACK_304 focus:text-white text-white focus:outline-none focus-visible:border-none rounded-[5px] placeholder-GRAY_101 "
              onChange={(e) => _onSearch(e.target.value)}
            />
            <Icons.Search w={13} h={13} />
          </div>
          <Icons.CopyUserIcon />
        </div>

        <div>
          <p className="font20SB mb-[32px]">{TransferUser}</p>
          <TransferComp arr={arr} />
        </div>
        <div>
          <p className="font20SB mb-[9px]">{ContactsUser}</p>

          {[1, 2].map(() => {
            return (
              <div className="flex px-[10px] items-center border-b border-BLACK_306 py-[16px]">
                <img
                  src={'/assets/images/rc.png'}
                  alt="profile"
                  className="flex w-[50px] h-[50px] rounded-full bg-GRAY_101 justify-center items-center"
                />
                <div className="ml-[10px]">
                  <p className="font14RB mt-[5px]">Kristin Watson</p>
                  <p className="font12RB text-GRAY_101 mt-1">00120998</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-[5px]">
          <ContainedButton
            text="Transfer Now"
            className="bg-BLUE_201 w-full text-white p-[15px] font-semibold "
            onClick={() => _activeStep(activeStep + 1)}
          />
        </div>
      </div>
    )
  }

  return (
    <div className="min-w-full lg:min-w-[580px] mt-[30px] lg:w-[580px] w-auto">
      <Card className="!p-0">
        <ul className="flex w-full -mb-px text-sm font-medium text-center text-gray-500">
          <li className="w-1/2">
            <button
              className={`${
                selectedTab === 'Mobile Number'
                  ? 'border-b-[3px] border-BLUE_201 text-white'
                  : 'border-b-[1px] border-BLACK_306 text-GRAY_101'
              } w-full font14R inline-flex items-center justify-center p-4  border-transparent rounded-t-md  group`}
              onClick={() => {
                setSelectedTab('Mobile Number')
              }}
            >
              Mobile Number
            </button>
          </li>
          <div className="w-[1px] bg-BLACK_306" />
          <li className="w-1/2">
            <button
              className={`${
                selectedTab == 'UPI'
                  ? 'border-b-[3px] border-BLUE_201 text-white'
                  : 'border-b-[1px] border-BLACK_306 text-GRAY_101'
              } w-full font14R inline-flex items-center justify-center p-4  border-transparent rounded-t-md  group`}
              onClick={() => {
                setSelectedTab('UPI')
              }}
            >
              UPI
            </button>
          </li>
        </ul>

        {selectedTab === 'Mobile Number' &&
          MobileNumberAndUpi({
            TransferUser: 'Recent Transfer Using Mobile Number',
            ContactsUser: 'Contacts in Address Book',
          })}
        {selectedTab === 'UPI' &&
          MobileNumberAndUpi({
            TransferUser: 'Recent UPI Transfer',
            ContactsUser: 'UPI Contacts in Address Book',
          })}
      </Card>
    </div>
  )
}

export default SelectUserComponent
