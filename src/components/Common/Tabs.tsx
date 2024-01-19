import React from 'react'
import { Box, Tab, Tabs } from '@mui/material';
import { TabsProps } from './type';

const ColorTabs: React.FC<TabsProps> = ({ data, value, onChange }) => {  

  return (
      <Box className="w-full xl:w-auto border-GRAY_101 xl:border-b-0 border-b mb-6 xl:mb-0 lg:mb-0 md:mb-0 sm:mb-0">
        <Tabs
          value={value}
          onChange={onChange}
          textColor="orange"
          indicatorColor="primary"
          aria-label="secondary tabs"
          variant="scrollable"
          scrollButtons={false}
        >
          {data && data.map((tab: any) => (
            <Tab
              key={tab.id}
              label={tab.label}
              className='text-GRAY_101 !leading-4 text-sm'
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