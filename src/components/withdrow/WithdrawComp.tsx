/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../Common/Card';
import Icons from '@/assets/icon';
import { colors } from '../../themes';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import PhoneWithCountryCode from '../Login/PhoneWithCountryCode';
import CurrencyInfo from '../Common/CurrencyInfo';
import Image from 'next/image';
import InputField from '../Common/InputField';
interface prop {
  onClick?: () => void
}

function WithdrawComp({ onClick }: prop) {
  const router = useRouter();
  const [radioSelect, setRadioSelect] = useState('Saving')
  const [selecteCurrency, setSelecteCurrency] = useState({
    "id": 98,
    "name": "India",
    "isoAlpha2": "IN",
    "isoAlpha3": "IND",
    "isoNumeric": 356,
    "currency": {
      "code": "INR",
      "name": "Rupee",
      "symbol": "₹"
    },
    "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
  });
  const arr = [
    { id: 1, name: 'English' },
    { id: 2, name: 'Hindi' },
    { id: 3, name: 'Gujarati' },
  ]

  const RadioArr = [
    { title: 'Saving' },
    { title: 'Salary' },
    { title: 'Current' },
  ]

  let start = 'http://api.worldbank.org/v2/country/br?format=json'

  return (
    <div>
      <Card>
        <p className='font18SB'>Withdraw Balance</p>
        <div className='w-full mt-[20px] mb-[15px] relative z-50'>
          <p className="font12RB text-GRAY_101 mb-[10px]">
            Bank Name *
          </p>
          <Menu
            transition
            menuStyle={{ borderRadius: '7px' }}
            menuButton={<MenuButton
              className="relative w-full"
              onClick={() => { }}
            >
              <div className="flex bg-BLACK_304 h-[48px] px-5 rounded-[5px] justify-between items-center">
                <div className='flex gap-5'>
                  <img src={''} alt='country' className='w-[20px] h-[16px] bg-GRAY_101' />
                  <p className="font14R text-white">
                    Canada
                  </p>
                </div>
                <Icons.DownArrow color={colors.white} />
              </div>
            </MenuButton>}
          >
            <div className="rounded-[4px] bg-BLACK_302 cursor-pointer py-[5px]">
              {arr?.map((d, i) => {
                return (
                  <MenuItem className="!p-0 w-[218px]" key={i}>
                    <div className='flex py-[10px] px-5 gap-5'>
                      <img src={''} alt='country' className='w-[20px] h-[16px] bg-GRAY_101' />
                      <p className="font14R text-white">
                        Canada
                      </p>
                    </div>
                  </MenuItem>
                )
              })}
            </div>
          </Menu>
        </div>

        <p className="font12RB text-GRAY_101 mb-[10px]">
          Withdraw Amount *
        </p>
        <div className='bg-BLACK_304 h-[48px] mb-[10px]'>
          <div className='flex relative items-center pl-5 justify-between rounded-[5px]'>
            <p className='font14R w-full'>
              ₹10,000.00
            </p>
            <CurrencyInfo onSelect={(val) => setSelecteCurrency(val)}
              menuStyle='w-[250px] sm:w-[300px]'
              RenderMenuBtn={
                <div className={`flex bg-BLACK_304 pl-3 rounded-lg items-center justify-center w-[150px] h-[48px]`}>
                  <div className='w-[20px] h-[15px]'>
                    <Image src={selecteCurrency?.flag} alt="Flag" width={20} height={15} className='w-[20px] h-[15px]' />
                  </div>
                  <p className="font12R mx-[5px]">
                    {selecteCurrency?.currency?.symbol} ({selecteCurrency?.currency?.code})
                  </p>
                  <Icons.DownArrow />
                </div>
              }
            />
          </div>
        </div>
        <div className='sm:flex block justify-between mb-[20px]'>
          <p className='font10RB text-GRAY_101'>Seems like Fund not available!<span className='text-YELLOW_02'> Would you like to swap?</span></p>
          <p className='font10RB text-GREEN_02 text-right mt-1 sm:mt-0'>Available Balance: ₹10.50</p>
        </div>

        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Withdraw Amount *
          </p>
          <InputField
            type='number'
            placeholder="₹0.00 INR"
          />
        </div>

        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Description (optional)
          </p>
          <InputField
            placeholder="Enter Description"
          />
        </div>

        <div>
          <button
            onClick={() => onClick && onClick()}
            className="font14SB bg-BLUE_201 w-full mt-[30px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]"
          >
            Withdraw
          </button>
        </div>
      </Card>
    </div>
  );
}

export default WithdrawComp;
