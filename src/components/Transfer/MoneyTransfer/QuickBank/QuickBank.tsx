/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../../../Common/Card'
import TransferComp from '../../TransferComp';

const steps = [
  { id: 1, name: 'Quick Bank' },
  { id: 2, name: 'Details & Amount' },
  { id: 3, name: 'Pay' },
]

const bankArr = [
  { id: 1, name: 'Enter Bank A/c Details', info: 'Choose Bank or Enter IFSC Details', img: '/assets/images/bank.png' },
  { id: 2, name: 'To Self A/c', info: 'Send Money to your own Bank A/c', img: '/assets/images/user0.png' },
  { id: 3, name: 'Enter UPI ID', info: 'Send money to Gpay, Phonepe, Bhim or any UPI app', img: '/assets/images/arrow.png' },
]

function QuickBank({ _bank }: any) {
  const router = useRouter();
  const [activeStep, _activeStep] = useState<any>(0);

  const [selectBank, setSelectBank] = useState('')

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
      <Card className='sm:px-5 px-[10px] pt-[30px]'>
        {bankArr?.map((d, i) => {
          let selected = selectBank?.id === d?.id
          return (
            <div className={` ${selected ? 'border-BLUE_201' : 'border-[transparent]'} flex border px-5 py-[17px] mb-[20px] bg-BLACK_304 rounded-[10px]`}
              onClick={() => { setSelectBank(d), _bank(d?.id) }}
            >
              <img src={d?.img} alt='banl' className='w-[30px] h-[30px] rounded-[5px]' />
              <div className='flex w-full justify-between items-center'>
                <div className='mx-[15px]'>
                  <p className='font12RB'>{d?.name}</p>
                  <p className='font10RB mt-[5px] text-GRAY_101'>{d?.info}</p>
                </div>
                <div className={` ${selected ? 'border-BLUE_201' : 'border-GRAY_101'} flex w-4 h-4 rounded-full border-2 justify-center items-center`}>
                  <div className={` ${selected ? 'bg-BLUE_201' : 'bg-[transparent]'} w-[6px] h-[6px] rounded-full`} />
                </div>
              </div>
            </div>

          )
        })}
        <p className='font20SB mt-5 mb-[32px]'>Recent & Saved Beneficiaries</p>
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


      {/* {selectBank?.id === 2 &&
          <SendMoney />
        }
        {selectBank?.id === 3 &&
          <UPITrans />
        } */}
    </div>
  );
}

export default QuickBank;
