"use client"

// ** MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import React, { useState } from 'react';
import Image from 'next/image';

// ** Image
import IntraImage from '@/assets/images/intrabank.png'
import CustomButton from '@/components/CustomButton';
import Question  from '@/assets/images/question.png';
import { Button } from '@mui/material';
import SidebarAddUser from '@/components/user/AddUserDrawer';
import Utility from '@/view/bills/Utility';
import Recharge from '@/view/bills/Recharge';
import Education from '@/view/bills/Education';
import Finance from '@/view/bills/Finance';
import Travel from '@/view/bills/Travel';

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
  const [value, setValue] = React.useState(0);
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <>
      <Box sx={{ width: '100%', bgColor: 'red' }}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <Tabs sx={{textTransform: 'capitalize'}} value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab sx={{textTransform: 'capitalize'}} label="Funds Transfer" {...a11yProps(0)} />
            <Tab sx={{textTransform: 'capitalize'}} label=" Bills Payment" {...a11yProps(1)} />
            <Tab sx={{textTransform: 'capitalize'}} label="Transaction History" {...a11yProps(2)} />
          </Tabs>
        </Box>
        <TabPanel value={value} index={0}>
          <Box>
            <div className="grid grid-cols-3 gap-4 w-[966px] mt-8" onClick={toggleAddUserDrawer}>
              <div className='flex flex-col items-center justify-center bg-p50 h-[182.55px] rounded-[10px]'>
                {/* circle  */}
                <div className='flex items-center justify-center w-[75px] h-[75px] rounded-full bg-white'>
                  <Image 
                    src={IntraImage}
                    alt= ""
                    style={{height: "auto", width: "auto"}}
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className='text-black text-[20px] font-bold '>Intrabank Transfer</h3>
                  <p className='text-n100 text-sm font-normal '>Send money to people using Baas</p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center bg-p50 h-[182.55px] rounded-[10px]'>
                {/* circle  */}
                <div className='flex items-center justify-center w-[75px] h-[75px] rounded-full bg-white'>
                  <Image 
                    src={IntraImage}
                    alt= ""
                    style={{height: "auto", width: "auto"}}
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className='text-black text-[20px] font-bold '>Interbank Transfer</h3>
                  <p className='text-n100 text-sm font-normal '>Send money to other banks</p>
                </div>
              </div>
              <div className='flex flex-col items-center justify-center bg-p50 h-[182.55px] rounded-[10px]'>
                {/* circle  */}
                <div className='flex items-center justify-center w-[75px] h-[75px] rounded-full bg-white'>
                  <Image 
                    src={IntraImage}
                    alt= ""
                    style={{height: "auto", width: "auto"}}
                  />
                </div>
                <div className="text-center mt-2">
                  <h3 className='text-black text-[20px] font-bold '>International Transfer</h3>
                  <p className='text-n100 text-sm font-normal '>Send money outside Nigeria</p>
                </div>
              </div>
            </div>

            <SidebarAddUser open={addUserOpen} toggle={toggleAddUserDrawer} />
          </Box>
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
          Transaction History
        </TabPanel>

        
      </Box>
      <div className="absolute bottom-10 right-20">
        <CustomButton title='Support' textStyle = {{marginLeft: 5}}  iconImage={Question}  buttonStyle={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: 50, width: 131, borderRadius: 38, background: "linear-gradient(119.79deg, #210590 20.8%, #5428FF 88.13%)"}} />
      </div>
    </>
  )
}

export default Transactions

