import React from 'react'
import react from 'react'

interface prop {
  icon?: any,
  heading?: React.ReactNode,
  subTitle?: string,
  buttonTitle?: string,
  type?: boolean,
  onClick?: (type: any) => void,
  className?: any
}

const ImgBoxComp = ({ icon, heading, subTitle, buttonTitle, type, onClick, className }: prop) => {
  return (
    <div className={`${className}`}>
      <div className="w-full justify-center flex mb-[10px]">
        {icon}
      </div>
      {heading}
      <p className="font12R mt-[5px] text-GRAY_101 leading-[22px] text-center">
        {subTitle}
      </p>

      <div>
        <button
          onClick={() => onClick && onClick()}
          className="font14SB bg-BLUE_201 w-full mt-[20px] text-white flex justify-center items-center sm:px-[42.5px] px-[20px] self-stretch h-[48px] font-semibold rounded-[5px]"
        >
          {buttonTitle}
        </button>
      </div>
    </div>
  )
}

export default ImgBoxComp