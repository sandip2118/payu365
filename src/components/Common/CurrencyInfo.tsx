import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import countryData from '../../utils/countryData.json'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'

interface prop {
  onSelect?: (val: any) => void,
  menuStyle?: any,
  RenderMenuBtn?: any
  bank?: boolean,
  width?: any
}

const CurrencyInfo = ({ onSelect, menuStyle, RenderMenuBtn, bank, width }: prop) => {
  const [countries, setCountries] = useState<any[]>()

  useEffect(() => {
    if (countryData) {
      const formattedData = countryData.map((country) => country)
      setCountries(formattedData)
    }
  }, [])

  const _handleSelect = (val: any) => {
    onSelect && onSelect(val)
  }

  return (
    <Menu
      transition
      menuStyle={{ borderRadius: '7px', zIndex: 999 }}
      menuButton={
        <MenuButton className={` ${width} relative`}>
          {RenderMenuBtn}
        </MenuButton>
      }
    >
      <div className={`${menuStyle} overflow-auto max-h-[445px] rounded-[4px] bg-BLACK_306 cursor-pointer px-7 py-2 `}>
        <MenuItem className="!p-0">
          {countries?.map((d: any, i) => {
            return (
              <div
                key={i}
                onClick={() => _handleSelect(d)}
                className="min-h-[33px] flex items-center cursor-default"
              >
                <Image src={d?.flag} alt="Flag" width={20} height={15} />
                <p className="font12R ml-[21px]">
                  {d?.name} {!bank && `(${d?.currency?.code})`}
                </p>
              </div>
            )
          })}
        </MenuItem>
      </div>
    </Menu>

  )
}

export default CurrencyInfo
