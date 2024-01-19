import React, { useState } from 'react'
import Card from '../Common/Card'
import Page from '../Common/Page';
import ColorTabs from '../Common/Tabs';
import {
  TableContainer,
  TableHead,
  Table,
  TableBody,
  TableCell,
  TableRow,
  FormControlLabel,
  Checkbox
} from '@mui/material'
import Icons from '@/assets/icon';
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';

const TradeHistory = () => {
  const [selLang, setSelLang] = useState<string | undefined>()
  const barData = [
    { id: 0, name: "Date", isOrange: false },
    { id: 1, name: "Pair", isOrange: false },
    { id: 2, name: "Type", isOrange: false },
    { id: 3, name: "Side", isOrange: false },
    { id: 4, name: "Price", isOrange: false },
    { id: 5, name: "Amount", isOrange: false },
    { id: 6, name: "Filled", isOrange: false },
    { id: 7, name: "Total", isOrange: false },
    { id: 8, name: "Close All", isOrange: true },
  ]

  const data = [
    { id: 0, label: "Open Orders(0)", value: "One", content: "content" },
    { id: 1, label: "Order History", value: "Two", content: "content" },
    { id: 2, label: "Trade History", value: "Three", content: "content" },
    { id: 3, label: "Funds", value: "Four", content: "content" },
  ]

  const rows = [
    // { currency: 'USD', calories: 1.03038932, fat: 0.0012456, carbs: 0.0012456 },
    // { currency: 'INR', calories: 0.001541, fat: 0.0012456, carbs: 0.0012456 }
  ];

  const arr = [
    { id: 1, name: 'INR' },
    { id: 2, name: 'US' },
  ];
  const _handleLng = (val: any | undefined) => {
    setSelLang(val.name)
  }
  const TableHeaderMenu = (name: string) => {
    return (
      <Menu
        transition
        menuStyle={{ borderRadius: '7px' }}
        menuButton={
          <MenuButton
            className="relative"
            onClick={() => { }}
          >
            <div className="flex h-[30px] rounded-lg justify-between items-center text-GRAY_101 gap-2">
              <p className={`${name === "Cancel All" ? "text-YELLOW_01" : "text-GRAY_101"}`}> 
                {selLang === undefined ? name : selLang} 
              </p>
              <Icons.DropDownArrow width="15" height="6" />
            </div>
          </MenuButton>
        }
      >
        {arr?.map((d, i) => {
          return (
            <MenuItem className="!p-0" key={i}>
              <div className="rounded-[4px] bg-BLACK_301 cursor-pointer">
                <div className="py-[5px] px-3"
                  onClick={() => _handleLng(d)}
                >
                  <p className="font14R text-white">
                    {d?.name}
                  </p>
                </div>
              </div>
            </MenuItem>
          )
        })}
      </Menu>
    )
  }

  return (
    <>
      <Page title={'Markets'}>
        <div className="my-5 mx-5">
          <Card>

            <div className="header">
              <div className="tabs flex flex-col md:flex-row w-full md:justify-between border-b border-GRAY_101 dark:border-gray-700">
                <div className="tabs">
                  <ColorTabs data={data} />
                </div>
                <div className="label md:ml-auto mt-4 md:mt-0">
                  <FormControlLabel
                    control={<Checkbox />}
                    label="Hide Other Pairs"
                    className="!leading-6 text-GRAY_101 text-[11px]"
                  />
                </div>
              </div>
            </div>

            <div className="dropdowns w-full">
              <TableContainer className="my-5">
                <Table aria-label="simple table" className='trade-history-table'>
                  <TableHead>
                    <TableRow>
                      <TableCell align='left' className="capitalize" >
                        <p className='text-GRAY_101'> Date </p>
                      </TableCell>
                      <TableCell align='center' className="capitalize" >
                        <p className='text-GRAY_101'> Pair </p>
                      </TableCell>
                      <TableCell align='center' className="capitalize" >
                        <p className='text-GRAY_101'> {TableHeaderMenu("Type")} </p>
                      </TableCell>
                      <TableCell align='center' className="capitalize" >
                        <p className='text-GRAY_101'> {TableHeaderMenu("Side")} </p>
                      </TableCell>
                      <TableCell align='center' className="capitalize" >
                        <p className='text-GRAY_101'> Price </p>
                      </TableCell>
                      <TableCell align='center' className="capitalize" >
                        <p className='text-GRAY_101'> Amount </p>
                      </TableCell>
                      <TableCell align='center' className="capitalize" >
                        <p className='text-GRAY_101'> Filled </p>
                      </TableCell>
                      <TableCell align='center' className="capitalize" >
                        <p className='text-GRAY_101'> Total </p>
                      </TableCell>
                      <TableCell align='center' className="capitalize" >
                        <p className='text-GRAY_101'> Trigger Conditions </p>
                      </TableCell>
                      <TableCell align='right' className="capitalize" >
                        <p className='text-YELLOW_01'> {TableHeaderMenu("Cancel All")} </p>
                      </TableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {rows.length !== 0 && rows.map((row) => (
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
                            {/* <OutlinedButton
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
                        /> */}
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
            </div>
            {rows.length === 0 &&
              <div className="core h-[189px] w-full text-GRAY_101 flex items-center justify-center">
                <p>You have no open orders</p>
              </div>
            }
          </Card>
        </div>
      </Page>
    </>
  )
}

export default TradeHistory

