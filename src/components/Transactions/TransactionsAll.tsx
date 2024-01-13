import React, { useState } from 'react'
import Page from '@/components/common/Page'
import { Box, Tab, Tabs, Typography } from '@mui/material';
import Card from '../Common/Card'
import SearchBar from '../common/SearchBar'
import Input from '../common/Input'
import TransactionTable from './Table'

interface TabData {
  id: string;
  label: string;
  value: string;
  content: React.ReactNode;
}

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

// * Custom TabPanel
////////////////////

function CustomTabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

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
  );
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
    TXStatus: 'Completed'
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
  }
];
const rows1 = [
  {
    Name: 'Joan Doe',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed'
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
  }
];
const rows2 = [
  {
    Name: 'Naquan Afumba',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed'
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
  }
];
const rows3 = [
  {
    Name: 'Jack Richer',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed'
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
  }
];
const rows4 = [
  {
    Name: '譙芬心',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed'
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
  }
];
const rows5 = [
  {
    Name: 'Ben Brooks',
    Transaction: 20231119101,
    Date: '15 May 2020',
    Time: '5:00 pm',
    Method: 'Received Through Card',
    Amount: '+ ₹10,000.00',
    status: 'Success',
    TXStatus: 'Completed'
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
  }
];
const tabData = [
  { id: 0, label: 'All', value: 'One', content: rows0 },
  { id: 1, label: 'Received', value: 'Two', content: rows1 },
  { id: 2, label: 'Transfer', value: 'Three', content: rows2 },
  { id: 3, label: 'Deposit', value: 'Four', content: rows3 },
  { id: 4, label: 'Withdraw', value: 'Five', content: rows4 },
  { id: 5, label: 'Requested', value: 'Six', content: rows5 },
]
const AllRows = [
  { rows0: rows0 },
  { rows1: rows1 },
  { rows2: rows2 },
  { rows3: rows3 },
  { rows4: rows4 },
  { rows5: rows5 }
];

const TransactionsAll = () => {
  const [searchValue, setSearchValue] = useState('');
  const [value, setValue] = useState<Number>(0);

  // * Function for setting new value of tab index to state
  /////////////////////////////////////////////////////////
  const handleChange = (event: React.SyntheticEvent, newValue: Number) => {
    setValue(newValue);
  };

  // * Function for finding specific array from whole data
  ////////////////////////////////////////////////////////
  const data = `rows${value}`;
  const foundRows = AllRows.find((item: any) =>
    Object.keys(item).find(key => key.toLowerCase() === data.toLowerCase())
  );
  const filteredRows0Data = foundRows && foundRows !== undefined && foundRows[data].filter((row: any) =>
    row?.Name?.toLowerCase().includes(searchValue)
  );
  console.log('console_filteredRows0Data', filteredRows0Data)


  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Page title={'Transactions'}>
      <div className="my-5 mx-5">
        <div className="topContent flex items-center w-full border-b border-GRAY_101">
          <Tabs
            value={value}
            onChange={handleChange}
            textColor="orange"
            indicatorColor="primary"
            aria-label="secondary tabs example"
          >
            {tabData && tabData.map((tab, index) => (
              <Tab
                key={index}
                label={tab.label}
                className='text-GRAY_101 leading-[normal] text-sm font-medium'
                sx={{ textTransform: 'capitalize' }}
                {...a11yProps(index)}
              />
            ))}
          </Tabs>
        </div>
        <div className="mt-[22px]">
          <Card>
            <div className="container pb-5 flex justify-between items-center border-b border-GRAY_101">
              <SearchBar placeholder='Search by name' searchValue={searchValue} setSearchValue={setSearchValue} />
              <div className="h-full flex gap-2.5">
                <div className='flex items-center'>
                  <p className='font-medium text-sm text-GRAY_101'>Amount Range :</p>
                </div>
                <div className='flex items-center '>
                  <Input w='12ch' placeholder='Min Amount' />
                  <div className='text-[color:var(--Secondary-Text,#777E90)] text-center text-sm not-italic font-medium leading-[normal]'>-</div>
                  <Input w='12ch' placeholder='Max Amount' />
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
                <TransactionTable rows={tab.content} />
              </div>
              // </CustomTabPanel>
            ))}
            
          </Card>
        </div>
      </div>
    </Page>
  )
}

export default TransactionsAll
