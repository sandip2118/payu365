import React, { useState } from 'react'
import { TextField, InputAdornment } from '@mui/material'
import Search from '@mui/icons-material/Search'
import { SearchBarProps } from './type'

const SearchBar: React.FC<SearchBarProps> = ({ placeholder, searchValue, handleSearch, className }) => {

  return (
    <TextField
      value={searchValue}
      onChange={handleSearch}
      className={className}
      sx={{
        '& .MuiInputBase-root': {
          '& .MuiInputBase-input': {
            padding: '10px',
          }
        },
        '& .MuiOutlinedInput-root': {
          color: '#777E90',
          '& fieldset': {
            borderColor: '#777E90',
            borderRadius: '11px',
            fontSize: '0.875 rem'
          },
          '&:hover fieldset': {
            borderColor: '#777E90',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#777E90',
          },
        }
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
  )
}

export default SearchBar;