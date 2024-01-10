/* eslint-disable complexity */
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Card from '../common/Card';

const bankArr = [
  { id: 1, name: 'ICICI Bank', branch: 'Gujarat Branch' },
  { id: 2, name: 'BANK OF NOVA SCOTIA', branch: 'Ontario Branch' },
  { id: 3, name: 'AB BANK LTD', branch: 'Upashahar Branch' },
  { id: 4, name: 'ICICI Bank', branch: 'Gujarat Branch' },
  { id: 5, name: 'BANK OF NOVA SCOTIA', branch: 'Ontario Branch' },
  { id: 6, name: 'AB BANK LTD', branch: 'Upashahar Branch' },
  { id: 7, name: 'ICICI Bank', branch: 'Gujarat Branch' },
  { id: 8, name: 'BANK OF NOVA SCOTIA', branch: 'Ontario Branch' },
  { id: 9, name: 'AB BANK LTD', branch: 'Upashahar Branch' },
  { id: 10, name: 'ICICI Bank', branch: 'Gujarat Branch' },
]

interface prop {
  onClick?: () => void,
  addNew?: () => void,
}

function HistoryList({ onClick, addNew, setIsNewUser }: prop) {

  const [selectBank, setSelectBank] = useState(bankArr[0])
  const [arr, setArr] = useState<any[]>()
  const [showMore, setShowMore] = useState(true)

  useEffect(() => {
    _seeMore(false)
  }, [])

  const _seeMore = (val: any) => {
    if (val) {
      setArr(bankArr)
    } else {
      setArr(bankArr?.slice(0, 3))
    }
    setShowMore(val)
  }

  return (
    <Card>
      <div className='py-[5px] sm:px-[10px]'>
        <div className='flex justify-between mb-[25px]'>
          <p className='font16RB'>
            Select bank
          </p>
          <button className='font16SB text-BLUE_201'
            onClick={() => setIsNewUser(1)}
          >Add new bank</button>
        </div>
        <div className='w-full'>
          {arr?.map((d, i) => {
            let selected = selectBank?.id === d?.id
            return (
              <div className={` ${selected ? 'border-BLUE_201' : 'border-[transparent]'} flex border px-5 py-[17px] mt-[15px] bg-BLACK_304 rounded-[10px]`}
                onClick={() => setSelectBank(d)}
              >
                <img src={{}} alt='banl' className='w-[33.85px] h-[30px] rounded-[5px] bg-GRAY_101' />
                <div className='flex w-full justify-between items-center'>
                  <div className='mx-[15px]'>
                    <p className='font12RB'>ICICI Bank</p>
                    <p className='font10RB mt-[5px]'>Gujarat Branch</p>
                  </div>
                  <div className={` ${selected ? 'border-BLUE_201' : 'border-GRAY_101'} flex w-4 h-4 rounded-full border-2 justify-center items-center`}>
                    <div className={` ${selected ? 'bg-BLUE_201' : 'bg-[transparent]'} w-[6px] h-[6px] rounded-full`} />
                  </div>
                </div>
              </div>

            )
          })}
          <button onClick={() => { _seeMore(!showMore) }} className='font12RB text-GRAY_101'>
            Show {showMore ? 'less' : 'more'}
          </button>
          <div>
            <button
              onClick={() => onClick && onClick()}
              className="font14SB bg-BLUE_201 w-full mt-[30px] text-white flex justify-center items-center self-stretch h-[48px] font-semibold rounded-[5px]"
            >
              Withdraw
            </button>
          </div>
        </div>
      </div>
    </Card>
  );
}

export default HistoryList;
