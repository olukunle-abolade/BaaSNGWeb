import React, { FC } from 'react'

// ** Components
import SidebarAddUser from '@/components/user/AddUserDrawer'

export interface ISideAdd {
  addUserOpen: boolean
  toggleAddUserDrawer: () => void
}


const QR: FC<ISideAdd> = ({addUserOpen, toggleAddUserDrawer}) => {



  return (
    <div>
       <SidebarAddUser title='QR Payment' open={addUserOpen} toggle={toggleAddUserDrawer} >

      </SidebarAddUser>
    </div>
  )
}

export default QR