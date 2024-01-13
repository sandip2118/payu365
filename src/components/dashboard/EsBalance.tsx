/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Icons from '@/assets/icon';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { colors } from '../../themes';
import CurrencyInfo from '../Common/CurrencyInfo';
import Image from 'next/image';
import { ROUTE } from '@/Constants';

interface prop {
  port?: boolean,
  heading?: String
}

function EsBalance({ heading }: prop) {
  const router = useRouter();

  const [selLang, setSelLang] = useState<string | undefined>()
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
    { id: 1, name: 'INR' },
    { id: 2, name: 'US' },
  ]
  return (
    <div className=' bg-BLACK_301 w-full rounded-[10px] mt-[20px] pt-[15px] pb-[20px] px-5'>
      <div className='sm:flex block items-center gap-2 justify-between'>
        <div className='flex items-center gap-2'>
          <p className='font20SB'>{heading}</p>
          <Icons.Eye />
        </div>
        <div className='flex items-center justify-center gap-2'>
          <button
            onClick={() => router.push(ROUTE.DEPOSIT)}
            className='bg-BLACK_305 px-[20px] h-[28px] rounded-[5px] font12SB'>
            Deposit
          </button>
          <button
            onClick={() => router.push(ROUTE.WITHDROW)}
            className='bg-BLACK_305 px-[20px] h-[28px] rounded-[5px] font12SB'>
            Withdraw
          </button>
          <button
            onClick={() => router.push('')}
            className='bg-BLACK_305 px-[20px] h-[28px] rounded-[5px] font12SB'>
            Swap
          </button>
        </div>
      </div>
      <div className='flex mt-[16px] relative'>
        <p className='font30SMB'>₹5,382.36</p>
        <div className='justify-end grid  relative'>
          <CurrencyInfo onSelect={(val) => setSelecteCurrency(val)}
            menuStyle='w-[250px] sm:w-[300px]'
            RenderMenuBtn={
              <div className={`flex px-2 rounded-lg items-center w-[70px] h-[30px]`}>
                <p className="font16SMB text-GRAY_101 mr-[5px]">
                  {selecteCurrency?.currency?.code}
                </p>
                <Icons.DownArrow color={colors.GRAY_101} />
              </div>
            }
          />
        </div>
        {/* <Menu
          transition
          menuStyle={{ borderRadius: '7px' }}
          menuButton={
            <MenuButton
              className="relative"
              onClick={() => { }}
            >
              <div className="flex w-[70px] h-[30px] px-3 rounded-lg justify-between items-center">
                <p className="font14R text-GRAY_101">INR</p>
                <Icons.DownArrow color={colors.GRAY_101} />
              </div>
            </MenuButton>
          }
        >
          {arr?.map((d, i) => {
            return (
              <MenuItem className="!p-0" key={i}>
                <div className="rounded-[4px] bg-BLACK_301 w-[137px] cursor-pointer">
                  <div className="py-[5px] px-3"
                    onClick={() => setSelLang(d?.name)}
                  >
                    <p className="font14R">
                      {d?.name}
                    </p>
                  </div>
                </div>
              </MenuItem>
            )
          })}
        </Menu> */}
      </div>

      <div className='flex items-center mt-[16px]'>
        <div className='w-[10px] h-[10px] rounded-full bg-RED_02 mr-[5px]' />
        <p className='font12RB'>Today’s PNL <span className='text-RED_02'>-0.0031235(0.23%)</span></p>
      </div>

      <div className='mt-[32px] flex'>
        <p className='font14RB text-GRAY_101'>Wallet ID: 24579485</p>
        <div className='w-5 h-5 ml-[10px] rounded-full bg-BLACK_306 flex justify-center items-center'>
          <Icons.MultiScreen />
        </div>
      </div>
    </div>
  );
}

export default EsBalance;
