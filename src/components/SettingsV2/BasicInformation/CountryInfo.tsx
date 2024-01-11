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
    <div className='flex w-[95%] md:w-85% items-center rounded-[5px] h-[47px]'>
    <div className='flex'>
      <img src={selectedCountry?.flag || '/assets/icons/caret-active.svg'} alt={`${selectedCountry?.name || ''} Flag`} style={{ width: '17px', height: '17px', marginRight: '20px' }} />
    </div>
    <select value={selectedCountry?.name} onChange={handleSelectChange} className='w-full h-full font12R  flex items-center bg-[#292932] text-white focus:border-none focus:outline-none' 
      style={{ height: height }}
    >
      {countries.map((country, index) => {
        return (
          <option key={index} value={country.name}>
            {country.name}
          </option>
        )
      })}
    </select>
  </div>
  
  );
};

export default CountryInfo;
