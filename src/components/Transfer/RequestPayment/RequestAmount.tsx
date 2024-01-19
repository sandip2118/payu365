/* eslint-disable complexity */
import React, { useState } from 'react'
import Card from '../../Common/Card'
import Icons from '@/assets/icon'
import { colors } from '../../../themes'
import CurrencyInfo from '../../Common/CurrencyInfo'
import Image from 'next/image'
import InputField from '../../Common/InputField'
import { ContainedButton } from '@/components/Common/Button'

function RequestAmount({ activeStep, _activeStep }: any) {
  const [notes, setNotes] = useState('')
  const [selecteCurrency, setSelecteCurrency] = useState({
    id: 98,
    name: 'India',
    isoAlpha2: 'IN',
    isoAlpha3: 'IND',
    isoNumeric: 356,
    currency: {
      code: 'INR',
      name: 'Rupee',
      symbol: '₹',
    },
    flag: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg==',
  })

  const handleClick = () => {
    _activeStep(activeStep + 1)
  }

  return (
    <div className="min-w-full lg:min-w-[580px] mt-[30px]">
      <Card className="p-[30px] gap-5 flex flex-col">
        <Card className="bg-BLACK_304 p-5 rounded-[5px] gap-[15px]">
          <p className="text-white text-sm font-semibold">Request From</p>
          <div>
            <div className="mt-[15px] flex sm:gap-2.5 gap-[5px] items-center">
              <img
                src={'/assets/images/user1.png'}
                alt="profile"
                className="w-[50px] h-[50px] rounded-full bg-GRAY_101"
              />
              <div className="sm:ml-2.5 ml-[5px]">
                <div className="flex items-center">
                  <p className="font14RB text-BLUE_201 !sm:text-sm !text-xs">
                    Mitul Jetani
                  </p>
                  <div className="min-w-[6px] min-h-[6px] rounded-full bg-YELLOW_01 mx-[5px]" />
                  <p className="font14RB text-YELLOW_01 !sm:text-sm !text-xs">
                    Switch account
                  </p>
                </div>
                <div className="flex items-center mt-[5px]">
                  <div className="w-[6px] h-[6px] rounded-full bg-GREEN_02 mr-[5px]" />
                  <p className="font14RB text-GRAY_101 !sm:text-sm !text-xs">
                    Active wallet - 9874
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card className="bg-BLACK_304 p-5 rounded-[5px] gap-[15px]">
          <div className=" flex sm:gap-2.5 gap-[5px] items-center justify-between">
            <div className="flex items-center">
              <img
                src={'/assets/images/user3.png'}
                alt="profile"
                className="w-[50px] h-[50px] rounded-full bg-GRAY_101"
              />
              <div className="sm:ml-2.5 ml-[5px]">
                {/* <p className='font14RB text-white !sm:text-sm !text-xs'>Rose</p> */}
                <p className="text-sm text-white">
                  Requested to : <span className="text-GRAY_101"> Rose </span>
                </p>
                <p className="text-xs font-medium text-GRAY_101 mt-[4px]">
                  +91 99787 787747
                </p>
              </div>
            </div>
            <Icons.CopyUserIcon color={colors.white} />
          </div>
        </Card>

        <div className="w-full">
          <p className="font12RB text-white mb-2.5">Select Currency</p>
          <div className="bg-BLACK_304 h-[48px] mb-2.5 w-full rounded-[5px] px-2.5">
            <CurrencyInfo
              onSelect={(val) => setSelecteCurrency(val)}
              width={'w-full'}
              menuStyle="w-[250px] sm:w-[300px]"
              RenderMenuBtn={
                <div
                  className={`flex bg-BLACK_304 px-3 rounded-lg items-center justify-between w-full h-[48px]`}
                >
                  <div className="flex">
                    <div className="w-[20px] h-[15px]">
                      <Image
                        src={selecteCurrency?.flag}
                        alt="Flag"
                        width={20}
                        height={15}
                        className="w-[20px] h-[15px]"
                      />
                    </div>
                    <p className="font12R mx-[5px]">
                      {selecteCurrency?.currency?.symbol} (
                      {selecteCurrency?.currency?.code})
                    </p>
                  </div>
                  <Icons.DownArrow />
                </div>
              }
            />
          </div>
        </div>

        <div className="w-full">
          <div className="flex justify-between">
            <p className="font12RB text-white mb-2.5">Enter Amount</p>
            <div className="flex">
              <Icons.CurrencyRevert />
              <p className="font12RB text-white mb-2.5">
                {selecteCurrency?.currency?.symbol} (
                {selecteCurrency?.currency?.code})
              </p>
            </div>
          </div>
          <div className="flex relative items-center justify-between rounded-[5px]">
            <InputField
              className="rounded-l-lg rounded-none"
              placeholder="Please Enter Amount"
              type="number"
            />
            <CurrencyInfo
              onSelect={(val) => setSelecteCurrency(val)}
              menuStyle="w-[250px] sm:w-[300px]"
              RenderMenuBtn={
                <div
                  className={`flex bg-BLACK_304 px-5 rounded-r-lg items-center justify-end w-[150px] h-[48px]`}
                >
                  <div className="w-[20px] h-[15px]">
                    <Image
                      src={selecteCurrency?.flag}
                      alt="Flag"
                      width={20}
                      height={15}
                      className="w-[20px] h-[15px]"
                    />
                  </div>
                  <p className="font12R mx-[5px]">
                    {selecteCurrency?.currency?.symbol} (
                    {selecteCurrency?.currency?.code})
                  </p>
                  <Icons.DownArrow />
                </div>
              }
            />
          </div>
          <div className="sm:flex block justify-between mt-2.5">
            <p className="font10RB text-YELLOW_02">≈ $119.99 USD</p>
            <p className="font10RB text-GREEN_02 text-right mt-1 sm:mt-0">
              Available Balance: $105.30
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-2.5">
          <InputField
            labelName="Notes"
            labelClassName="text-GRAY_101"
            placeholder="Add request notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>

        <div>
          <ContainedButton
            text="Request Amount $119.99"
            className="bg-BLUE_201 w-full text-white p-[15px] font-semibold "
            onClick={handleClick}
          />
        </div>
      </Card>
    </div>
  )
}

export default RequestAmount
