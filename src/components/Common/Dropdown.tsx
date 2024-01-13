import React, { useState } from 'react'
import InputLabel from '@mui/material/InputLabel'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select, { SelectChangeEvent } from '@mui/material/Select'
import { DropDownProps } from './type'
import { Box } from '@mui/material'
import Icons from '@/assets/icon'

export const OutlinedDropdown: React.FC<DropDownProps> = ({
  selectLabel,
  w,
  inputLabel,
  data,
}) => {
  const [value, setValue] = useState(data[0]?.value)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: w }}>
      <FormControl fullWidth>
        <InputLabel>{inputLabel}</InputLabel>
        <Select
          IconComponent={() => <Icons.DownArrow />}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={selectLabel}
          onChange={(e) => {
            handleChange(e)
          }}
          variant="outlined"
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

export const OutlinedDropdownSharp: React.FC<DropDownProps> = ({
  selectLabel,
  w,
  data,
}) => {
  const style = {
    borderRadius: 0,
    border: '1px solid #B1B5C3',
    height: 'auto',
    fontSize: '12px',
  }

  const [value, setValue] = useState(data[0]?.value)

  const handleChange = (event: SelectChangeEvent) => {
    setValue(event.target.value as string)
  }

  return (
    <Box sx={{ minWidth: w }}>
      <FormControl fullWidth>
        <Select
          style={style}
          IconComponent={() => <Icons.DropDownArrow width="7" height="4"/>}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={value}
          label={selectLabel}
          onChange={(e) => {
            handleChange(e)
          }}
          variant="outlined"
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
