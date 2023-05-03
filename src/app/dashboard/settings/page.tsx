"use client"
import React, { useState } from 'react';

// ** MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// ** Components
import Password from '@/view/settings/password/Password';
import Profile from '@/view/settings/profile/Profile';


interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
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
        <Box>
          <>{children}</>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index: number) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


const Settings = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <TransactionDetails /> */}
      <div className='w-full px-5 bg-white py-8'>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs sx={{textTransform: 'capitalize'}} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{textTransform: 'capitalize'}} label="Account Details" {...a11yProps(0)} />
            <Tab sx={{textTransform: 'capitalize'}} label="Profile" {...a11yProps(1)} />
            <Tab sx={{textTransform: 'capitalize'}} label="Password" {...a11yProps(2)} />
            <Tab sx={{textTransform: 'capitalize'}} label="Preferences" {...a11yProps(3)} />
            <Tab sx={{textTransform: 'capitalize'}} label="Notifications" {...a11yProps(4)} />
            <Tab sx={{textTransform: 'capitalize'}} label="API Integrations" {...a11yProps(5)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <p className="text-black">Account Details</p>
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Password />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <p className="text-black">Preferences</p>
        </TabPanel>
        <TabPanel value={value} index={4}>
          <p className="text-black">Notifications</p>
        </TabPanel>
        <TabPanel value={value} index={5}>
          <p className="text-black">API Integrations</p>
        </TabPanel>
      </div>

    </>
  )
}

export default Settings

