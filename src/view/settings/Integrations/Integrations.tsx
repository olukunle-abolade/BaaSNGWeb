import { useState } from 'react'

// ** MUI
import { Divider } from '@mui/material'

// ** Third Party 
import { BsPlus } from 'react-icons/bs'
import { FaRegTrashAlt } from 'react-icons/fa'
import { FiAlertTriangle } from 'react-icons/fi'

// ** Components
import CustomButton from '@/components/CustomButton'
import { PasswordField, TextField } from '@/components/FormComponent'
import SidebarAddUser from '@/components/user/AddUserDrawer'


const Integrations = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <div className='h-full'>
      {/*  */}
      <div className="flex items-center justify-between mt-8">
        <div className="space-y-1">
          <h3 className='text-[#2D2D2D] text-xl font-semibold'>API Configuration</h3>
          <p className='text-[#2D2D2D] text-sm font-normal'>Adjust notification settings </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE'}} />
          <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
        </div>
      </div>

      {/* Live Mode */}
      <div className="w-1/2">
        <p className='w-fit py-2 px-3 rounded-2xl text-[20px] text-[#2D2D2D] font-semibold bg-kgsec mt-6'>Live Mode</p>

        <PasswordField label='Live Secret Key' placeholder='**************************************************' />

        <TextField label='Live Public Key' type="text" placeholder="pk_live_2e9c809e69e463c1f43215786022b8076be8e17a" />

        <div className="flex items-center space-x-6">
          {/* ip whilelist */}
          <h3 className='text-sm text-n800 font-medium'>IP Whitelist</h3>
          <CustomButton title='Add IP addresses' onClick={toggleAddUserDrawer} textStyle={{color: "#4730A3"}} buttonColor='#E9E6F4' buttonStyle={{width: 199}} />
        </div>

        <div className="space-y-6 mt-6">
          <div className="">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Live Callback URL</label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  h-[44px]">
                <span className="flex select-none items-center px-3 text-n100 text-[16px] font-normal sm:text-sm border-r border-[#D0D5DD]">http:// </span>
                <input type="text" name="username" id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-n100 placeholder:text-n100 sm:text-sm sm:leading-6" placeholder="www.baas.com" />
              </div>
            </div>
          </div>
          <div className="">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Live Webhook URL</label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  h-[44px]">
                <span className="flex select-none items-center px-3 text-n100 text-[16px] font-normal sm:text-sm border-r border-[#D0D5DD]">http:// </span>
                <input type="text" name="username" id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-n100 placeholder:text-n100 sm:text-sm sm:leading-6" placeholder="www.baas.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <Divider variant='middle' sx={{my: 5}} />

      {/* Test Mode */}
      <div className="w-1/2">
        <p className='w-fit py-2 px-3 rounded-2xl text-[20px] text-[#2D2D2D] font-semibold bg-krsec mt-6'>Test Mode</p>
        {/* message */}
        <p className='w-fit flex items-center py-2 px-2 rounded-2xl text-sm text-[#B54708] font-normal bg-kysec mt-6'>These keys are for testing only. Please DO NOT use them in production. <FiAlertTriangle color='#F79009' className='ml-2'/></p>

        <PasswordField label='Live Secret Key' placeholder='**************************************************' />

        <TextField label='Live Public Key' type="text" placeholder="pk_live_2e9c809e69e463c1f43215786022b8076be8e17a" />

        <div className="flex items-center space-x-6">
          {/* ip whilelist */}
          <h3 className='text-sm text-n800 font-medium'>IP Whitelist</h3>
          {/* IP address && Add Buttin */}
          <div className="flex items-center space-x-2">
            <div className="w-fit h-9 px-4 flex items-center justify-center  rounded-2xl bg-[#F2F4F7]">
              <p className='text-sm text-[#344054] font-normal '>123.345.678</p>
            </div>
            <div className='w-9 h-9 flex items-center justify-center rounded-lg bg-p50'>
              <FaRegTrashAlt color='#4730A3' size={16.67} />
            </div>
            <div className='w-9 h-9 flex items-center justify-center rounded-lg bg-p50'>
              <BsPlus color='#4730A3' size={24}  />
            </div>
          </div>
        </div>

        <div className="space-y-6 mt-6">
          <div className="">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Live Callback URL</label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  h-[44px]">
                <span className="flex select-none items-center px-3 text-n100 text-[16px] font-normal sm:text-sm border-r border-[#D0D5DD]">http:// </span>
                <input type="text" name="username" id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-n100 placeholder:text-n100 sm:text-sm sm:leading-6" placeholder="www.untitledui.com" />
              </div>
            </div>
          </div>
          <div className="">
            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Live Webhook URL</label>
            <div className="mt-2">
              <div className="flex rounded-md shadow-sm ring-1 ring-inset ring-gray-300  h-[44px]">
                <span className="flex select-none items-center px-3 text-n100 text-[16px] font-normal sm:text-sm border-r border-[#D0D5DD]">http:// </span>
                <input type="text" name="username" id="username"  className="block flex-1 border-0 bg-transparent py-1.5 pl-1 text-n100 placeholder:text-n100 sm:text-sm sm:leading-6" placeholder="www.untitledui.com" />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Submit button */}
      <div className="flex space-x-8 items-center justify-end">
        <CustomButton title='Cancel' textStyle={{color: "#4A4A4A"}} buttonColor='transparent' buttonStyle={{borderWidth: 1, borderColor: '#DEDEDE', width: 147}} />
        <CustomButton title='Save Changes' buttonStyle={{width: 147}} />
      </div>

      {/* Modal */}
      <SidebarAddUser title='QR Payment' open={addUserOpen} toggle={toggleAddUserDrawer} >
      </SidebarAddUser>
    </div>
  )
}

export default Integrations