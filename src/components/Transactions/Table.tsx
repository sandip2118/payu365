import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { colors } from '../../themes';
import Icons from '@/assets/icon'
import { MR_TABS } from '@/Constants';
import { TableSortLabel, Box } from '@mui/material';
import CopyAllRounded from '@mui/icons-material/CopyAllRounded';
import PersonIcon from '@mui/icons-material/Person';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import { TableProps } from './type';

const TransactionTable: React.FC<TableProps> = ({ rows, open, setOpen, onClick }) => {

  const [selectedTab, setSelectedTab] = useState<string>(MR_TABS.My_ASSETS);
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


  const column = ["name", "Transection Id", "Date", "Amount", "TX Status"]

  const sortedRows = rows.sort((a: any, b: any) => {
    return a
  })

  const PopupMenu = [
    {
      title: 'View Details',
      icon: <Icons.List color={colors.GRAY_101} />
    },
    {
      title: 'Contact for Query',
      icon: <Icons.Receiver color={colors.GRAY_101} />
    },
    {
      title: 'Download Receipt',
      icon: <Icons.Download color={colors.GRAY_101} />
    },
  ]

  return (
    <>
      <TableContainer className="mt-5">
        <Table aria-label="simple table">
          <TableHead>

            <TableRow className='bChange bg-BLACK_304'
              sx={{
                "& .MuiTableCell-root.MuiTableCell-head": {
                  padding: "15px 0px !important",
                },
                "& .MuiTableCell-root.MuiTableCell-head:first-child": {
                  paddingLeft: "20px !important",
                  borderTopLeftRadius: "20px !important"
                },
                "& .MuiTableCell-root.MuiTableCell-head:last-child": {
                  borderTopRightRadius: "20px !important"
                }
              }}
            >
              {column.map((key, index) => (
                <TableCell
                  key={index}
                  className="text-white border-none market-table capitalize"
                >
                  {index < 3 ? (
                    <TableSortLabel
                      className="flex gap-1 font12RB"
                      IconComponent={() => null}
                    >
                      {key} <Icons.TBArrowIcon />
                    </TableSortLabel>
                  ) : (
                    <p className="text-white border-none market-table capitalize"> {key} </p>
                  )}
                </TableCell>
              ))}
              <TableCell
                align="center"
                className=" w-[172px] border-none"
              >
                <p className='font12RB text-white'>
                  Actions
                </p>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody
            sx={{
              "& .MuiTableCell-root.MuiTableCell-body:first-child": {
                paddingLeft: "20px !important",
              }
            }}
          >
            {sortedRows.map((row, i) => (
              <TableRow key={row.Name}
                className={` ${rows?.length == i + 1 ? 'border-[0px]' : 'border-b'} bChange border-BLACK_306 bChange`}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="border-b border-GRAY_101 dark:border-gray-700"
                >
                  <div className="flex items-center gap-2">
                    <PersonIcon color='orange' />
                    <Box className='ml-[7px]'>
                      <p className='font14RB text-white'>
                        {row.Name}
                      </p>
                      <div className='font12RB flex items-center text-GRAY_101 mt-1'>
                        {row.Method}
                      </div>
                    </Box>
                  </div>
                </TableCell>

                <TableCell className=" border-b border-GRAY_101 border-solid">
                  <div className='flex gap-[4px] items-center'>
                    <p className='font14RB text-white flex gap-[4px]'>
                      {row.Transaction}
                    </p>
                    <div className="w-[17px] h-[17px] bg-BLACK_304 rounded-full flex items-center justify-center p-[10px]"><CopyAllRounded fontSize='1' color='secondary' className='cursor-pointer' /></div>
                  </div>
                </TableCell>

                <TableCell className=" border-b border-GRAY_101 border-solid">
                  <p className='font14RB text-white'>
                    {row.Date}
                  </p>
                  <p className='font12RB text-GRAY_101'>
                    {row.Time}
                  </p>
                </TableCell>
                <TableCell className="border-b border-GRAY_101 border-solid">
                  <p className={`flex text-sm font-medium items-center 
                  ${row.status === 'Success' && 'text-GREEN_01'} 
                  ${row.status === 'Warning' && 'text-YELLOW_01'}
                  ${row.status === 'Danger' && 'text-RED_02'}`}>
                    {row.Amount}
                  </p>
                </TableCell>
                <TableCell className="border-b border-GRAY_101 border-solid">
                  <p className={`flex text-sm font-medium items-center 
                  ${row.TXStatus === 'Completed' && 'text-GREEN_01'} 
                  ${row.TXStatus === 'Pending' && 'text-YELLOW_01'}
                  ${row.TXStatus === 'Failed' && 'text-RED_02'}`}>
                    {row.TXStatus}
                  </p>
                </TableCell>
                <TableCell
                  align="center"
                  className="border-b border-GRAY_101 border-solid"
                >
                  <Menu
                    transition
                    menuStyle={{ borderRadius: '7px' }}
                    menuButton={
                      <MenuButton>
                        <div className="flex">
                          <Icons.VerticalMore />
                        </div>
                      </MenuButton>
                    }
                  >
                    <div className="bg-[#292932] cursor-pointer py-[20px] px-[24px] w-[200px] rounded-[7px]">
                      <MenuItem className="p-0">
                        <div className="flex items-center h-[48px]" onClick={onClick}>
                          <Icons.List color={colors.GRAY_101} />
                          <p className="text-[13px] font-medium text-GRAY_101 ml-[15px]">
                            View Details
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem className="p-0">
                        <div className="flex items-center h-[48px]">
                          <Icons.Receiver color={colors.GRAY_101} />
                          <p className="text-[13px] font-medium text-GRAY_101 ml-[15px]">
                            Contact for Query
                          </p>
                        </div>
                      </MenuItem>
                      <MenuItem className="p-0">
                        <div className="flex items-center h-[48px]">
                          <Icons.Download color={colors.GRAY_101} />
                          <p className="text-[13px] font-medium text-GRAY_101 ml-[15px]">
                            Download Receipt
                          </p>
                        </div>
                      </MenuItem>
                    </div>
                  </Menu>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer >
      {/* <TableContainer className='mt-5'>
      <Table sx={{ minWidth: 650, '& th': { borderBottom: 0 } ,borderTopLeftRadius: "11px", borderTopRightRadius: "11px"}} aria-label="simple table">
        <TableHead sx={{ backgroundColor: `${colors.BLACK_304}`, borderTopLeftRadius: "11px", borderTopRightRadius: "11px"}}>
            <TableRow sx={{ backgroundColor: `${colors.BLACK_304}`, borderTopLeftRadius: "11px", borderTopRightRadius: "11px"}}>
              <TableCell className='text-white'>Dessert (100g serving)</TableCell>
              <TableCell className='text-white' align="right">Calories</TableCell>
              <TableCell className='text-white' align="right">Fat&nbsp;(g)</TableCell>
              <TableCell className='text-white' align="right">Carbs&nbsp;(g)</TableCell>
              <TableCell className='text-white' align="right">Protein&nbsp;(g)</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="td" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      
    </TableContainer> */}
    </>
  );
}

export default TransactionTable