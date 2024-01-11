/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Icons from '@/assets/icon';
import { colors } from '../../themes';
import { PR_MA_TABS, ROUTE } from '@/Constants';
import { Box, TableSortLabel } from '@mui/material';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Arrow from '../Common/Arrow';

function MyAssets() {
  const router = useRouter();

  const [selectedTab, setSelectedTab] = useState<string>(PR_MA_TABS.My_ASSETS);


  const rows = [
    { wallet: 'Spot', amount: 1.03038932, ratio: 0.0012456 },
    { wallet: 'Earn', amount: 0.00154155, ratio: 0.0012456 },
  ];

  const column = Array.from(new Set(rows.flatMap(Object.keys)))

  const sortedRows = rows.sort((a: any, b: any) => {
    return a
  })

  const rowsW = [
    { wallet: 'Spot', amount: 1.04058789, ratio: 0.0012456 },
    { wallet: 'Earn', amount: 0.00639585, ratio: 0.0012456 },
  ];

  const columnW = Array.from(new Set(rowsW.flatMap(Object.keys)))

  const sortedRowsW = rowsW.sort((a: any, b: any) => {
    return a
  })

  const PopupMenu = [
    {
      title: 'View Assets',
      icon: <Icons.MyAsset color={colors.GRAY_101} />,
      route: ''
    },
    {
      title: 'Transfer',
      icon: <Icons.TransferIcon color={colors.GRAY_101} />,
      route: ROUTE.TRANSFER
    },
    {
      title: 'Deposit',
      icon: <Icons.Deposit color={colors.GRAY_101} />,
      route: ''
    },
  ]

  return (
    <div className='bg-BLACK_301 w-full rounded-[10px] px-5 mt-5 py-5'>
      <div className='mb-5 flex justify-between ite'>
        <p className='font20SB'>
          My Assets
        </p>
        <p className='font14SB text-BLUE_201'>
          More
        </p>
      </div>

      <div className="border-b border-GRAY_101 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-5">
          <li>
            <button className={`${selectedTab === PR_MA_TABS.My_ASSETS ? 'border-b-[3px] border-BLUE_201 text-BLUE_201' : 'text-GRAY_101 border-transparent'} font16RB inline-flex items-center justify-center p-2  border-transparent rounded-t-lg hover:text-gray-600 group`}
              onClick={() => { setSelectedTab(PR_MA_TABS.My_ASSETS) }}
            >
              <Icons.MyAsset color={selectedTab === PR_MA_TABS.My_ASSETS ? colors.BLUE_201 : colors.GRAY_101} className='mr-[10px]' />
              My Asset
            </button>
          </li>
          <li>
            <button className={`${selectedTab === PR_MA_TABS.WALLET_VIEW ? 'border-b-[3px] border-BLUE_201 text-BLUE_201' : 'text-GRAY_101'} font16RB inline-flex items-center justify-center p-2 border-transparent rounded-t-lg hover:text-gray-600 group`} aria-current="page"
              onClick={() => { setSelectedTab(PR_MA_TABS.WALLET_VIEW) }}
            >
              <Icons.Hot color={selectedTab === PR_MA_TABS.WALLET_VIEW ? colors.BLUE_201 : colors.GRAY_101} className='mr-[10px]' />Wallet View
            </button>
          </li>
        </ul>
      </div>

      <div className='mt-5 relative'>
        {selectedTab === PR_MA_TABS.My_ASSETS &&
          <TableContainer className="mt-5">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className='bChange'>
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
                        key
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
              <TableBody>
                {sortedRows.map((row, i) => (
                  <TableRow key={row.wallet}
                    className={` ${rows?.length == i + 1 ? 'border-[0px]' : 'border-b'} bChange border-BLACK_306 bChange`}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="border-b border-GRAY_101 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        {i == 0 &&
                          <Icons.Spot />
                        }
                        {i == 1 &&
                          <Icons.Earn />
                        }
                        <p className='font14RB text-white'>
                          {row.wallet}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell className=" border-b border-GRAY_101 border-solid">
                      <p className='font14RB text-white'>
                        {row.amount}
                      </p>
                      <p className='font12RB text-GRAY_101 mt-1'>
                        ₹80.03
                      </p>
                    </TableCell>
                    <TableCell className="border-b border-GRAY_101 border-solid">
                      <p className='font14RB text-RED_01 flex'>
                        {row.ratio} <Icons.ArrowTop color={colors.RED_01} className='rotate-180' />
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
                          <MenuButton
                            className=""
                            onClick={() => { }}
                          >
                            <div className="flex">
                              <Icons.VerticalMore />
                            </div>
                          </MenuButton>
                        }
                      >
                        <div className="bg-[#292932] cursor-pointer py-[20px] px-[24px] w-[200px] rounded-[7px]">
                          {PopupMenu?.map((d) => {
                            return (
                              <MenuItem className="!p-0">
                                <div className=" flex items-center h-[48px]"
                                >
                                  {d.icon}
                                  <p className="font14R text-GRAY_101 ml-[15px]">
                                    {d.title}
                                  </p>
                                </div>
                              </MenuItem>
                            )
                          })}

                        </div>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
        {selectedTab === PR_MA_TABS.WALLET_VIEW &&
          <TableContainer className="mt-5">
            <Table aria-label="simple table">
              <TableHead>
                <TableRow className='bChange'>
                  {columnW.map((key, index) => (
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
                        key
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
              <TableBody>
                {sortedRowsW.map((row, i) => (
                  <TableRow key={row.wallet}
                    className={` ${rows?.length == i + 1 ? 'border-[0px]' : 'border-b'} bChange border-BLACK_306 bChange`}
                  >
                    <TableCell
                      component="th"
                      scope="row"
                      className="border-b border-GRAY_101 dark:border-gray-700"
                    >
                      <div className="flex items-center gap-2">
                        {i == 0 &&
                          <Icons.Spot />
                        }
                        {i == 1 &&
                          <Icons.Earn />
                        }
                        <p className='font14RB text-white'>
                          {row.wallet}
                        </p>
                      </div>
                    </TableCell>

                    <TableCell className=" border-b border-GRAY_101 border-solid">
                      <p className='font14RB text-white'>
                        {row.amount}
                      </p>
                      <p className='font12RB text-GRAY_101 mt-1'>
                        ₹80.03
                      </p>
                    </TableCell>
                    <TableCell className="border-b border-GRAY_101 border-solid">
                      <p className='font14RB text-RED_01 flex'>
                        {row.ratio} <Icons.ArrowTop color={colors.RED_01} className='rotate-180' />
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
                          <MenuButton
                            className=""
                            onClick={() => { }}
                          >
                            <div className="flex">
                              <Icons.VerticalMore />
                            </div>
                          </MenuButton>
                        }
                      >
                        <div className="bg-[#292932] cursor-pointer py-[20px] px-[24px] w-[200px] rounded-[7px]">
                          {PopupMenu?.map((d) => {
                            return (
                              <MenuItem className="!p-0">
                                <div className=" flex items-center h-[48px]"
                                  onClick={() => router.push(d.route)}
                                >
                                  {d.icon}
                                  <p className="font14R text-GRAY_101 ml-[15px]">
                                    {d.title}
                                  </p>
                                </div>
                              </MenuItem>
                            )
                          })}

                        </div>
                      </Menu>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        }
      </div>
    </div>
  );
}

export default MyAssets;
