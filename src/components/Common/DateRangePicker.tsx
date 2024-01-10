import React, { useState } from 'react'
import 'react-date-range/dist/styles.css'
import 'react-date-range/dist/theme/default.css'
import { DefinedRange } from 'react-date-range'
import dayjs from 'dayjs'
import { subDays } from 'date-fns'

const DateRange = () => {
  const [range, setRange] = useState([])

  const handleSelect = (ranges: any) => {
    console.log('console_ranges', ranges)
    setRange(ranges)
  }

  const customRanges = [
    {
      label: 'Last 7 Days',
      range: () => {
        const now = new Date()
        const startDate = subDays(now, 7) // Subtract 7 days for 7-day range
        return { startDate, endDate: now }
      },
    },
    {
      label: 'Last 30 Days',
      range: () => {
        const now = new Date()
        const startDate = subDays(now, 30) // Subtract 30 days for 30-day range
        return { startDate, endDate: now }
      },
    },
    {
      label: 'Last 90 Days',
      range: () => {
        const now = new Date()
        const startDate = subDays(now, 90) // Subtract 90 days for 90-day range
        return { startDate, endDate: now }
      },
    },
  ]

  return (
    <DefinedRange
      ranges={customRanges}
      onChange={handleSelect}
      staticRanges={customRanges}
    />
  )
}

export default DateRange
