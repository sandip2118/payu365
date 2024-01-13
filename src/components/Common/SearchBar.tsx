import React, { useState } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import { Search } from '@mui/icons-material'
import { SearchBarProps } from './type'

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, searchValue, setSearchValue }) => {


  // * Function for setting searched value to state 
  /////////////////////////////////////////////////
  const handleSearch = (e: any) => {
    setSearchValue(e.target.value);
  }

  return (
    <>
      <TextField
        value={searchValue}
        onChange={(e: any) => { handleSearch(e) }}
        className='w-[280px]'
        sx={{
          '& .MuiInputBase-root': {
            '& .MuiInputBase-input': {
              padding: '10px',
            }
          },
        }}
        InputProps={{
          startAdornment: (
            <InputAdornment position='start'>
              <Search color='white' />
            </InputAdornment>
          ),
        }}
        placeholder={placeholder}
      />
    </>
  )
}

export default SearchBar