/* eslint-disable complexity */
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Icons from '@/assets/icon';
import { colors } from '../../themes';
import { MR_TABS } from '@/Constants';
import { Box, TableCell, TableSortLabel } from '@mui/material';
import CurrencyInfo from '../Common/CurrencyInfo';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Arrow from '../Common/Arrow';
import { Menu, MenuButton, MenuItem } from '@szhsin/react-menu';
import Image from 'next/image';
import Card from '../Common/Card';

function MarketRate() {
  const router = useRouter();

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

  const rows = [
    { currency: 'USD', 'Qty_Avl_Amount': 1.03038932, price: 0.0012456 },
    { currency: 'INR', 'Qty_Avl_Amount': 0.001541000, price: 0.0012456 }
  ];

  const column = Array.from(new Set(rows.flatMap(Object.keys)))

  const sortedRows = rows.sort((a: any, b: any) => {
    return a
  })

  const PopupMenu = [
    {
      title: 'View Assets',
      icon: <Icons.MyAsset color={colors.GRAY_101} />
    },
    {
      title: 'Transfer',
      icon: <Icons.TransferIcon color={colors.GRAY_101} />
    },
    {
      title: 'Deposit',
      icon: <Icons.Deposit color={colors.GRAY_101} />
    },
  ]
  return (

    <Card title={'Market Rate'} cardTopBtnName={'View All'}>
      <div className='justify-end grid my-5 relative'>
        <CurrencyInfo onSelect={(val) => setSelecteCurrency(val)}
          menuStyle='w-[250px] sm:w-[300px]'
          RenderMenuBtn={
            <div className={`flex bg-BLACK_304 px-3 rounded-lg items-center justify-center w-[130px] h-[30px]`}>
              <div className='w-[20px] h-[15px]'>
                <Image src={selecteCurrency?.flag} alt="Flag" width={20} height={15} className='w-[20px] h-[15px]' />
              </div>
              <p className="font12R mx-[5px]">
                {selecteCurrency?.currency?.symbol} ({selecteCurrency?.currency?.code})
              </p>
              <Icons.DownArrow />
            </div>
          }
        />
      </div>

      <div className="border-b border-GRAY_101 dark:border-gray-700">
        <ul className="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400 gap-5">
          <li>
            <button className={`${selectedTab === MR_TABS.My_ASSETS ? 'border-b-[3px] border-BLUE_201 text-BLUE_201' : 'text-GRAY_101 border-transparent'} font16RB inline-flex items-center justify-center p-2  border-transparent rounded-t-lg hover:text-gray-600 group`}
              onClick={() => { setSelectedTab(MR_TABS.My_ASSETS) }}
            >
              <Icons.MyAsset color={selectedTab === MR_TABS.My_ASSETS ? colors.BLUE_201 : colors.GRAY_101} className='mr-[10px]' />
              My Asset
            </button>
          </li>
          <li>
            <button className={`${selectedTab === MR_TABS.HOT_TRENDING ? 'border-b-[3px] border-BLUE_201 text-BLUE_201' : 'text-GRAY_101'} font16RB inline-flex items-center justify-center p-2 border-transparent rounded-t-lg hover:text-gray-600 group`} aria-current="page"
              onClick={() => { setSelectedTab(MR_TABS.HOT_TRENDING) }}
            >
              <Icons.Hot color={selectedTab === MR_TABS.HOT_TRENDING ? colors.BLUE_201 : colors.GRAY_101} className='mr-[10px]' />Hot Trending
            </button>
          </li>
          <li>
            <button className={`${selectedTab === MR_TABS.FAVORITE ? 'border-b-[3px] border-BLUE_201 text-BLUE_201' : 'text-GRAY_101'} font16RB inline-flex items-center justify-center p-2 border-transparent rounded-t-lg hover:text-gray-600 group`}
              onClick={() => { setSelectedTab(MR_TABS.FAVORITE) }}
            >
              <Icons.Favourite color={selectedTab === MR_TABS.FAVORITE ? colors.BLUE_201 : colors.GRAY_101} className='mr-[10px]' />Favorite
            </button>
          </li>
        </ul>
      </div>

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
                <TableRow key={row.currency}
                  className={` ${rows?.length == i + 1 ? 'border-[0px]' : 'border-b'} bChange border-BLACK_306 bChange`}
                >
                  <TableCell
                    component="th"
                    scope="row"
                    className="border-b border-GRAY_101 dark:border-gray-700"
                  >
                    <div className="flex items-center gap-2">
                      {i === 0 &&
                        <img src={'/assets/images/us.png'} alt='profile' className='w-[32px] h-[24px] bg-GRAY_101' />
                      }
                      {i === 1 &&
                        <img src={'/assets/images/India.png'} alt='profile' className='w-[32px] h-[24px] bg-GRAY_101' />
                      }

                      <Box className='ml-[7px]'>
                        <p className='font14RB text-white'>
                          {row.currency}
                        </p>
                        <div className='font12RB flex items-center text-GRAY_101 mt-1'>
                          {i ?
                            'Indian Rupees'
                            :
                            'United States Dollar'
                          }
                        </div>
                      </Box>
                    </div>
                  </TableCell>

                  <TableCell className=" border-b border-GRAY_101 border-solid">
                    <p className='font14RB text-white'>
                      {row.Qty_Avl_Amount}
                    </p>
                    <p className='font12RB text-GRAY_101'>
                      ₹80.03
                    </p>
                  </TableCell>
                  <TableCell className="border-b border-GRAY_101 border-solid">
                    <p className='font14RB text-white'>
                      {row.price}
                    </p>
                    <p className="flex text-GREEN_01 text-xs font-medium items-center">
                      0.0012456 <Icons.ArrowTop />
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

      </div >
    </Card>
  );
}

export default MarketRate;
