/* eslint-disable complexity */
import React from 'react';
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

function RecentTrans() {
  const router = useRouter();

  const rows = [
    { name: 'Jack Richer', date: moment().format('DD,MM,YYYY'), amount: '₹80,000.00', status: 'Done' },
    { name: 'Self Swap', date: moment().format('DD,MM,YYYY'), amount: '₹1,000.00', status: 'Done' },
    { name: 'Self Swap', date: moment().format('DD,MM,YYYY'), amount: '₹1,400.00', status: 'Pending' },
  ];

  const column = Array.from(new Set(rows.flatMap(Object.keys)))

  const sortedRows = rows.sort((a: any, b: any) => {
    return a
  })

  return (
    <Card title={'Recent Transactions'} cardTopBtnName={'View All'}>
      <div className='mt-5 relative'>
        <TableContainer className="mt-5">
          <Table aria-label="simple table">
            <TableHead>
              <TableRow className='bChange'>
                {column.map((key, index) => (
                  <TableCell
                    key={index}
                    className="text-white border-none market-table capitalize"
                  >
                    {index < 4 ? (
                      <TableSortLabel
                        className="flex gap-1 font12RB"
                        IconComponent={() => null}
                      >
                        {key} <Icons.TBArrowIcon />
                      </TableSortLabel>
                    ) : (
                      key
                    )}
                  </TableCell>
                ))}
                <TableCell
                  align="center"
                  className="w-[172px] border-none"
                >
                  <p className='font12RB text-white'>
                    Actions
                  </p>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sortedRows.map((row, i) => {
                let statusColor;
                if (row.status === 'Done') {
                  statusColor = colors.GREEN_02
                } else if (row.status === 'Pending') {
                  statusColor = colors.YELLOW_01
                }
                return (
                  <TableRow key={row.name}
                    className={` ${rows?.length == i + 1 ? 'border-[0px]' : 'border-b'} bChange border-BLACK_306 bChange`}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="border-b border-GRAY_101 dark:border-gray-700"
                    >
                      <div className="text-white flex items-center gap-2">
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


        {/* <TableContainer
        // component={Paper}
        >
          <Table sx={{ minWidth: 650 }} aria-label="simple table" className='bg-BLACK_301'>
            <TableHead>
              <TableRow className='bChange'>
                <TableCell className='text-white'>
                  <Box className="font12RB flex items-center gap-1">
                    Name
                    <Arrow sortKey={'name'}
                      _sortData={() => { }} sortData={{}} />
                  </Box>
                </TableCell>
                <TableCell className='text-white' align="center">
                  <Box className="font12RB flex items-center gap-1 justify-center">
                    Date
                    <Arrow sortKey={'name'}
                      _sortData={() => { }} sortData={{}} />
                  </Box>
                </TableCell>
                <TableCell className='text-white' align="center">
                  <Box className="font12RB flex items-center gap-1 justify-center">
                    Amount
                    <Arrow sortKey={'name'}
                      _sortData={() => { }} sortData={{}} />
                  </Box>
                </TableCell>
                <TableCell className='text-white' align="center">
                  <Box className="font12RB flex items-center gap-1 justify-center">
                    Status
                    <Arrow sortKey={'name'}
                      _sortData={() => { }} sortData={{}} />
                  </Box>
                </TableCell>

                <TableCell className='text-white' align="center">
                  <Box className="font12RB">
                    Actions
                  </Box>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row, i) => {
                let statusColor;
                if (row.status === 'Done') {
                  statusColor = colors.GREEN_02
                } else if (row.status === 'Pending') {
                  statusColor = colors.YELLOW_01
                }
                return (
                  <TableRow
                    key={row.name}
                    className={` ${rows?.length == i + 1 ? 'border-[0px]' : 'border-b'} bChange border-BLACK_306`}
                  >
                    <TableCell className='text-white' component="th" scope="row">
                      <Box className='flex items-center'>
                        <img src='' alt='profile' className='w-[48px] h-[48px] rounded-[10px] bg-GRAY_101' />
                        <Box className='ml-[7px]'>
                          <p className='font14RB'>
                            {row.name}
                          </p>
                          <div className='font12RB flex items-center text-GRAY_101'>
                            INR <Icons.ArrowRight className='mx-1' /> USD
                          </div>
                        </Box>
                      </Box>
                    </TableCell>
                    <TableCell className='font14RB text-white' component="th" align="center">
                      {row.date}
                    </TableCell>
                    <TableCell className='font14RB text-white' component="th" align="center">
                      <Box className='flex items-center justify-center'>
                        {row.amount}
                      </Box>
                    </TableCell>
                    <TableCell align="center" component="th">
                      <Box className='flex items-center justify-center font14RB' sx={{ color: statusColor }}>
                        {row.status}
                      </Box>
                    </TableCell>
                    <TableCell className='font14RB text-RED_01' component="th" align="center" >
                      <div className="cursor-pointer rounded-[7px] border border-BLACK_306 h-[36px] w-[88px] items-center justify-center inline-flex">
                        <p className='font14SB text-white'>
                          Details
                        </p>
                      </div>
                    </TableCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </TableContainer> */}

      </div>
    </Card>
  );
}

export default RecentTrans;
