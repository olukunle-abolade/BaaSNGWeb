"use client"

import  { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation';

// ** Third Party
import {IoSearch} from "react-icons/io5"
import { IoMdNotificationsOutline } from 'react-icons/io'
import {ImNotification} from "react-icons/im"
import { notification } from '@/utils/ui-data'
import { Controller, useForm } from 'react-hook-form'

// ** Component
import Dropdown from '../dropdown/dropdown'
import CustomButton from '../user/CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';
import Badge from '../badge/badge';

// ** Styles
import { TopNavNotificationItem, TopNavWrapper} from './style-topnav'
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select } from '@mui/material';
import { SelectField, TextField } from '../FormComponent';


const claimStatus: any = {
  "deactivated" : "fail",
  "active": "success",
}

const renderNotification = (item: any, index: any) => (
  <TopNavNotificationItem key = {index}>
    <div className='flex items-center space-x-3'>
      <div className="w-12 h-12 rounded-full border border-n40"></div>
      {/* <ImNotification className= ""/> */}
      <div className='space-y-1'>
        {/*  */}
        <h3 className='text-[#2D2D2D] text-sm font-semibold'>Send Money</h3>
        {/*  */}
        <p className='text-n100 '>Receiver : David Ogun...( WEMA...0987)</p>
        {/* Badge */}
        <Badge content = "success" type="success" />
      </div>
    </div>

    <div className=''>
      {/* date */}
      <p className='text-n50 text-xs font-normal'>Mar 02, 2023. 10:53</p>
      {/* amount */}
      <h3 className='text-sm text-[#2D2D2D] font-semibold'>₦ 5,000.00</h3>
    </div>

    {/* <span className = "text-sm font-semibold text-[#2D2D2D]">{item.note}</span> */}
  </TopNavNotificationItem>
)

const renderHeader = () => (
  <div className='flex justify-between items-center'>
    {/*  */}
    <h3 className='text-n400 text-xs font-semibold'>Notifications</h3>
    <button className='text-kprimary text-xs font-semibold'>Mark all as read</button>
  </div>
)


const defaultValues = {
  name: '',
  email: '',
  status: '',
}


const Topnav = () => {
  // ** State
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)

  // ** Hooks
  const {
    reset,
    control,
    setValue,
    setError,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues,
    mode: 'onChange',
    // resolver: yupResolver(schema)
  })
  const pathname = usePathname();

  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)


  let name = "";
  if(pathname === "/dashboard"){
    name = "DASHBOARD"
  }else if(pathname === "/dashboard/transactions"){
    name = "TRANSACTIONS"
  }else if(pathname === "/dashboard/administration"){
    name = "ADMINISTRATION"
  }else if(pathname === "/dashboard/settings"){
    name = "SETTINGS"
  }

  const onSubmit = (data: any) => {
    // if (store.allData.some((u: UsersType) => u.email === data.email || u.username === data.username)) {
    //   store.allData.forEach((u: UsersType) => {
    //     if (u.email === data.email) {
    //       setError('email', {
    //         message: 'Email already exists!'
    //       })
    //     }
    //     if (u.username === data.username) {
    //       setError('username', {
    //         message: 'Username already exists!'
    //       })
    //     }
    //   })
    // } else {
    //   dispatch(addUser({ ...data, role, currentPlan: plan }))
    //   toggle()
    //   reset()
    // }
  }


  return (
    <>
      <TopNavWrapper>
        {/* Left hand side top nav */}
        <div className = "left_Topnav">
          <h3 className='text-sm text-[#2D2D2D] font-semibold'>{name}</h3>
        </div>

        {/* Right Hand side nav */}
        <div className = "flex items-center space-x-5">
          {/* setting */}
          <div className="flex items-center justify-center h-10 w-10 rounded-lg bg-white">
            <IoSearch className='text-n100 hover:scale-150' size={20}/>
          </div>
          {/* button */}
          {
            name === 'ADMINISTRATION' &&
            <CustomButton title='New' onClick={toggleAddUserDrawer} iconName buttonStyle={{display: 'flex', alignItems: 'center'}} textStyle={{marginLeft: 4}} />
          }
          {/* notification */}
          <div className="relative flex items-center justify-center h-10 w-10 rounded-lg bg-white">
            <Dropdown
              icon = {<IoMdNotificationsOutline/>}
              badge
              contentData = {notification}
              renderData = {(item: any, index: number) => renderNotification(item, index)}
              renderHeader = {() => renderHeader()}
              // renderFooter = {() => <Link href= "#"> View All </Link>}
            />
          </div>
        </div>
      </TopNavWrapper>
      <SidebarAddUser title='Create Role & Privileges' open={addUserOpen} toggle={toggleAddUserDrawer} >
        <form onSubmit={handleSubmit(onSubmit)}>
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
    </>
  )
}

export default Topnav;
