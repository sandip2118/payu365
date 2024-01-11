import React, { useState } from 'react'
import Icons from '@/assets/icon'
import {
  Pagination,
  TableContainer,
  TableHead,
  TableSortLabel,
  Table,
  TableBody,
  TableCell,
  TableRow,
} from '@mui/material'
import { MarketViewProps } from './type';
import Image from 'next/image';
import { OutlinedButton } from '../Common/Button';
import Page from '../Common/Page';
import Card from '../Common/Card';
import CurrencyInfo from '../Common/CurrencyInfo';

const MarketView: React.FC<MarketViewProps> = ({ handleTrade }) => {
  const [order, setOrder] = useState<string>('asc')
  const [orderBy, setOrderBy] = useState<string>('name')
  const [selecteCurrency, setSelecteCurrency] = useState({
    "id": 98,
    "name": "India",
    "isoAlpha2": "IN",
    "isoAlpha3": "IND",
    "isoNumeric": 356,
    "currency": {
      "code": "INR",
      "name": "Rupee",
      "symbol": "₹"
    },
    "flag": "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB4AAAAUCAYAAACaq43EAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyRpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSIgeG1wTU06SW5zdGFuY2VJRD0ieG1wLmlpZDowMEUwNDkwQzE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiIgeG1wTU06RG9jdW1lbnRJRD0ieG1wLmRpZDowMEUwNDkwRDE3N0QxMUUyODY3Q0FBOTFCQzlGNjlDRiI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuaWlkOjAwRTA0OTBBMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAwRTA0OTBCMTc3RDExRTI4NjdDQUE5MUJDOUY2OUNGIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+OIHw6AAAAPlJREFUeNpi/D/T+D/DAAAmhgECoxYPf4sZ/wPBQFn8CUjzEqvh7cffDAtX32Xg4WZhYGJkZHj/8SdDTLAKg6QIGyn2fiY5qGdN38/A8OU5g5k2F4OxBicD59+3DHNm7CXZxyykKL548TGDmCgHg6mpMoObWz/Dr19/GHbvLmS4desZWE5fX5Y2Fv/794+BhYWR4e/ff0BLfwPxX4Y/f0BiTAz///+jbRy3te5gEBTgYrCyVgY65D/DuXOPGJ49/cBQW+9FUhyTbPGnt78Z9qx7wiAozMnAyMTI8OblVwYnfxkGIQk2ki0emOwk3MExWjuNWjy8LAYIMADBumJ9k9IhVwAAAABJRU5ErkJggg=="
  });

  const rows = [
    { currency: 'USD', calories: 1.03038932, fat: 0.0012456, carbs: 0.0012456 },
    { currency: 'INR', calories: 0.001541, fat: 0.0012456, carbs: 0.0012456 }
  ];

  const column = Array.from(new Set(rows.flatMap(Object.keys)))

  const handleSortRequest = (property: any) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const sortedRows = rows.sort((a: any, b: any) => {
    const aValue = a[orderBy]
    const bValue = b[orderBy]
    if (orderBy === 'currency') {
      if (order === 'asc') {
        return aValue.localeCompare(bValue)
      } else {
        return bValue.localeCompare(aValue)
      }
    } else {
      if (order === 'asc') {
        return aValue - bValue
      } else {
        return bValue - aValue
      }
    }
  })

  return (
    <Page title={'Markets'}>
      <div className="my-5 mx-5">
        <Card title="Market View" isBorder={true}>
          <CurrencyInfo country={selecteCurrency} onSelect={(val) => setSelecteCurrency(val)}
            width="w-full"
            menuStyle='w-[250px] sm:w-[300px]'
            RenderMenuBtn={
              <div className={`flex justify-between bg-BLACK_304 p-3.5 rounded-lg items-center justify-center h-[45px]`}>
                <div className='flex gap-2.5'>
                  <div className='w-[20px] h-[15px]'>
                    <Image src={selecteCurrency?.flag} alt="Flag" width={20} height={15} className='w-[20px] h-[15px]' />
                  </div>
                  <p className="font12R mx-[5px]">
                    {selecteCurrency?.currency?.code} ({selecteCurrency?.currency?.name})
                  </p>
                </div>
                <Icons.DownArrow />
              </div>
            } />
          <TableContainer className="mt-5">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow>
                  {column.map((key, index) => (
                    <TableCell
                      key={index}
                      className="text-white border-none market-table capitalize"
                    >
                      {index < 2 ? (
                        <TableSortLabel
                          className="felx gap-1"
                          active={orderBy === key}
                          direction={orderBy === key ? order : 'asc'}
                          onClick={() => handleSortRequest(key)}
                          IconComponent={() => null}
                        >
                          {key} <Icons.TBArrowIcon />
                        </TableSortLabel>
                      ) : (
                        <p className='text-white'> {key} </p>
                      )}
                    </TableCell>
                  ))}
                  <TableCell
                    align="center"
                    className="w-[172px] border-none"
                  >
                    <p className='text-white'>
                      Actions</p>
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {sortedRows.map((row) => (
                  <TableRow key={row.currency}>
                    <TableCell
                      component="th"
                      scope="row"
                      className="border-b border-GRAY_101 dark:border-gray-700"
                    >
                      <div className="text-white flex items-center gap-2">
                        {row.currency === "USD" &&
                          <img src={'/assets/images/us.png'} alt='profile' className='w-[32px] h-[24px] bg-GRAY_101' />
                        }
                        {row.currency === "INR" &&
                          <img src={'/assets/images/India.png'} alt='profile' className='w-[32px] h-[24px] bg-GRAY_101' />
                        }
                        <div className="font-medium">
                          <p className="text-sm">{row.currency}</p>
                          <p className="text-GRAY_101 text-xs">
                            United States Dollar
                          </p>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell className=" border-b border-GRAY_101 border-solid">
                      <p className="text-white" >
                        {row.calories}
                      </p>
                    </TableCell>
                    <TableCell className="text-white border-b border-GRAY_101 border-solid">
                      <p className='text-white'>
                        {row.fat} </p>
                      <p className="flex text-RED_02 text-xs font-medium items-center">
                        0.0012456 <Icons.DownArrowRedIcon color={'red'} />
                      </p>
                    </TableCell>
                    <TableCell className="text-white border-b border-GRAY_101 border-solid">
                      <p className='text-white'>
                        {row.carbs}</p>
                      <p className="flex text-GREEN_01 text-xs font-medium items-center">
                        0.0012456 <Icons.ArrowTop />
                      </p>
                    </TableCell>
                    <TableCell
                      align="right"
                      className="border-b border-GRAY_101 border-solid"
                    >
                      <div className="flex justify-end gap-2.5">
                        <OutlinedButton
                          text="Swap"
                          color="white"
                          br="10"
                          borderColor="BLACK_306"
                          padding="9px 21px 10px 21px"
                        />
                        <OutlinedButton
                          text="Trade"
                          color="white"
                          br="10"
                          borderColor="BLACK_306"
                          padding="9px 21px 10px 21px"
                          onClick={() => handleTrade(row.currency)}
                        />
                      </div>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Card>
        <Pagination
          count={10}
          variant="outlined"
          shape="rounded"
          className="pagination"
        />
      </div>
    </Page>
  )
}

export default MarketView
