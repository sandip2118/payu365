import React, { useState } from 'react'
import { Box, Tab, Tabs, Typography } from '@mui/material';
// import Tab from '@mui/material/Tab';
// import Box from '@mui/material/Box';
import { TabsProps } from './type';

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

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

const ColorTabs: React.FC<TabsProps> = ({ data }) => {

  const [value, setValue] = useState(data[0]?.value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  function a11yProps(index: number) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Box >
        <Tabs
          value={value}
          onChange={handleChange}
          textColor="orange"
          indicatorColor="primary"
          aria-label="secondary tabs"
        >
          {data && data.map((tab: any) => (
            <Tab
              key={tab.id}
              value={tab.value}
              label={tab.label}
              className='text-GRAY_101 pb-6 leading-4 text-sm'
              sx={{
                textTransform: 'capitalize',
                padding: "12px 0px",
                minWidth: "unset",
                marginRight: "20px"
              }} />
          ))}
          </Tabs>
      </Box>
    </Box>
  );
}

export default ColorTabs;