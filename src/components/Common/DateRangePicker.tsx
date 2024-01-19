import React, { useState } from 'react'
import { DateRangePicker } from 'rsuite'
import { ContainedDropdown } from '../Common/Dropdown'
import { addDays, startOfDay, endOfDay, subDays, format } from 'date-fns'
import Icons from '@/assets/icon'

const DateRange = () => {
  const ranges = [
    {
      label: 'Past 7 Days',
      value: [subDays(new Date(), 6), endOfDay(new Date())],
    },
    {
      label: 'Past 30 Days',
      value: [
        startOfDay(subDays(new Date(), 29)),
        endOfDay(subDays(new Date(), 1)),
      ],
    },
    {
      label: 'Past 90 Days',
      value: [startOfDay(subDays(new Date(), 89)), endOfDay(new Date())],
    },
    {
      label: 'Custom',
      value: [startOfDay(subDays(new Date(), 6)), endOfDay(new Date())],
    },
  ]

  const [selectRangeLabel, setSelectRangeLabel] = useState(ranges[0].label)
  const [selectRange, setSelectRange] = useState<any>(ranges[0].value)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedLabelVal = e.target.value
    const selectedRange = ranges.find(
      (range) => range.label === selectedLabelVal
    )

    if (selectedRange) {
      setSelectRange(selectedRange.value)
    }
    setSelectRangeLabel(selectedLabelVal)
  }

  const renderTitle = (calendarDate: any) => {
    const formattedDate = format(calendarDate, 'MMMM yyyy')
    return (
      <div>
        <div>{formattedDate}</div>
      </div>
    )
  }

  const resetButton = () => {
    return (
      <p
        style={{
          padding: '0.3rem',
          backgroundColor: '#777E90',
          color: 'white',
          borderRadius: '5px',
          width: '4.625rem',
          height: '1.75rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        Reset
      </p>
    )
  }

  return (
    <>
      <div className="w-full sm:justify-between flex-col md:justify-between flex items-center gap-4 sm:flex-row md:flex-row xl:w-auto">
        <div className="flex justify-between box-content border border-GRAY_101 items-center">
          <div className="flex items-center">
            <div>
              <ContainedDropdown
                data={ranges}
                selectRangeLabel={selectRangeLabel}
                onChange={handleChange}
              />
            </div>
            <div className="flex items-center border-l border-GRAY_101">
              <DateRangePicker
                className="transactions-date-range-picker"
                value={selectRange}
                character=", "
                placement="bottomEnd"
                preventOverflow
                renderTitle={renderTitle}
                defaultCalendarValue={selectRange}
                format="d MMM yyyy"
                placeholder={
                  selectRange !== null && selectRange.length !== 0
                    ? selectRange
                    : 'Select Date Range'
                }
                onChange={(value) => {
                  setSelectRange(value)
                }}
                onClick={(event: any) => {
                  event.preventDefault()
                }}
                ranges={[
                  {
                    label: resetButton(),
                    value: [
                      startOfDay(subDays(new Date(), 6)),
                      endOfDay(new Date()),
                    ],
                  },
                ]}
              />
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[8px] cursor-pointer">
          <Icons.DownloadDocument />
          <h1 className="text-white text-sm not-italic font-medium leading-[normal] w-max">
            Download CSV
          </h1>
        </div>
      </div>
    </>
  )
}

export default DateRange
