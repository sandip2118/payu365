/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../../../Common/Card'
import Icons from '@/assets/icon';
import { colors } from '../../../../themes';
import PhoneWithCountryCode from '../../../Login/PhoneWithCountryCode';
import CurrencyInfo from '../../../Common/CurrencyInfo';
import Image from 'next/image';
import InputField from '../../../Common/InputField';
import { toast } from 'react-toastify';
import { ROUTE } from '@/Constants';
import { DebounceInput } from 'react-debounce-input';
import TransferComp from '../../TransferComp';
import DetailsAmount from '../QuickBank/BankDetailsComp';


function UpiComp({ activeStep, _activeStep, _bankDetails }: any) {
  const router = useRouter();
  const [selectBank, setSelectBank] = useState('')
  const [upiID, setUpiID] = useState('')
  const [arr, setArr] = useState([
    { id: 1, name: 'Jack', acNo: '25012487' },
    { id: 2, name: 'Rose', acNo: '20124857' },
    { id: 3, name: 'Peter', acNo: '20124587' },
    { id: 4, name: 'Mehtew', acNo: '20124857' },
    { id: 5, name: 'Mehtew', acNo: '20124857' },
    { id: 5, name: 'Mehtew', acNo: '20124857' },
  ])



  return (
    <div className='min-w-full lg:min-w-[580px] mt-[30px] lg:w-[580px] w-auto'>
      <Card className='sm:px-5 px-[10px] pt-[20px]'>
        <div className="w-full mb-[20px]">
          <p className="font12RB text-white  mb-[10px]">
            Receiver's UPI ID
          </p>
          <InputField
            placeholder="Enter UPI ID"
            value={upiID}
            onChange={(e) => setUpiID(e.target.value)}
          />
        </div>

        <p className='font20SB mt-5 mb-[32px]'>Recent UPI Transactions</p>
        <TransferComp arr={arr} />
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

export default UpiComp;
