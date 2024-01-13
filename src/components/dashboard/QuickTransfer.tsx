/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Icons from '@/assets/icon';

function QuickTransfer() {
  const [arr, setArr] = useState([{ id: 1, name: 'Jack', acNo: '25012487' }, { id: 2, name: 'Rose', acNo: '20124857' }, { id: 3, name: 'Peter', acNo: '20124587' }, { id: 4, name: 'Mehtew', acNo: '20124857' }])

  const _addNew = () => {
    let abc = [...arr]
    abc.push({ id: 6 })
    setArr(abc)
  }



  return (

    <div className=" bg-BLACK_301 rounded-[10px] mt-[20px] p-5">
      <p className='font20SB'>
        Quick Transfer
      </p>
      <div className='flex mt-[15px]'>
        <div className='px-[13.5px] py-[7px] border border-GRAY_101 rounded-[10px] items-center flex flex-col mr-[10px]'>
          <button className='flex w-[50px] h-[50px] rounded-full bg-BLUE_201 justify-center items-center'
          // onClick={() => { _addNew() }}
          >
            <Icons.Plus />
          </button>
          <p className='font14RB mt-[5px]'>
            Transfer
          </p>
          <p className='font12RB text-GRAY_101 mt-1 '>
            Manual
          </p>
        </div>
        <div className='flex gap-[10px] overflow-x-auto'>
          {arr?.map((d) => {
            return (
              <div className='px-[13.5px] py-[7px] items-center flex flex-col'>
                <img src={'/assets/images/rc.png'} alt='profile' className='flex w-[50px] h-[50px] rounded-full bg-GRAY_101 justify-center items-center' />

                <p className='font14RB mt-[5px]'>
                  {d.name}
                </p>
                <p className='font12RB text-GRAY_101 mt-1'>
                  {d.acNo}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  );
}

export default QuickTransfer;
