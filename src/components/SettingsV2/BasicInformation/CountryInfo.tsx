// import React, { useState, useEffect } from 'react';
// import { Country } from '../types';


// const CountryInfo = ({ height = '47px' }) => {
//   const [countries, setCountries] = useState<Country[]>([]);
//   const [selectedCountry, setSelectedCountry] = useState<Country | null>({
//     name: 'India',
//     flag: 'https://flagcdn.com/in.svg',
//     countryCode: 'IN'
//   });

//   useEffect(() => {
//     fetch('https://restcountries.com/v3.1/all')
//       .then((response) => response.json())
//       .then((data) => {
//         const countryData = data.map((country: any) => (
//           {
//             name: country.name.common,
//             flag: country.flags.svg,
//             countryCode: country.cca2,
//           })
//         );

//         setCountries(countryData);
//         const india = countryData.find(country => country.name === 'India');
//         if (india) {
//           setSelectedCountry(india);
//         }
//       })
//       .catch((error) => console.error('Error fetching country data:', error));
//   }, []);

//   const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
//     const selected = countries.find(country => country.name === event.target.value);

//     setSelectedCountry(selected || null);
//   };
//   return (
//     <div className='flex w-full  items-center rounded-[5px] h-[47px]'>
//     <div className='flex'>
//       <img src={selectedCountry?.flag || '/assets/icons/caret-active.svg'} alt={`${selectedCountry?.name || ''} Flag`} style={{ width: '17px', height: '17px', marginRight: '20px' }} />
//     </div>
//     <select value={selectedCountry?.name} onChange={handleSelectChange} className='w-full h-full font12R  flex items-center bg-[#292932] text-white focus:border-none focus:outline-none' 
//       style={{ height: height }}
//     >
//       {countries.map((country, index) => {
//         return (
//           <option key={index} value={country.name} className='bg-BLACK_306'>
//             {country.name}
//           </option>
//         )
//       })}
//     </select>
//   </div>
  
//   );
// };

// export default CountryInfo;
import React, { useState, useRef, useEffect } from 'react';
import Icons from '@/assets/icon';
import { colors } from '../../../themes';

const CountryInfo = ({ height = '47px' }) => {
  const [countries, setCountries] = useState<Country[]>([]);
  const [selectedCountry, setSelectedCountry] = useState<Country | null>({
    name: 'India',
    flag: 'https://flagcdn.com/in.svg',
    countryCode: 'IN'
  });

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all')
      .then((response) => response.json())
      .then((data) => {
        const countryData = data.map((country: any) => (
          {
            name: country.name.common,
            flag: country.flags.svg,
            countryCode: country.cca2,
          })
        );

        setCountries(countryData);
        const india = countryData.find(country => country.name === 'India');
        if (india) {
          setSelectedCountry(india);
        }
      })
      .catch((error) => console.error('Error fetching country data:', error));
  }, []);

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

  const selectCountry = (country) => {
    setSelectedCountry(country);
    setDropdownOpen(false);
  };

  return (
    <div className='relative flex w-full items-center rounded-[5px] h-[47px]' ref={dropdownRef}>
      <button onClick={toggleDropdown} className='flex items-center justify-between w-full h-full bg-[#292932] text-white'>
     <div className='flex items-center sm:gap-5 gap-2.5'>
       <img src={selectedCountry?.flag} alt='img' style={{ width: '17px', height: '17px' }} />
       <span>{selectedCountry?.name}</span>
       </div>
<div>
<Icons.DownArrow color={colors.white} />
</div>

      </button>
      {dropdownOpen && (
        <div className='absolute top-full left-0 z-10 w-full bg-BLACK_306'>
          {countries.map((country, index) => (
            <div key={index} className='flex items-center p-2 cursor-pointer hover:bg-gray-200' onClick={() => selectCountry(country)}>
              <img src={country.flag} alt={`${country.name} Flag`} style={{ width: '17px', height: '17px', marginRight: '10px' }} />
              <span>{country.name}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CountryInfo;
