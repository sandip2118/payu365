import React, { useEffect, useState } from 'react'
import { Box, Typography } from '@mui/material'
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord'
import PersonIcon from '@mui/icons-material/Person'
import CopyAllRounded from '@mui/icons-material/CopyAllRounded';
import Input from '../Common/Input'
import DateRangePicker from '../Common/DateRangePicker'
import Modal from '../Common/Modal'
import TransactionTable from './Table'
import MobileTransactions from './MobileTransactions'
import ColorTabs from '../Common/Tabs';
import Card from '../Common/Card';
import SearchBar from '../Common/SearchBar';
import { ContainedButton } from '../Common/Button';

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: any
}

// * Custom TabPanel
////////////////////
function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  )
}

const rows0 = [
  {
    Name: 'Jack Richer',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed',
  },
  {
    Name: 'Naquan Afumba',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Danger',
    TXStatus: 'Completed',
  },
  {
    Name: 'Elice Silva',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Net Banking',
    Amount: '+ ₹10,000.00',
    status: 'Warning',
    TXStatus: 'Pending',
  },
]
const rows1 = [
  {
    Name: 'Joan Doe',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed',
  },
  {
    Name: 'Calista Mayasari',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Danger',
    TXStatus: 'Completed',
  },
  {
    Name: 'Patrick Jones',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Net Banking',
    Amount: '+ ₹10,000.00',
    status: 'Warning',
    TXStatus: 'Pending',
  },
]
const rows2 = [
  {
    Name: 'Naquan Afumba',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed',
  },
  {
    Name: 'Elise Silva',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Danger',
    TXStatus: 'Completed',
  },
  {
    Name: 'Amira Khan',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Net Banking',
    Amount: '+ ₹10,000.00',
    status: 'Warning',
    TXStatus: 'Pending',
  },
]
const rows3 = [
  {
    Name: 'Jack Richer',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed',
  },
  {
    Name: '木村 知実',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Danger',
    TXStatus: 'Completed',
  },
  {
    Name: 'Patrick Jones',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Net Banking',
    Amount: '+ ₹10,000.00',
    status: 'Warning',
    TXStatus: 'Pending',
  },
]
const rows4 = [
  {
    Name: '譙芬心',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed',
  },
  {
    Name: 'Amina Novak',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Danger',
    TXStatus: 'Completed',
  },
  {
    Name: 'Shakia Ababio',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Net Banking',
    Amount: '+ ₹10,000.00',
    status: 'Warning',
    TXStatus: 'Pending',
  },
]
const rows5 = [
  {
    Name: 'Ben Brooks',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹50,000.00',
    status: 'Success',
    TXStatus: 'Completed',
  },
  {
    Name: 'Ali Ahmad',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Danger',
    TXStatus: 'Completed',
  },
  {
    Name: 'Elice Silva',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Transfer Through Net Banking',
    Amount: '+ ₹10,000.00',
    status: 'Warning',
    TXStatus: 'Pending',
  },
]
const tabData = [
  { id: 0, label: 'All', value: 'One', content: rows0 },
  { id: 1, label: 'Received', value: 'Two', content: rows1 },
  { id: 2, label: 'Transfer', value: 'Three', content: rows2 },
  { id: 3, label: 'Deposit', value: 'Four', content: rows3 },
  { id: 4, label: 'Withdraw', value: 'Five', content: rows4 },
  { id: 5, label: 'Requested', value: 'Six', content: rows5 },
]

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  backgroundColor: '#292932',
  border: 'none',
  borderRadius: '20px',
  boxShadow: 24,
  p: 4,
  display: 'flex',
  flexDirection: 'column',
  gap: '20px',
  padding: '0px 0px 20px 0px',
}

const TransactionsAll = () => {
  const [searchValue, setSearchValue] = useState<string>('')
  const [value, setValue] = useState<Number>(0)
  const [filteredData, setFilteredData] = useState<any[]>([])
  const [minAmount, setMinAmount] = useState<string>('')
  const [maxAmount, setMaxAmount] = useState<string>('')
  const [open, setOpen] = useState<boolean>(false)

  const handleClose = () => {
    setOpen(false)
  }

  const handleChange = (event: React.SyntheticEvent, newValue: Number) => {
    setValue(newValue)
  }

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    }
  }

  const handleViewDetails = () => {
    setOpen(true)
  }

  useEffect(() => {
    const selectedTab = tabData[value]
    const selectedRowsArray = selectedTab.content

    const filteredContent = selectedRowsArray.filter((item: any) => {
      return Object.values(item).some((val: any) =>
        val.toString().toLowerCase().includes(searchValue.toLowerCase())
      )
    })

    setFilteredData(filteredContent)
  }, [searchValue, value, tabData])

  useEffect(() => {
    const selectedTab = tabData[value]
    const selectedRowsArray = selectedTab.content

    const filteredContent = selectedRowsArray.filter((item: any) => {
      const matchName = Object.values(item).some((val: any) =>
        val.toString().toLowerCase().includes(searchValue.toLowerCase())
      )

      const amountString = item.Amount.toString()
      const amount = parseFloat(amountString.replace(/[^\d.-]/g, ''))

      const matchAmountRange =
        (!minAmount ||
          amount >= parseFloat(minAmount.replace(/[^\d.-]/g, ''))) &&
        (!maxAmount || amount <= parseFloat(maxAmount.replace(/[^\d.-]/g, '')))

      return matchName && matchAmountRange
    })

    setFilteredData(filteredContent)
  }, [searchValue, minAmount, maxAmount, value, tabData])

  const handleSearch = (e: any) => {
    setSearchValue(e.target.value)
  }

  const handleMinAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMinAmount(e.target.value)
  }

  const handleMaxAmountChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMaxAmount(e.target.value)
  }

  const ModalTitle = () => {
    return (
      <>
        <div className="flex flex-col justify-center items-center gap-[15px]">
          <PersonIcon color="orange" fontSize="large" />
          <div className="flex flex-col items-center gap-2.5">
            <h1 className="text-white text-center text-2xl font-bold">
              Jack Richer Dawson
            </h1>
            <div className="flex items-center gap-1 text-GREEN_02">
              <FiberManualRecordIcon className="text-xs" />
              <p className="text-sm">Received Money</p>
            </div>
            <h1 className="text-white text-center text-3xl font-bold">
              ₹10,000.00
            </h1>
          </div>
        </div>
      </>
    )
  }

  return (
    <>
      <div className="m-5">
        <div className="w-full gap-5 sm:flex sm:flex-col lg:flex-col xl:flex-row md:justify-between xl:gap-5 items-center border-GRAY_101 xl:border-b lg:border-b-0 md:border-b-0">
          <ColorTabs data={tabData} value={value} onChange={handleChange} />
          <DateRangePicker />
        </div>
        <div className="mt-[22px]">
          <Card>
            <div className="gap-5 pb-5 flex flex-col md:flex-row lg:flex-row justify-between items-center border-b border-GRAY_101">
              <SearchBar
                placeholder="Search by name"
                searchValue={searchValue}
                handleSearch={handleSearch}
                className="w-full md:w-auto sm:w-full"
              />
              <div className="flex gap-2.5">
                <div className="flex items-center">
                  <p className="font-medium text-xs text-GRAY_101 md:text-sm sm:text-sm">
                    Amount Range :
                  </p>
                </div>
                <div className="flex items-center">
                  <Input
                    classes="w-auto md:w-auto sm:w-auto"
                    placeholder="Min Amount"
                    onChange={handleMinAmountChange}
                    value={minAmount}
                  />
                  <div className="text-GRAY_101 text-center text-sm font-medium">
                    -
                  </div>
                  <Input
                    classes="w-auto md:w-auto sm:w-auto"
                    placeholder="Max Amount"
                    onChange={handleMaxAmountChange}
                    value={maxAmount}
                  />
                </div>
              </div>
            </div>

            {tabData?.map((tab, index) => (
              // <CustomTabPanel key={index} value={value} index={index}>
              <div
                role="tabpanel"
                hidden={value !== index}
                id={`simple-tabpanel-${index}`}
                aria-labelledby={`simple-tab-${index}`}
                // {...other}
              >
                <div className="sm:hidden lg:hidden xl:block hidden">
                  <TransactionTable
                    rows={filteredData}
                    onClick={handleViewDetails}
                  />
                </div>
                <div className="sm:block lg:block xl:hidden" >
                  <MobileTransactions
                    rows={filteredData}
                    onClick={handleViewDetails}
                  />
                </div>
              </div>
              // </CustomTabPanel>
            ))}
          </Card>
        </div>
      </div>

      <Modal
        activeModal={open}
        closeIcon={true}
        className="bg-BLACK_304 rounded-[20px]"
        onClose={handleClose}
        title={ModalTitle()}
        titleClassName="pt-5 pb-[35px] px-5 gap-[69px] rounded-[20px] bg-BLACK_302"
      >
        <div className="flex flex-col justify-center items-center gap-[30px] px-5 pt-5 pb-[30px]">
          <div className="flex flex-col justify-center items-center gap-[15px] w-full">
            <p className="text-white text-center text-[22px] font-semibold">
              Transactions Details
            </p>
            <div className="w-full flex flex-col justify-center items-center gap-2.5 border border-BLACK_306 px-[15px] py-3 rounded-[10px] border-solid">
              <div className="w-full flex justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Email</p>
                <p className="text-white text-right text-sm font-medium">
                  jackdawson@gmail.com
                </p>
              </div>
              <div className="w-full flex justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Wallet ID</p>
                <p className="text-white text-right text-sm font-medium">
                  25145789
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2.5 border border-BLACK_306 px-[15px] py-3 rounded-[10px] border-solid">
              <div className="flex w-full justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Date</p>
                <p className="text-white text-right text-sm font-medium">
                  Mar 11, 2020
                </p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Description</p>
                <p className="text-white text-right text-sm font-medium">
                  For Investment
                </p>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">Amount</p>
                <p className="text-white text-right text-sm font-medium">
                  ₹10,000.00 INR
                </p>
              </div>
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-2.5 border border-BLACK_306 px-[15px] py-3 rounded-[10px] border-solid">
              <div className="flex justify-between items-center w-full">
                <p className="text-GRAY_102 text-sm font-normal">
                  Transaction ID
                </p>
                <div className="flex gap-1">
                  <p className="text-white text-right text-sm font-medium">
                    #OP-01012487-411142...
                  </p>
                  <div className="w-[17px] h-[17px] bg-BLACK_306 rounded-full flex items-center justify-center p-2.5">
                    <CopyAllRounded
                      fontSize="1"
                      color="secondary"
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              </div>
              <div className="flex w-full justify-between items-center">
                <p className="text-GRAY_102 text-sm font-normal">
                  Payment Method
                </p>
                <p className="text-white text-right text-sm font-medium">
                  Master Credit Card
                </p>
              </div>
            </div>
          </div>
          <ContainedButton
            className="bg-BLUE_201 rounded-[5px]"
            text="Get PDF Receipt"
          />
        </div>
      </Modal>
    </>
  )
}

export default TransactionsAll
