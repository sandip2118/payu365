
import React, { useState, useRef, useEffect } from 'react';
import Icons from '@/assets/icon';
import { colors } from '../../../themes';

const BankNames = ({ height = '47px' }) => {
  const [banks, setBanks] = useState<Country[]>([]);
  const [selectedBank, setSelectedBank] = useState<Country | null>({
    name: 'Bank of Nova Scotia',
    flag: '/assets/images/bankName.png',
    countryCode: 'IN'
  });


  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [dropdownRef]);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  const selectCountry = (bank) => {
    setSelectedBank(bank);
    setDropdownOpen(false);
  };

  return (
    <div className='relative flex w-full items-center rounded-[5px] h-[47px]' ref={dropdownRef}>
      <button onClick={toggleDropdown} className='flex items-center justify-between w-full h-full bg-[#292932] text-white'>
     <div className='flex items-center sm:gap-5 gap-2.5'>
       <img src={selectedBank?.flag} alt='img' style={{ width: '17px', height: '17px' }} />
       <span>{selectedBank?.name}</span>
       </div>
<div>
<Icons.DownArrow color={colors.white} />
</div>

      </button>
      {dropdownOpen && (
        <div className='absolute top-full left-0 z-10 w-full bg-BLACK_306'>
          {banks.map((bank, index) => (
            <div key={index} className='flex items-center p-2 cursor-pointer hover:bg-gray-200' onClick={() => selectCountry(bank)}>
              <img src={bank.flag} alt={`${bank.name} Flag`} style={{ width: '17px', height: '17px', marginRight: '10px' }} />
              <span>{bank.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default BankNames;
