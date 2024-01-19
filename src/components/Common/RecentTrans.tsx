/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Icons from '@/assets/icon';
import { colors } from '../../themes';
import { Box, TableSortLabel } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Arrow from './Arrow';
import moment from 'moment';
import Card from './Card';
import { ROUTE } from '@/Constants';

function RecentTrans() {
  const router = useRouter();
  const [order, setOrder] = useState<string>('asc')
  const [orderBy, setOrderBy] = useState<string>('name')
  const rows = [
    { name: 'Jack Richer', date: moment().format('DD,MM,YYYY'), amount: '₹80,000.00', status: 'Done' },
    { name: 'Self Swap', date: moment().format('DD,MM,YYYY'), amount: '₹1,000.00', status: 'Done' },
    { name: 'Self Swap', date: moment().format('DD,MM,YYYY'), amount: '₹1,400.00', status: 'Pending' },
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
    if (orderBy === 'name') {
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
    <Card title={'Recent Transactions'} cardTopBtnName={'View All'} onclick={() => router.push(ROUTE.TRANSACTIONS)}>
      <div className='mt-[10px] relative'>
        <TableContainer className="">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className='bChange'>
                {column.map((key, index) => (
                  <TableCell
                    key={index}
                    className="text-white border-none market-table capitalize min-w-[160px]"
                  >
                    {index < 4 ? (
                      <TableSortLabel
                        className="flex gap-1 font12RB"
                        IconComponent={() => null}
                        onClick={() => handleSortRequest(key)}
                      >
                        {key} <Icons.TBArrowIcon />
                      </TableSortLabel>
                    ) : (
                      key
                    )}
                  </TableCell>
                ))}
                <TableCell
                  align="left"
                  className="w-[70px] border-none"
                >
                  <p className='font12RB text-white'>
                    Actions
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            {/* <div className='h-[14px]' /> */}
            <TableBody className=''>
              {sortedRows.map((row, i) => {
                let statusColor;
                if (row.status === 'Done') {
                  statusColor = colors.GREEN_02
                } else if (row.status === 'Pending') {
                  statusColor = colors.YELLOW_01
                }
                return (
                  <TableRow key={i}
                    className={` ${rows?.length == i + 1 ? 'border-[0px]' : 'border-b'} bChange border-BLACK_306 bChange`}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="border-b border-GRAY_101 dark:border-gray-700"
                    >
                      <div className="text-white flex items-center">
                        <img src={'/assets/images/rc.png'} alt='profile' className='w-[48px] h-[48px] rounded-[10px] bg-GRAY_101' />
                        <Box className='ml-[7px]'>
                          <p className='font14RB'>
                            {row.name}
                          </p>
                          <div className='font12RB flex items-center text-GRAY_101 mt-1'>
                            INR <Icons.ArrowRight className='mx-1' /> USD
                          </div>
                        </Box>
                      </div>
                    </TableCell>
                    <TableCell className="text-white border-b border-GRAY_101 border-solid">
                      <p className='font14RB text-white'>
                        {row.date}
                      </p>
                    </TableCell>
                    <TableCell className="text-white border-b border-GRAY_101 border-solid">
                      <p className='font14RB text-white'>
                        {row.amount}
                      </p>
                    </TableCell>
                    <TableCell className="text-white border-b border-GRAY_101 border-solid font14RB" sx={{ color: statusColor }}>
                      <Box className='' sx={{ color: statusColor }}>
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell
                      align="center"
                      className="border-b border-GRAY_101 border-solid"
                    >
                      <div className="cursor-pointer rounded-[7px] border border-BLACK_306 h-[36px] w-[88px] items-center justify-center inline-flex">
                        <p className='font14SB text-white'>
                          Details
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              }

              )}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </Card>
  );
}

export default RecentTrans;
