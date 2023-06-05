"use client"
import { useEffect, useState } from 'react';

// ** Hooks 
import { useAuth } from '@/hooks/useAuth';

// ** MUI
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// ** Third Party 
import { toast } from 'react-hot-toast'

//** RTQ
import { useDispatch } from 'react-redux'
import { AppDispatch } from '@/store'
import { MyData, fetchAsyncProfile, postAsyncProfile, updateAsyncProfile } from '@/store/app/profile'

// ** Components
import Password from '@/view/settings/password/Password';
import Profile from '@/view/settings/profile/Profile';
import Preferences from '@/view/settings/Preferences/Preferences';
import Notification from '@/view/settings/Notification/Notification';
import Account from '@/view/settings/Account/Account';
import Integrations from '@/view/settings/Integrations/Integrations';


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


export interface UserData {
  firstname: string
  gender: string
  dateofbirth: string
  country: string
  phonenumber: string
  address: any
  idtype: any
  occupation: string
}


const Settings = () => {
  const [value, setValue] = useState(0);
  const [data, setData] = useState<UserData[]>([])

  // ** Hooks
  const dispatch = useDispatch<AppDispatch>()

  // ** Context
  const auth = useAuth()
  const userId = auth.user?.id

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  useEffect(() => {
    const profileInfo = {
      url: `/records/profile/?filter=userid,eq,${userId}`,
    }
    dispatch(fetchAsyncProfile(profileInfo))
      .unwrap()
      .then(originalPromiseResult => {
        // console.log(originalPromiseResult.status)
        // originalPromiseResult.status === 200 &&

        setData(originalPromiseResult.records)
      })
      .catch(rejectedValueorSerializedError => {
        console.log(rejectedValueorSerializedError.message)
        {
          rejectedValueorSerializedError && toast.error(rejectedValueorSerializedError.message)
        }
      })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

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
          <Account />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <Profile />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <Password />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <Preferences />
        </TabPanel>
        <TabPanel value={value} index={4}>
          <Notification />
        </TabPanel>
        <TabPanel value={value} index={5}>
          <Integrations />
        </TabPanel>
      </div>

    </>
  )
}

export default Settings

