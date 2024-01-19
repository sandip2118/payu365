/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../../Common/Card'
import Icons from '@/assets/icon';
import { colors } from '../../../themes';
import PhoneWithCountryCode from '../../Login/PhoneWithCountryCode';
import CurrencyInfo from '../../Common/CurrencyInfo';
import Image from 'next/image';
import InputField from '../../Common/InputField';
import { toast } from 'react-toastify';
import { ROUTE } from '@/Constants';
import { DebounceInput } from 'react-debounce-input';
import TransferComp from '../TransferComp';

function AddressBook({ activeStep, _activeStep }: any) {
  const router = useRouter();

  const [arr, setArr] = useState([
    { id: 1, name: 'Jack', acNo: '25012487' },
    { id: 2, name: 'Rose', acNo: '20124857' },
    { id: 3, name: 'Peter', acNo: '20124587' },
    { id: 4, name: 'Mehtew', acNo: '20124857' },
    { id: 5, name: 'Mehtew', acNo: '20124857' },
    { id: 5, name: 'Mehtew', acNo: '20124857' },
  ])


  const _onSearch = (val: any) => {
    // const data = []
    // const filteredData = data.filter((c) => {
    //   if (c?.name?.toLowerCase().includes(val.toLowerCase()))
    //     return c
    // });
  }

  return (

    <div className='min-w-full lg:min-w-[580px] mt-[30px] lg:w-[580px] w-auto'>
      <Card className='sm:px-5 px-[10px]'>
        <div className='flex items-center gap-5'>
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

        <p className='font20SB mt-5 mb-[32px]'>Recent Transfer</p>
        <TransferComp arr={arr} />
        <p className='font20SB mt-[15px] mb-[9px]'>Contacts in Address Book</p>

        {[1, 2].map(() => {
          return (
            <div className='flex px-[10px] items-center border-b border-BLACK_306 py-[16px]'>
              <img src={'/assets/images/rc.png'} alt='profile' className='flex w-[50px] h-[50px] rounded-full bg-GRAY_101 justify-center items-center' />
              <div className='ml-[10px]'>
                <p className='font14RB mt-[5px]'>
                  Kristin Watson
                </p>
                <p className='font12RB text-GRAY_101 mt-1'>
                  00120998
                </p>
              </div>
            </div>
          )
        })}

        <div>
          <button
            onClick={() => _activeStep(activeStep + 1)}
            className="font14SB bg-BLUE_201 w-full mt-[35px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]"
          >
            Transfer Now
          </button>
        </div>
      </Card>
    </div>
  );
}

export default AddressBook;
