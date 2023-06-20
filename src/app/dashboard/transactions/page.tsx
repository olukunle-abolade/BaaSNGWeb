"use client"
import React, { useState } from 'react';

// ** MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// **  Component
import CustomButton from '@/components/user/CustomButton';
import Question  from '@/assets/images/question.png';
import Utility from '@/view/bills/Utility';
import Recharge from '@/view/bills/Recharge';
import Education from '@/view/bills/Education';
import Finance from '@/view/bills/Finance';
import Travel from '@/view/bills/Travel';
import Fund from '@/view/Funds/fund';
import Transaction from '@/view/transactions/transaction';

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


const Transactions = () => {
  const [value, setValue] = useState(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    event.preventDefault();
    setValue(newValue);
  };

  console.log(value)

  return (
    <>
      <Box sx={{ width: '100%', bgColor: 'red' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{textTransform: 'capitalize'}} label="Funds Transfer" {...a11yProps(0)} />
            <Tab sx={{textTransform: 'capitalize'}} label=" Bills Payment" {...a11yProps(1)} />
            <Tab sx={{textTransform: 'capitalize'}} label="Transaction History" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Fund />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <div className='space-y-8 mt-10'>
            <Recharge />
            <Utility />
            <Education />
            <Travel />
            <Finance /> 
           </div>
        </TabPanel>

        <TabPanel value={value} index={2}>
          <Transaction />
        </TabPanel>

      </Box>
      <div className="absolute bottom-10 right-20">
        <CustomButton title='Support' textStyle = {{marginLeft: 5}}  iconImage={Question}  buttonStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, width: 131, borderRadius: 38, background: "linear-gradient(119.79deg, #210590 20.8%, #5428FF 88.13%)"}} />
      </div>
    </>
  )
}

export default Transactions

