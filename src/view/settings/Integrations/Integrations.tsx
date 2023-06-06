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
import AddIP from '@/view/sideadd/AddIP/AddIP'
import TestMode from '@/view/integration/testMode/TestMode'
import LiveMode from '@/view/integration/liveMode/LiveMode'


const Integrations = () => {
  const [addUserOpen, setAddUserOpen] = useState<boolean>(false)
  const toggleAddUserDrawer = () => setAddUserOpen(!addUserOpen)

  return (
    <div className='h-full'>
      
     <LiveMode toggleAddUserDrawer={toggleAddUserDrawer} />

      <Divider variant='middle' sx={{my: 5}} />

      <TestMode />

      {/* Modal */}
      <AddIP addUserOpen={addUserOpen} toggleAddUserDrawer={toggleAddUserDrawer} />
    </div>
  )
}

export default Integrations