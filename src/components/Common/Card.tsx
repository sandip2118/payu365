import React from 'react';
import { CardProps } from './type';

const Card: React.FC<CardProps> = ({ title, subTitle, cardTopBtnName, children, isBorder, onclick }) => {
  return (
    <div className="block bg-BLACK_301 w-full rounded-[10px] p-5">
      <div className="flex justify-between">
        <div className="leading-none ">
          <p className="text-[10px]">{subTitle}</p>
          <p className="text-xl font-semibold">{title}</p>
        </div>
        <button className="font14SB text-BLUE_201" onClick={onclick}>{cardTopBtnName}</button>
      </div>
      {isBorder && <p className='border-b-BLACK_306 border-b border-solid my-5'></p>}
      <div>{children}</div>
    </div>
  )
}
export default Card;