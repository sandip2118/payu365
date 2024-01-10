import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import countryData from '../../utils/countryData.json'
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu'
import Icons from '@/assets/icon';
import InputField from '../Common/InputField';
import { DebounceInput } from 'react-debounce-input';

interface prop {
  onSelect?: (val: any) => void,
  value?: any,
  onChange?: any
}

const PhoneWithCountryCodeProps = ({ value, onChange }: prop) => {
  const [countries, setCountries] = useState<any[]>()
  const [selecteCurrency, setSelecteCurrency] = useState({
    "id": 98,
    "code": "+91",
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

  useEffect(() => {
    if (countryData) {
      const formattedData = countryData.map((country) => country)
      setCountries(formattedData)
    }
  }, [])

  const _handleSelect = (val: any) => {
    setSelecteCurrency(val)
  }

  const _onSearch = (val: any) => {
    const data = [...countryData]
    const filteredData = data.filter((c) => {
      if (c?.name?.toLowerCase().includes(val.toLowerCase()))
        return c
    });
    setCountries(filteredData)
  }

  return (
    <div className='flex gap-2 relative'>
      <Menu
        className='focus-visible:border-none focus:border-none'
        transition
        menuStyle={{ borderRadius: '7px', zIndex: 999 }}
        menuButton={
          <MenuButton className={` relative`}>
            <div className={`flex bg-BLACK_301 w-[116px] rounded-[5px] items-center justify-center h-[48px]`}>
              <div className='w-[20px] h-[15px]'>
                <Image src={selecteCurrency?.flag} alt="Flag" width={20} height={15} className='w-[20px] h-[15px]' />
              </div>
              <p className="font13R mx-2 text-white">
                {selecteCurrency?.code}
              </p>
              <Icons.DownArrow />
            </div>
          </MenuButton>
        }
      >
        <div className={`rounded-[4px] bg-BLACK_306 cursor-pointer w-[300px]`}>
          <div className=" flex items-center px-[10px] bg-Neutral200 dark:bg-Neutral200Dark rounded-[5px] bg-BLACK_304">
            <Icons.Search w={13} h={13} />
            <DebounceInput
              autoFocus
              // value={search}
              placeholder="Search posts"
              // minLength={2}
              debounceTimeout={700}
              className="no-input-arrow w-full font14R h-[44px] pl-[10px] bg-BLACK_304 focus:text-white text-white focus:outline-none focus-visible:border-none rounded-[5px] placeholder-GRAY_101 "
              onChange={(e) => _onSearch(e.target.value)}
            />
            {/* {search.length > 0 && <icons.crossCircle onClick={searchClear} />} */}
          </div>

          <div className={` overflow-auto max-h-[445px] sm:max-h-[300px] rounded-[4px] bg-BLACK_306 cursor-pointer px-7 py-2 focus-visible:border-none`}>
            <MenuItem className="!p-0"
            >
              {countries?.map((d: any, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => _handleSelect(d)}
                    className="min-h-[33px] flex items-center cursor-default"
                  >
                    <Image src={d?.flag} alt="Flag" width={20} height={15} />
                    <p className="font12R ml-[21px] text-white">
                      {d?.name} {d?.code}
                    </p>
                  </div>
                )
              })}
            </MenuItem>
          </div>
        </div>
      </Menu >
      <InputField
        type='number'
        placeholder="Phone number"
        value={value}
        onChange={(e) => onChange({ phoneCode: selecteCurrency?.code, value: e.target.value })}
      />
    </div >

  )
}

export default PhoneWithCountryCodeProps



// import 'react-phone-number-input/style.css'

// import React, { useEffect } from 'react'
// import PhoneInput from 'react-phone-number-input'

// type PhoneWithCountryCodeProps = {
//   value?: string | undefined
//   onChange?: (value?: string | undefined) => void
// }

// const PhoneWithCountryCode: React.FC<PhoneWithCountryCodeProps> = ({
//   value,
//   onChange,
// }) => {
//   useEffect(() => {
//     if (!value) {
//       onChange && onChange('+91') // Set default value if value is not provided
//     }
//   }, [value, onChange])

//   return (
//     <PhoneInput
//       placeholder="Phone Number"
//       value={value}
//       defaultCountry="IN"
//       international
//       countryCallingCodeEditable={false}
//       onChange={(newValue: string | undefined) => {
//         onChange && onChange(newValue)
//       }}
//     />
//   )
// }

// export default PhoneWithCountryCode
