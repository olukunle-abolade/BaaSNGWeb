'use client'

import RTable from '@/components/react-table/table'
import  {useMemo, useState} from 'react'

// ** MUI
import {Tooltip} from "@mui/material"
import Badge from '@/components/badge/badge'

// Third Party 
import {FiMoreVertical} from 'react-icons/fi'
import MOCK_DATA from '@/utils/MOCK_DATA.json'
import Dropdown from '@/components/dropdown/dropdown'
import { TopNavNotificationItem } from '@/components/topnav/style-topnav'


// ** Component
import SidebarAddUser from '@/components/user/AddUserDrawer';
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectField, TextField } from '@/components/FormComponent'
import CustomButton from '@/components/user/CustomButton'
import BasicPopover from '@/components/PopOver/PopOver'


const popOverData = [
  {
    id: 1,
    name: "edit"
  },
  {
    id: 2,
    name: "delete"
  }
]

const renderUserProfile = (item: any, index: number) => (
  <div key={index}>
    {/* <Link href = "/"  > */}
        <TopNavNotificationItem onClick={item.buttonFunc}>
          {/* {item.icon} */}
          {/* <item.icon/> */}
          <span className="text-n100 text-sm font-normal" >{item.content}</span>
        </TopNavNotificationItem>
    {/* </Link> */}
  </div>
)

const renderUserToggle = () => (
  <Tooltip title="Settings">
    <span  style={{backgroundColor: "#EAEAEA", height: 24, width: 24}} className='ml-2 flex items-center justify-center rounded z-0'>
      <FiMoreVertical  className='z-0' style={{fontSize: 17}}/>
    </span>
  </Tooltip>   
)

const RenderClaimsToggle = () => (
  // <Tooltip title="Settings">
  //   <span  style={{backgroundColor: "#EAEAEA", height: 24, width: 24}} className='ml-2 flex items-center justify-center rounded -z-10'>
  //     <FiMoreVertical  className='z-0' style={{fontSize: 17}}/>
  //   </span>
  // </Tooltip>   
  ""
)

// status color
const claimStatus: any = {
  "deactivated" : "fail",
  "active": "success",
}


const RolesnPri = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  const user_menu = [
    {
      content: 'Edit',
      buttonFunc: () => {
        toggleAddUserDrawer();
      },
    },
    {
      content: 'Delete',
      
    },
  ];
   // ***
 const columns = useMemo(
  () => [
      {
        Header: 'Role Name',
        accessor: 'first_name'
      },
      {
        Header: 'Created By',
        accessor: "last_name"
      },
      {
        Header: 'Status',
        accessor: "status",
          Cell: ({ cell:{ value}}:{cell: any}) => <Badge
          type = {claimStatus[value]}
          content = {value}
        />
      },
      {
        Header: "Action",
        width: 90,
        Cell: () => <BasicPopover data={popOverData} />

      }
    ],
  []
)

  const data = useMemo(() => MOCK_DATA, [])


  return (
    <div>
      <RTable isCheckBox columnsData={columns} data={data}/>

      <SidebarAddUser title='Create Role & Privileges' open={addUserOpen} toggle={toggleAddUserDrawer} >
        <form>
          <SelectField label='Role Name' >
            <option value="">Choose...</option>
          </SelectField>
          <TextField label='Email Address' type="text" placeholder="Enter Email Address" />
          <SelectField label='Status' >
            <option value="">Choose...</option>
          </SelectField>

          <Box sx={{ marginTop: 10 }}>
            <CustomButton title='Save' />
             {/* <<Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
              Cancel
            </Button> */}
          </Box>
        </form>
      </SidebarAddUser>
    </div>
  )
}

export default RolesnPri