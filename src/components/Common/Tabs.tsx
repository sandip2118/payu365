import React, { useState } from 'react'
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { TabsProps } from './type';

const ColorTabs: React.FC<TabsProps> = ({ data }) => {

  const [value, setValue] = useState(data[0]?.value);

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
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
  );
}

export default ColorTabs;