import { useState } from 'react'

// ** MUI
import { Divider } from '@mui/material'

// ** Components
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