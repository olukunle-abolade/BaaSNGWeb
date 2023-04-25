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
import CustomButton from '../CustomButton'
import SidebarAddUser from '@/components/user/AddUserDrawer';

// ** Styles
import { TopNavNotificationItem, TopNavWrapper} from './style-topnav'
import { Box, FormControl, FormHelperText, InputLabel, MenuItem, Select, TextField } from '@mui/material';


const renderNotification = (item: any, index: any) => (
  <TopNavNotificationItem key = {index}>
    <ImNotification className= "mr-2"/>
    <span className = "text-base">{item.note}</span>
  </TopNavNotificationItem>
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
              renderData = {(item: any, index: any) => renderNotification(item, index)}
              renderFooter = {() => <Link href= "#"> View All </Link>}
            />
          </div>
        </div>
      </TopNavWrapper>
      <SidebarAddUser title='Create Role & Privileges' open={addUserOpen} toggle={toggleAddUserDrawer} >
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel
              id='validation-billing-select'
              error={Boolean(errors.name)}
              htmlFor='validation-billing-select'
            >
              Role Name
            </InputLabel>
            <Controller
              name='name'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <Select
                  value={value}
                  label='Billing'
                  onChange={onChange}
                  error={Boolean(errors.name)}
                  labelId='validation-billing-select'
                  aria-describedby='validation-billing-select'
                >
                  <MenuItem value='Customer'>Customer</MenuItem>
                  <MenuItem value='Developmer'>Developer</MenuItem>
                  <MenuItem value='Teller'>Teller</MenuItem>
                </Select>
              )}
            />
            {errors.name && (
              <FormHelperText sx={{ color: 'error.main' }} id='validation-billing-select'>
                This field is required
              </FormHelperText>
            )}
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <Controller
              name='email'
              control={control}
              rules={{ required: true }}
              render={({ field: { value, onChange } }) => (
                <TextField
                  type='number'
                  value={value}
                  label='Contact'
                  onChange={onChange}
                  placeholder='(397) 294-5153'
                  error={Boolean(errors.email)}
                />
              )}
            />
          </FormControl>
          <FormControl fullWidth sx={{ mb: 6 }}>
            <InputLabel id='role-select'>Status</InputLabel>
            <Select
              fullWidth
              value={status}
              id='select-role'
              label='Select Role'
              labelId='role-select'
              inputProps={{ placeholder: 'Select Role' }}
            >
              <MenuItem value='admin'>Activate</MenuItem>
              <MenuItem value='author'>Deactivate</MenuItem>
            </Select>
          </FormControl>
          <Box sx={{ display: 'flex', alignItems: 'center' }}>
            {/* <Button size='large' type='submit' variant='contained' sx={{ mr: 3 }}>
              Submit
            </Button>
            <Button size='large' variant='outlined' color='secondary' onClick={handleClose}>
              Cancel
            </Button> */}
          </Box>
        </form>
      </SidebarAddUser>
    </>
  )
}

export default Topnav;
