import React, { useState, useEffect } from 'react';
import { Country } from '../types';


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

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const selected = countries.find(country => country.name === event.target.value);

    setSelectedCountry(selected || null);
  };
  return (
    <div className='flex gapƒ-[5px] items-center w-[100%] px-4'>
      <div className='flex gap-[3px]'>
        <img src={selectedCountry?.flag || '/assets/icons/caret-active.svg'} alt={`${selectedCountry?.name || ''} Flag`} style={{ width: '17px', height: '17px' }} />
      </div>
      <select value={selectedCountry?.name} onChange={handleSelectChange} className='w-[95%] md:w-[85%] h-[47px] font12R rounded-[5px] flex items-center bg-[#292932] text-white focus:border-none focus:outline-none' 
        style={{ height: height }}
      >
        {countries.map((country, index) => {
          return (
            <option key={index} value={country.name}>
              <img src={country?.flag} style={{ width: '17px', height: '17px' }} />
              {country.name}
            </option>
          )
        }
        )}ƒ
      </select>
    </div>
  );
};

export default CountryInfo;
