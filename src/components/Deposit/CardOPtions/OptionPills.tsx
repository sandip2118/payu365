import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NoCardAdded from './NoCardAdded';
import CardComponent from '../DepositCommons/CardComponent';
import { useState } from 'react';
import { useRouter } from 'next/router';

interface TabPanelProps {
  children?: React.ReactNode;
  dir?: string;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{
          paddingLeft:{
          xs:"10px",
          md:"25px",
          lg:"30px",
        },
        paddingRight:{
          xs:"10px",
          md:"25px",
          lg:"30px",
        },
        marginTop:"30px",
        }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `full-width-tab-${index}`,
    'aria-controls': `full-width-tabpanel-${index}`,
  };
}

export default function OptionPills() {
  const router = useRouter();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [haveCard,setHaveCard] = useState(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
    <Box sx={{ bgcolor: '#1C1C24', width: '100%',marginTop:"30px" ,borderRadius:"10px"}}>
      <AppBar position="static" sx={{ backgroundColor: '#1C1C24', boxShadow: 'none',borderRadius:"10px"}}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          aria-label="full width tabs example"
          sx={{
            borderBottom: '1px solid #44444F',
            '& .MuiTabs-indicator': {
              backgroundColor: '#267FF5',
              height: '3px',
            },
          }}
        >
          <Tab label="Debit / Credit Card" {...a11yProps(0)}
           sx={{
             textTransform:"none",
             color: '#777E90', 
             fontSize: {
              xs: '12px',
              sm: "12px",
              md: '16px', 
             },
          flexWrap:'nowrap',   
             fontWeight: 500, 
             '&.Mui-selected': { color: '#FFFFFF' } 
            }} 
           />
          <Tab label="UPI" {...a11yProps(1)} 
          sx={{ 
            textTransform:"none",
          color: '#777E90', 
          fontSize: {
              xs: '12px',
              sm: "12px",
              md: '16px', 
             }, 
          flexWrap:'nowrap',   
          fontWeight: 500, 
          '&.Mui-selected': { color: '#FFFFFF' }, 
          borderRight:"1px solid #44444F",borderLeft:"1px solid #44444F"
          }} 
          />
          <Tab label="Net Banking" {...a11yProps(2)} 
          sx={{
            textTransform:"none", 
            color: '#777E90', 
            fontSize: {
              xs: '12px',
              sm: "12px",
              md: '16px', 
             }, 
          flexWrap:'nowrap',   
            fontWeight: 500, '&.Mui-selected': { color: '#FFFFFF' } 
            }} />
        </Tabs>
      </AppBar>
   
        <TabPanel value={value} index={0} dir={theme.direction} >
          {haveCard 
          ?
          <div className='grid gap-5'>
          <CardComponent name="Payoneer Master Card" logo='/assets/images/masterCard.png' accNo='69689'  expiry='5/12/2028' background={true} cvv={true} cvvBg={false}  />
          <CardComponent name="VISA Card" logo='/assets/images/visa.png' accNo='12547'  expiry='5/12/2028' background={true} cvv={true} cvvBg={false}  />
          </div>
          :
          <NoCardAdded /> 
          }
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
          Item Two
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          Item Three
        </TabPanel>
        <div className='text-BLUE_201 font16SB w-full flex items-center place-content-center py-[30px]' onClick={()=>router.push('/deposit/cardDetails')}>
          Add new Card
        </div>

    </Box>
  );
}
