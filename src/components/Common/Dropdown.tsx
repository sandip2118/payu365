import React from 'react'
import { DropDownProps } from './type'
import { Select, Box, MenuItem, FormControl } from '@mui/material'
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import CalendarIcon from '@mui/icons-material/CalendarToday';
import ArrowDropDown from '@mui/icons-material/ArrowDropDown';

export const OutlinedDropdown: React.FC<DropDownProps> = ({
  placeholder,
  data,
  classNames,
  width,
  label,
  onChange,
}) => {
  return (
    <Box sx={{ minWidth: width }}>
      <FormControl fullWidth>
        <Select
          // style={style}
          IconComponent={() => <ArrowDropDownIcon color='white' fontSize='small' />}
          // value={value}
          placeholder={placeholder}
          label={label}
          onChange={(e) => onChange(e)}
          variant="outlined"
          className={`${classNames}`}
          autoWidth={true}

        >
          {data &&
            data.map((option) => (
              <MenuItem key={option.id} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
        </Select>
      </FormControl>
    </Box>
  )
}


export const ContainedDropdown: React.FC<DropDownProps> = ({ data, width, onChange, selectRangeLabel }) => {
  return (
    <Box
      component="form"
      sx={{
        minWidth: width,
        '& .MuiInputBase-root': {
          '& .MuiInputBase-input': {
            padding: '9px',
            borderRadius: '0px',
          },
          "& .MuiSvgIcon-root": {
            color: '#ffffff'
          }
        },
        '.MuiOutlinedInput-notchedOutline': { border: 0 },
        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
          border: 0,
        },
        '& .MuiOutlinedInput-root': {
          color: '#777E90',
          padding: '0px 10px',
          '& fieldset': {
            borderColor: '#777E90',
            borderRadius: '0px',
            fontSize: '0.875 rem'
          },
          '&:hover fieldset': {
            borderColor: '#777E90',
          },
          '&.Mui-focused fieldset': {
            borderColor: '#777E90',
          },
        },
      }
      }
      noValidate
      autoComplete="off"
    >
      <Select
        labelId="select-range-label"
        id="select-range"
        value={selectRangeLabel}
        onChange={onChange}
        startAdornment={
          <CalendarIcon sx={{ marginRight: '15px' }} fontSize='1px' color='#424551' />
        }
        endAdornment={
          <ArrowDropDown sx={{ marginLeft: '25px' }} fontSize='medium' color='#424551' className='cursor-pointer' />
        }
        MenuProps={{
          sx: {
            "&& .MuiPaper-root": {
              backgroundColor: '#292932',
            },
            "&& .Mui-selected": {
              backgroundColor: "#44444F",
              color: "#FFFFFF",
            },
            "&& .MuiMenuItem-root": {
              backgroundColor: "#292932",
              color: '#777E90',
              paddingTop: "11px",
              paddingBottom: "11px",
              "&:hover": {
                backgroundColor: "#44444F",
                color: "#FFFFFF",
              },
            },
            "&& .MuiMenu-list": {
              padding: '0px'
            },
          }
        }}
        IconComponent={() => null}
        className='flex items-center'
        sx={{
          "& .MuiSvgIcon-root": {
            color: '#777E90'
          },

          boxShadow: 'none',
          '.MuiOutlinedInput-notchedOutline': { border: 0 },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            border: 0,
          },

          '&& .MuiMenuItem-root': {
            padding: 0,
          },
          '& .MuiSelect-select.MuiSelect-outlined.MuiInputBase-input ': {
            padding: "0px !important",
          }
        }}
      >
        {data && data.map((option, index) => (
          <MenuItem
            key={index} value={option.label}>
            <p className='text-[12px] text-GRAY_101'>{option.label}</p>
          </MenuItem>
        ))}
      </Select>
    </Box >
  )
}
