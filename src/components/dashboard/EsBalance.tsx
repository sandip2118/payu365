/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Icons from '@/assets/icon';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { colors } from '../../themes';

interface prop {
  port?: boolean,
  heading?: String
}

function EsBalance({ heading }: prop) {
  const router = useRouter();

  const [selLang, setSelLang] = useState<string | undefined>()

  const arr = [
    { id: 1, name: 'INR' },
    { id: 2, name: 'US' },
  ]
  return (
    <div className=' bg-BLACK_301 w-full rounded-[10px] mt-[12px] py-[17px] px-5'>
      <div className='sm:flex block items-center gap-2 justify-between'>
        <div className='flex items-center gap-2'>
          <p className='font20SB'>{heading}</p>
          <Icons.Eye />
        </div>
        <div className='flex items-center justify-end gap-2 mt-5'>
          <button className='bg-BLACK_305 px-[20px] h-[28px] rounded-[5px] font12SB'>
            Deposit
          </button>
          <button className='bg-BLACK_305 px-[20px] h-[28px] rounded-[5px] font12SB'>
            Withdraw
          </button>
          <button className='bg-BLACK_305 px-[20px] h-[28px] rounded-[5px] font12SB'>
            Swap
          </button>
        </div>
      </div>
      <div className='flex mt-[18px]'>
        <p className='font30SMB'>₹5,382.36</p>
        <Menu
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
        </Menu>
      </div>

      <div className='flex items-center mt-[16px]'>
        <div className='w-[10px] h-[10px] rounded-full bg-RED_02 mr-[5px]' />
        <p className='font12RB'>Today’s PNL <span className='text-RED_02'>-0.0031235(0.23%)</span></p>
      </div>

      <div className='mt-[33.5px] flex'>
        <p className='font14RB text-GRAY_101'>Wallet ID: 24579485</p>
        <div className='w-5 h-5 ml-[10px] rounded-full bg-BLACK_306 flex justify-center items-center'>
          <Icons.MultiScreen />
        </div>
      </div>
    </div>
  );
}

export default EsBalance;
