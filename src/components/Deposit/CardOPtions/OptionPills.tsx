import { useTheme } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import NoCardAdded from './NoCardAdded';
import CardComponent from '../DepositCommons/CardComponent';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { cards } from '../data/cards';
import { upis } from '../data/upis';
import AddNweCard from '../DepositCommons/AddNweCard';
import NetBankingComponent from '../NetBankingComponent';
import DepositButton from '../DepositCommons/DepositButton';
import { toast } from 'react-toastify';

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
          xs:"15px",
          md:"25px",
          lg:"30px",
        },
        paddingRight:{
          xs:"15px",
          md:"25px",
          lg:"30px",
        },
        marginTop:"30px",
        }}>
          <Box>{children}</Box>
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
  const [haveCard,setHaveCard] = useState(false);
  const [haveUpi,setHaveUpi] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  // const [selected,setSelected] =useState(false);
  const [selectedCardId, setSelectedCardId] = useState(null);
  const [selectedUpiId, setSelectedUpiId] = useState(null);


  const handleCardClick = (card) => {
    setSelectedItem(card);
    setSelectedCardId(card.id);
  };
  
  const handleUpiClick = (upi) => {
    setSelectedItem(upi);
    setSelectedUpiId(upi.id);
    
  };

  const handleNextButtonClick = () => {
    if (selectedItem) {
      router.push({
        pathname: 'amount',
        query: { details: JSON.stringify(selectedItem) }
      });
    } else {
      toast.error('Please select a card or UPI ID')
    }
  };

  useEffect(()=>{
    if (cards.length  > 0){
      setHaveCard(true)
    }
    if(upis.length > 0){
      setHaveUpi(true)
    }
  },[])

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index: number) => {
    setValue(index);
  };

  return (
<>
<Box sx={{ bgcolor: '#1C1C24', width: '100%',marginTop:"30px" ,borderRadius:"10px",cursor:"pointer"}}>
      <AppBar position="static" sx={{ backgroundColor: '#1C1C24', boxShadow: 'none',borderRadius:"10px",width:'100%'}}>
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
          {haveCard ?
          <div className='grid gap-5'>
             {cards?.map((card)=>(
              <div className={`${selectedCardId === card.id  ? 'border-[1px] border-BLUE_201 rounded-[10px]' :''}`} onClick={()=>handleCardClick(card)}>
                   <CardComponent name={card?.name} logo={card?.cardType} accNo={card?.accountNumber}  expiry={card?.expiryDate} background={true} cvv={card?.cvv} cvvBg={false}  />
              </div>
                  
             ))}
          <AddNweCard  wording='Add new card' />
          </div>
          :
         <div className='grid gap-5'>
          <NoCardAdded /> 
          <AddNweCard  wording='Add new card'/>
         </div>
          }
        </TabPanel>

        <TabPanel value={value} index={1} dir={theme.direction}>
        {haveUpi ?
          <div className='grid gap-5'>
         {upis?.map((upi)=>(
            <div className={`${selectedUpiId === upi.id  ? 'border-[1px] border-BLUE_201 rounded-[10px]' :''}`} onClick={()=>handleUpiClick(upi)}>
                     <CardComponent upi={true} name={upi?.name} logo={upi?.cardType} email={upi?.email} logo={upi?.cardType}  background={true}/>
            </div>
         ))}
         <AddNweCard  wording='Add new UPI ID'/>
          </div>
          :
        
         <div className='grid gap-5'>
         <NoCardAdded /> 
          <AddNweCard wording='Add new UPI ID' />
         </div>
         
          }
        </TabPanel>

        <TabPanel value={value} index={2} dir={theme.direction}>
        <div className='grid gap-5'>
          <NetBankingComponent />
          <AddNweCard wording='Proceed with Net Banking ' />
          </div>
        </TabPanel>
    </Box>

<div className='mt-[30px]'>
<DepositButton buttonText='Next' onClick={()=>router.push('amount')} width='431px' mobileWidth='100%' onClick={handleNextButtonClick}/>
</div>
</>
  );
}
